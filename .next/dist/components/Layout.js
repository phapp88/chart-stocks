'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RangeSelector = require('./RangeSelector');

var _RangeSelector2 = _interopRequireDefault(_RangeSelector);

var _StockChart = require('./StockChart');

var _StockChart2 = _interopRequireDefault(_StockChart);

var _StockForm = require('./StockForm');

var _StockForm2 = _interopRequireDefault(_StockForm);

var _Stock = require('./Stock');

var _Stock2 = _interopRequireDefault(_Stock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function (_React$Component) {
  (0, _inherits3.default)(Layout, _React$Component);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

    var stocks = _this.props.stocks;

    _this.state = {
      chartRange: '1 Mo',
      errorMsg: '',
      stocks: stocks,
      textField: ''
    };
    _this.addStock = _this.addStock.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleErrorMsg = _this.handleErrorMsg.bind(_this);
    _this.handleRemoval = _this.handleRemoval.bind(_this);
    _this.handleStock = _this.handleStock.bind(_this);
    _this.removeStock = _this.removeStock.bind(_this);
    _this.setChartRange = _this.setChartRange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Layout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.socket = (0, _socket2.default)();
      this.socket.on('errorMsg', this.handleErrorMsg);
      this.socket.on('stock', this.handleStock);
      this.socket.on('stockToRemove', this.handleRemoval);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.socket.off('errorMsg', this.handleErrorMsg);
      this.socket.off('stock', this.handleStock);
      this.socket.off('symbolToRemove', this.handleRemoval);
      this.socket.close();
    }
  }, {
    key: 'setChartRange',
    value: function setChartRange(event) {
      this.setState({ chartRange: event.target.textContent });
    }
  }, {
    key: 'addStock',
    value: function addStock(event) {
      event.preventDefault();
      var _state = this.state,
          stocks = _state.stocks,
          textField = _state.textField;

      var symbolToAdd = textField.toUpperCase();
      var chartingStock = stocks.some(function (stock) {
        return stock.symbol === symbolToAdd;
      });
      if (!chartingStock) {
        this.socket.emit('symbolToAdd', symbolToAdd);
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ textField: event.target.value });
    }
  }, {
    key: 'handleErrorMsg',
    value: function handleErrorMsg(errorMsg) {
      var _this2 = this;

      this.setState({ errorMsg: errorMsg });
      setTimeout(function () {
        return _this2.setState({ errorMsg: '' });
      }, 2000);
    }
  }, {
    key: 'handleRemoval',
    value: function handleRemoval(symbol) {
      var nextStocks = this.state.stocks.filter(function (stock) {
        return stock.symbol !== symbol;
      });
      this.setState({ stocks: nextStocks });
    }
  }, {
    key: 'handleStock',
    value: function handleStock(stock) {
      this.setState({ stocks: this.state.stocks.concat(stock) });
    }
  }, {
    key: 'removeStock',
    value: function removeStock(event) {
      var symbolToRemove = event.target.parentNode.textContent.split('-')[0].slice(0, -1);
      var nextStocks = this.state.stocks.filter(function (stock) {
        return stock.symbol !== symbolToRemove;
      });
      this.setState({ stocks: nextStocks });
      this.socket.emit('symbolToRemove', symbolToRemove);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state2 = this.state,
          chartRange = _state2.chartRange,
          errorMsg = _state2.errorMsg,
          stocks = _state2.stocks,
          textField = _state2.textField;

      var stockList = stocks.map(function (stock) {
        return _react2.default.createElement(_Stock2.default, {
          key: stock.symbol,
          removeStock: _this3.removeStock,
          stock: stock
        });
      });

      return _react2.default.createElement('main', {
        className: 'jsx-2874393546'
      }, _react2.default.createElement('h3', {
        className: 'jsx-2874393546'
      }, 'STOCKS'), _react2.default.createElement(_RangeSelector2.default, { chartRange: chartRange, setChartRange: this.setChartRange }), _react2.default.createElement(_StockChart2.default, { chartRange: chartRange, stocks: stocks }), _react2.default.createElement('ul', {
        className: 'jsx-2874393546'
      }, stockList), _react2.default.createElement(_StockForm2.default, {
        addStock: this.addStock,
        errorMsg: errorMsg,
        handleChange: this.handleChange,
        textField: textField
      }), _react2.default.createElement('footer', {
        className: 'jsx-2874393546'
      }, 'Data provided for free by\xA0', _react2.default.createElement('a', {
        href: 'https://iextrading.com/developer/',
        rel: 'noopener noreferrer',
        target: '_blank',
        className: 'jsx-2874393546'
      }, 'IEX'), '.'), _react2.default.createElement(_style2.default, {
        styleId: '2874393546',
        css: ['main.jsx-2874393546{margin:auto;max-width:800px;}', 'h3.jsx-2874393546{margin-bottom:0;text-align:center;}', 'footer.jsx-2874393546{position:relative;text-align:center;}']
      }));
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;