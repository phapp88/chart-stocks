require('dotenv').config();
const app = require('express')();
const fetch = require('isomorphic-fetch');
const mongodb = require('mongodb').MongoClient;
const next = require('next');

const server = require('http').createServer(app);
const io = require('socket.io')(server);

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

let dbConnection;

const mongoConnect = () => {
  if (!dbConnection) {
    dbConnection = mongodb.connect(process.env.MLAB);
  }
  return dbConnection;
};

async function getPriceData(stock) {
  const res = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock.symbol}&interval=1min&apikey=${process.env.APIKEY}`);
  const json = await res.json();
  const data = json[Object.keys(json)[1]];
  return { ...stock, data };
}

(async function webSocket() {
  const db = await mongoConnect();
  io.on('connection', (socket) => {
    socket.on('symbolToAdd', async (symbol) => {
      const stockWithData = await getPriceData({ symbol });
      if (stockWithData.data) {
        io.emit('stock', stockWithData);
        db.collection('stocks').insertOne({ symbol });
      } else {
        socket.emit('errorMsg', 'Symbol does not exist');
      }
    });

    socket.on('symbolToRemove', (symbol) => {
      db.collection('stocks').deleteOne({ symbol });
      io.emit('stockToRemove', symbol);
    });
  });
}());

const wrap = fn => (...args) => fn(...args).catch(args[2]);

nextApp.prepare().then(() => {
  app.get('/stocks', wrap(async (req, res) => {
    const db = await mongoConnect();
    const stocks = await db.collection('stocks').find().toArray();
    const stocksWithData = await Promise.all(stocks.map(getPriceData));
    res.send(stocksWithData);
  }));
  app.get('*', nextHandler);
  server.listen(3000);
});
