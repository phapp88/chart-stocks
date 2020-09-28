import io from 'socket.io-client';
import PropTypes from 'prop-types';
import React from 'react';

import RangeSelector from './RangeSelector';
import StockChart from './StockChart';
import StockForm from './StockForm';
import Stock from './Stock';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    const { stocks } = this.props;
    this.state = {
      chartRange: '1 Mo',
      errorMsg: '',
      stocks,
      textField: '',
    };
    this.addStock = this.addStock.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleErrorMsg = this.handleErrorMsg.bind(this);
    this.handleRemoval = this.handleRemoval.bind(this);
    this.handleStock = this.handleStock.bind(this);
    this.removeStock = this.removeStock.bind(this);
    this.setChartRange = this.setChartRange.bind(this);
  }

  componentDidMount() {
    this.socket = io();
    this.socket.on('errorMsg', this.handleErrorMsg);
    this.socket.on('stock', this.handleStock);
    this.socket.on('stockToRemove', this.handleRemoval);
  }

  componentWillUnmount() {
    this.socket.off('errorMsg', this.handleErrorMsg);
    this.socket.off('stock', this.handleStock);
    this.socket.off('symbolToRemove', this.handleRemoval);
    this.socket.close();
  }

  setChartRange(event) {
    this.setState({ chartRange: event.target.textContent });
  }

  addStock(event) {
    event.preventDefault();
    const { stocks, textField } = this.state;
    const symbolToAdd = textField.toUpperCase();
    const stockIsOnTheChart = stocks.some(
      (stock) => stock.symbol === symbolToAdd,
    );
    if (!stockIsOnTheChart) {
      this.socket.emit('symbolToAdd', symbolToAdd);
    }
  }

  handleChange(event) {
    this.setState({ textField: event.target.value });
  }

  handleErrorMsg(errorMsg) {
    this.setState({ errorMsg });
    setTimeout(() => this.setState({ errorMsg: '' }), 2000);
  }

  handleRemoval(symbol) {
    const { stocks } = this.state;
    const nextStocks = stocks.filter((stock) => stock.symbol !== symbol);
    this.setState({ stocks: nextStocks });
  }

  handleStock(stock) {
    const { stocks } = this.state;
    this.setState({ stocks: stocks.concat(stock) });
  }

  removeStock(event) {
    const { stocks } = this.state;
    const symbolToRemove = event.target.parentNode.textContent
      .split('-')[0]
      .slice(0, -1);
    const nextStocks = stocks.filter(
      (stock) => stock.symbol !== symbolToRemove,
    );
    this.setState({ stocks: nextStocks });
    this.socket.emit('symbolToRemove', symbolToRemove);
  }

  render() {
    const { chartRange, errorMsg, stocks, textField } = this.state;
    const stockList = stocks.map((stock) => (
      <Stock key={stock.symbol} removeStock={this.removeStock} stock={stock} />
    ));

    return (
      <main>
        <h3>STOCKS</h3>
        <RangeSelector
          chartRange={chartRange}
          setChartRange={this.setChartRange}
        />
        <StockChart chartRange={chartRange} stocks={stocks} />
        <ul>{stockList}</ul>
        <StockForm
          addStock={this.addStock}
          errorMsg={errorMsg}
          handleChange={this.handleChange}
          textField={textField}
        />
        <footer>
          Data provided for free by&nbsp;
          <a
            href="https://iexcloud.io"
            rel="noopener noreferrer"
            target="_blank"
          >
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
  }
}

Layout.propTypes = {
  stocks: PropTypes.arrayOf(
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
