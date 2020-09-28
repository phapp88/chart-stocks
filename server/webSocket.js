const socketIO = require('socket.io');
const { deleteStock, insertStock } = require('./db');
const { getStockPriceData, randomHexColor } = require('./utils');

const webSocket = async (httpServer) => {
  const io = socketIO(httpServer);
  io.on('connection', (socket) => {
    socket.on('symbolToAdd', async (symbol) => {
      try {
        const color = randomHexColor();
        const stock = { color, symbol };
        const stockWithData = await getStockPriceData([stock]);
        io.emit('stock', ...stockWithData);
        insertStock(stock);
      } catch (err) {
        socket.emit('errorMsg', 'Symbol does not exist');
      }
    });

    socket.on('symbolToRemove', (symbol) => {
      deleteStock(symbol);
      io.emit('stockToRemove', symbol);
    });
  });
};

module.exports = webSocket;
