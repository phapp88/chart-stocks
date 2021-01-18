const dotenv = require('dotenv');
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const next = require('next');
const { getStocks } = require('./db');
const { getStockPriceData } = require('./utils');
const webSocket = require('./webSocket');

dotenv.config();

const expressApp = express();
const httpServer = http.createServer(expressApp);
webSocket(httpServer);

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const wrap = (fn) => (...args) => fn(...args).catch(args[2]);

nextApp.prepare().then(() => {
  expressApp
    .use(helmet({ contentSecurityPolicy: false }))
    .get(
      '/stocks',
      wrap(async (req, res) => {
        try {
          const stocks = await getStocks();
          const stocksWithData = await getStockPriceData(stocks);
          res.send(stocksWithData);
        } catch (err) {
          next(err);
        }

      }),
    )
    .get('*', nextHandler);
  httpServer.listen(process.env.PORT || 3000);
});
