const mongodb = require('mongodb').MongoClient;

let mongoConnection;

const mongoConnect = () => {
  if (!mongoConnection) {
    mongoConnection = mongodb.connect(process.env.MLAB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  return mongoConnection;
};

const deleteStock = async (symbol) => {
  const dbConnection = await mongoConnect();
  dbConnection.db('stocks').collection('stocks').deleteOne({ symbol });
};

const getStocks = async () => {
  const dbConnection = await mongoConnect();
  const stocks = await dbConnection
    .db('stocks')
    .collection('stocks')
    .find()
    .toArray();
  return stocks;
};

const insertStock = async (stock) => {
  const dbConnection = await mongoConnect();
  dbConnection.db('stocks').collection('stocks').insertOne(stock);
};

module.exports = { deleteStock, getStocks, insertStock };
