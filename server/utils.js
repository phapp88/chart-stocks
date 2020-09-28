const fetch = require('node-fetch');

const getStockPriceData = async (stocks) => {
  const stockSymbols = stocks.map((stock) => stock.symbol).join(',');
  let res = await fetch(
    `https://cloud.iexapis.com/stable/stock/market/batch?symbols=${stockSymbols}&types=chart,company&range=2y&filter=close,companyName,date&token=${process.env.IEX_CLOUD_TOKEN}`,
  );
  if (res.status === 402) {
    res = await fetch(
      `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${stockSymbols}&types=chart,company&range=2y&filter=close,companyName,date&token=${process.env.IEX_SANDBOX_TOKEN}`,
    );
  }
  const json = await res.json();
  const stocksWithData = stocks.map((stock) => {
    const {
      chart: data,
      company: { companyName: name },
    } = json[stock.symbol];
    return { ...stock, data, name };
  });

  return stocksWithData;
};

const randomHexColor = () => {
  const chars = '0123456789abcdef'.split('');
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }
  return hex;
};

module.exports = { getStockPriceData, randomHexColor };
