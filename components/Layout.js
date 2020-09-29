import io from 'socket.io-client';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import RangeSelector from './RangeSelector';
import StockChart from './StockChart';
import StockForm from './StockForm';
import Stock from './Stock';

const Layout = ({ initialStocks }) => {
  const [chartRange, setChartRange] = useState('1 Mo');
  const [errorMsg, setErrorMsg] = useState('');
  const [stocks, setStocks] = useState([]);
  const [textField, setTextField] = useState('');

  const { current: socket } = useRef(io());

  useEffect(() => {
    const handleErrorMsg = (errMsg) => {
      setErrorMsg(errMsg);
      setTimeout(() => setErrorMsg(''), 2000);
    };

    const removeStock = (symbol) => {
      setStocks((currentStocks) =>
        currentStocks.filter((stock) => stock.symbol !== symbol),
      );
    };

    const addStock = (stock) => {
      setStocks((currentStocks) => currentStocks.concat(stock));
    };

    socket.on('errorMsg', handleErrorMsg);
    socket.on('stockToAdd', addStock);
    socket.on('stockToRemove', removeStock);

    return () => {
      socket.off();
      socket.close();
    };
  }, []);

  useEffect(() => {
    setStocks(initialStocks);
  }, [initialStocks]);

  const emitSymbolToAdd = (event) => {
    event.preventDefault();
    const symbolToAdd = textField.toUpperCase();
    const stockIsOnTheChart = stocks.some(
      (stock) => stock.symbol === symbolToAdd,
    );
    if (!stockIsOnTheChart) {
      socket.emit('symbolToAdd', symbolToAdd);
    }
  };

  const emitSymbolToRemove = (event) => {
    const symbolToRemove = event.target.parentNode.textContent
      .split('-')[0]
      .slice(0, -1);
    socket.emit('symbolToRemove', symbolToRemove);
  };

  const stockList = stocks.map((stock) => (
    <Stock key={stock.symbol} removeStock={emitSymbolToRemove} stock={stock} />
  ));

  return (
    <main>
      <h3>STOCKS</h3>
      <RangeSelector
        chartRange={chartRange}
        setChartRange={(event) => setChartRange(event.target.textContent)}
      />
      <StockChart chartRange={chartRange} stocks={stocks} />
      <ul>{stockList}</ul>
      <StockForm
        addStock={emitSymbolToAdd}
        errorMsg={errorMsg}
        handleChange={(event) => setTextField(event.target.value)}
        textField={textField}
      />
      <footer>
        Data provided for free by&nbsp;
        <a href="https://iexcloud.io" rel="noopener noreferrer" target="_blank">
          IEX Cloud
        </a>
        .
      </footer>
      <style jsx>
        {`
          main {
            margin: 20px auto;
            max-width: 800px;
          }
          h3 {
            margin-bottom: 0;
            text-align: center;
          }
          footer {
            position: relative;
            text-align: center;
          }
        `}
      </style>
    </main>
  );
};

Layout.propTypes = {
  initialStocks: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.string,
          close: PropTypes.number,
        }),
      ),
      name: PropTypes.string,
      symbol: PropTypes.string,
    }),
  ).isRequired,
};

export default Layout;
