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

let mongoConnection;

const mongoConnect = () => {
  if (!mongoConnection) {
    mongoConnection = mongodb.connect(process.env.MLAB);
  }
  return mongoConnection;
};

const randomHexColor = () => {
  const chars = '0123456789abcdef'.split('');
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }
  return hex;
};

async function getPriceData(stocks) {
  const stockSymbols = stocks.map(stock => stock.symbol).join(',');
  try {
    const res = await fetch(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${stockSymbols}&types=chart,company&range=2y&filter=close,companyName,date`);
    const json = await res.json();
    const stocksWithData = stocks.map((stock) => {
      const { chart: data, company: { companyName: name } } = json[stock.symbol];
      return { ...stock, data, name };
    });
    return stocksWithData;
  } catch (err) {
    throw err;
  }
}

(async function webSocket() {
  const dbConnection = await mongoConnect();
  io.on('connection', (socket) => {
    socket.on('symbolToAdd', async (symbol) => {
      try {
        const color = randomHexColor();
        const stockWithData = await getPriceData([{ color, symbol }]);
        io.emit('stock', ...stockWithData);
        dbConnection.db('stocks').collection('stocks').insertOne({ color, symbol });
      } catch (err) {
        socket.emit('errorMsg', 'Symbol does not exist');
      }
    });

    socket.on('symbolToRemove', (symbol) => {
      dbConnection.db('stocks').collection('stocks').deleteOne({ symbol });
      io.emit('stockToRemove', symbol);
    });
  });
}());

const wrap = fn => (...args) => fn(...args).catch(args[2]);

nextApp.prepare().then(() => {
  app.get('/stocks', wrap(async (req, res) => {
    //const dbConnection = await mongoConnect();
    //const stocks = await dbConnection.db('stocks').collection('stocks').find().toArray();
    //const stocksWithData = await getPriceData(stocks);
    //res.send(stocksWithData);
    res.send('stocks server response');
  }));
  app.get('*', nextHandler);
  server.listen(process.env.PORT || 3000);
});
