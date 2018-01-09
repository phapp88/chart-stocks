import io from 'socket.io-client';
import PropTypes from 'prop-types';
import React from 'react';

import StockChart from '../components/StockChart';
import StockForm from '../components/StockForm';
import StockList from '../components/StockList';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMsg: '',
      stocks: this.props.stocks,
      textField: '',
    };
    this.addStock = this.addStock.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleErrorMsg = this.handleErrorMsg.bind(this);
    this.handleRemoval = this.handleRemoval.bind(this);
    this.handleStock = this.handleStock.bind(this);
    this.removeStock = this.removeStock.bind(this);
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

  addStock(event) {
    event.preventDefault();
    const { stocks, textField } = this.state;
    const symbolToAdd = textField.toUpperCase();
    const chartingStock = stocks.some(stock => stock.symbol === symbolToAdd);
    if (!chartingStock) {
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
    const nextStocks = this.state.stocks.filter(stock => stock.symbol !== symbol);
    this.setState({ stocks: nextStocks });
  }

  handleStock(stock) {
    this.setState({ stocks: this.state.stocks.concat(stock) });
  }

  removeStock(event) {
    const symbolToRemove = event.target.parentNode.textContent;
    const nextStocks = this.state.stocks.filter(stock => stock.symbol !== symbolToRemove);
    this.setState({ stocks: nextStocks });
    this.socket.emit('symbolToRemove', symbolToRemove);
  }

  render() {
    return (
      <div>
        <StockChart stocks={this.state.stocks} />
        <StockList removeStock={this.removeStock} stocks={this.state.stocks} />
        <StockForm
          addStock={this.addStock}
          handleChange={this.handleChange}
          textField={this.state.textField}
        />
        <p>{this.state.errorMsg}</p>
      </div>
    );
  }
}

Layout.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Layout;
