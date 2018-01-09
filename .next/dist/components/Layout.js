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

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _StockChart = require('../components/StockChart');

var _StockChart2 = _interopRequireDefault(_StockChart);

var _StockForm = require('../components/StockForm');

var _StockForm2 = _interopRequireDefault(_StockForm);

var _StockList = require('../components/StockList');

var _StockList2 = _interopRequireDefault(_StockList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\phapp\\Desktop\\projects\\chart-stocks\\components\\Layout.js';


var Layout = function (_React$Component) {
  (0, _inherits3.default)(Layout, _React$Component);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

    _this.state = {
      errorMsg: '',
      stocks: _this.props.stocks,
      textField: ''
    };
    _this.addStock = _this.addStock.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleErrorMsg = _this.handleErrorMsg.bind(_this);
    _this.handleRemoval = _this.handleRemoval.bind(_this);
    _this.handleStock = _this.handleStock.bind(_this);
    _this.removeStock = _this.removeStock.bind(_this);
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
      var symbolToRemove = event.target.parentNode.textContent;
      var nextStocks = this.state.stocks.filter(function (stock) {
        return stock.symbol !== symbolToRemove;
      });
      this.setState({ stocks: nextStocks });
      this.socket.emit('symbolToRemove', symbolToRemove);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, _react2.default.createElement(_StockChart2.default, { stocks: this.state.stocks, __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }), _react2.default.createElement(_StockList2.default, { removeStock: this.removeStock, stocks: this.state.stocks, __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), _react2.default.createElement(_StockForm2.default, {
        addStock: this.addStock,
        handleChange: this.handleChange,
        textField: this.state.textField,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        }
      }, this.state.errorMsg));
    }
  }]);

  return Layout;
}(_react2.default.Component);

Layout.propTypes = {
  stocks: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired
};

exports.default = Layout;