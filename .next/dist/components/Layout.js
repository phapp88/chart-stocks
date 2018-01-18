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

var _jsxFileName = 'C:\\Users\\phapp\\Desktop\\projects\\chart-stocks\\components\\Layout.js';


var Layout = function (_React$Component) {
  (0, _inherits3.default)(Layout, _React$Component);

  function Layout(props) {
    (0, _classCallCheck3.default)(this, Layout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call(this, props));

    var stocks = _this.props.stocks;
    _this.state = {
      chartRange: '1M',
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
      if (colors.length === stocks.length) {
        colors.push(randomHexColor());
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
          stock: stock,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          }
        });
      });

      return _react2.default.createElement('div', {
        className: 'jsx-2582545784',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement('h3', {
        className: 'jsx-2582545784',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, 'STOCKS'), _react2.default.createElement(_RangeSelector2.default, { chartRange: chartRange, setChartRange: this.setChartRange, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), _react2.default.createElement(_StockChart2.default, { chartRange: chartRange, stocks: stocks, __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }), _react2.default.createElement('ul', {
        className: 'jsx-2582545784',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, stockList), _react2.default.createElement(_StockForm2.default, {
        addStock: this.addStock,
        errorMsg: errorMsg,
        handleChange: this.handleChange,
        textField: textField,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }), _react2.default.createElement('footer', {
        className: 'jsx-2582545784',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, 'Data provided for free by\xA0', _react2.default.createElement('a', { href: 'https://iextrading.com/developer/', target: '_blank', className: 'jsx-2582545784',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }, 'IEX'), '.'), _react2.default.createElement(_style2.default, {
        styleId: '2582545784',
        css: 'h3.jsx-2582545784{margin-bottom:0;text-align:center;}footer.jsx-2582545784{position:relative;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSG9CLEFBRzZCLEFBSUUsZ0JBSEEsRUFJQSxnQkFIcEIsRUFJQSIsImZpbGUiOiJjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcGhhcHAvRGVza3RvcC9wcm9qZWN0cy9jaGFydC1zdG9ja3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW8gZnJvbSAnc29ja2V0LmlvLWNsaWVudCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgUmFuZ2VTZWxlY3RvciBmcm9tICcuL1JhbmdlU2VsZWN0b3InO1xyXG5pbXBvcnQgU3RvY2tDaGFydCBmcm9tICcuL1N0b2NrQ2hhcnQnO1xyXG5pbXBvcnQgU3RvY2tGb3JtIGZyb20gJy4vU3RvY2tGb3JtJztcclxuaW1wb3J0IFN0b2NrIGZyb20gJy4vU3RvY2snO1xyXG5cclxuY2xhc3MgTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgY29uc3Qgc3RvY2tzID0gdGhpcy5wcm9wcy5zdG9ja3M7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjaGFydFJhbmdlOiAnMU0nLFxyXG4gICAgICBlcnJvck1zZzogJycsXHJcbiAgICAgIHN0b2NrcyxcclxuICAgICAgdGV4dEZpZWxkOiAnJyxcclxuICAgIH07XHJcbiAgICB0aGlzLmFkZFN0b2NrID0gdGhpcy5hZGRTdG9jay5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVFcnJvck1zZyA9IHRoaXMuaGFuZGxlRXJyb3JNc2cuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlUmVtb3ZhbCA9IHRoaXMuaGFuZGxlUmVtb3ZhbC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5oYW5kbGVTdG9jayA9IHRoaXMuaGFuZGxlU3RvY2suYmluZCh0aGlzKTtcclxuICAgIHRoaXMucmVtb3ZlU3RvY2sgPSB0aGlzLnJlbW92ZVN0b2NrLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLnNldENoYXJ0UmFuZ2UgPSB0aGlzLnNldENoYXJ0UmFuZ2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zb2NrZXQgPSBpbygpO1xyXG4gICAgdGhpcy5zb2NrZXQub24oJ2Vycm9yTXNnJywgdGhpcy5oYW5kbGVFcnJvck1zZyk7XHJcbiAgICB0aGlzLnNvY2tldC5vbignc3RvY2snLCB0aGlzLmhhbmRsZVN0b2NrKTtcclxuICAgIHRoaXMuc29ja2V0Lm9uKCdzdG9ja1RvUmVtb3ZlJywgdGhpcy5oYW5kbGVSZW1vdmFsKTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgdGhpcy5zb2NrZXQub2ZmKCdlcnJvck1zZycsIHRoaXMuaGFuZGxlRXJyb3JNc2cpO1xyXG4gICAgdGhpcy5zb2NrZXQub2ZmKCdzdG9jaycsIHRoaXMuaGFuZGxlU3RvY2spO1xyXG4gICAgdGhpcy5zb2NrZXQub2ZmKCdzeW1ib2xUb1JlbW92ZScsIHRoaXMuaGFuZGxlUmVtb3ZhbCk7XHJcbiAgICB0aGlzLnNvY2tldC5jbG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2hhcnRSYW5nZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNoYXJ0UmFuZ2U6IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCB9KTtcclxuICB9XHJcblxyXG4gIGFkZFN0b2NrKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgeyBzdG9ja3MsIHRleHRGaWVsZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHN5bWJvbFRvQWRkID0gdGV4dEZpZWxkLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBjb25zdCBjaGFydGluZ1N0b2NrID0gc3RvY2tzLnNvbWUoc3RvY2sgPT4gc3RvY2suc3ltYm9sID09PSBzeW1ib2xUb0FkZCk7XHJcbiAgICBpZiAoIWNoYXJ0aW5nU3RvY2spIHtcclxuICAgICAgdGhpcy5zb2NrZXQuZW1pdCgnc3ltYm9sVG9BZGQnLCBzeW1ib2xUb0FkZCk7XHJcbiAgICB9XHJcbiAgICBpZiAoY29sb3JzLmxlbmd0aCA9PT0gc3RvY2tzLmxlbmd0aCkge1xyXG4gICAgICBjb2xvcnMucHVzaChyYW5kb21IZXhDb2xvcigpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRleHRGaWVsZDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlRXJyb3JNc2coZXJyb3JNc2cpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvck1zZyB9KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGVycm9yTXNnOiAnJyB9KSwgMjAwMCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZW1vdmFsKHN5bWJvbCkge1xyXG4gICAgY29uc3QgbmV4dFN0b2NrcyA9IHRoaXMuc3RhdGUuc3RvY2tzLmZpbHRlcihzdG9jayA9PiBzdG9jay5zeW1ib2wgIT09IHN5bWJvbCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tzOiBuZXh0U3RvY2tzIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3RvY2soc3RvY2spIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzdG9ja3M6IHRoaXMuc3RhdGUuc3RvY2tzLmNvbmNhdChzdG9jaykgfSk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVTdG9jayhldmVudCkge1xyXG4gICAgY29uc3Qgc3ltYm9sVG9SZW1vdmUgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS50ZXh0Q29udGVudC5zcGxpdCgnLScpWzBdLnNsaWNlKDAsIC0xKTtcclxuICAgIGNvbnN0IG5leHRTdG9ja3MgPSB0aGlzLnN0YXRlLnN0b2Nrcy5maWx0ZXIoc3RvY2sgPT4gc3RvY2suc3ltYm9sICE9PSBzeW1ib2xUb1JlbW92ZSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc3RvY2tzOiBuZXh0U3RvY2tzIH0pO1xyXG4gICAgdGhpcy5zb2NrZXQuZW1pdCgnc3ltYm9sVG9SZW1vdmUnLCBzeW1ib2xUb1JlbW92ZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNoYXJ0UmFuZ2UsIGVycm9yTXNnLCBzdG9ja3MsIHRleHRGaWVsZCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHN0b2NrTGlzdCA9IHN0b2Nrcy5tYXAoc3RvY2sgPT4gKFxyXG4gICAgICA8U3RvY2tcclxuICAgICAgICBrZXk9e3N0b2NrLnN5bWJvbH1cclxuICAgICAgICByZW1vdmVTdG9jaz17dGhpcy5yZW1vdmVTdG9ja31cclxuICAgICAgICBzdG9jaz17c3RvY2t9XHJcbiAgICAgIC8+XHJcbiAgICApKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz5TVE9DS1M8L2gzPlxyXG4gICAgICAgIDxSYW5nZVNlbGVjdG9yIGNoYXJ0UmFuZ2U9e2NoYXJ0UmFuZ2V9IHNldENoYXJ0UmFuZ2U9e3RoaXMuc2V0Q2hhcnRSYW5nZX0gLz5cclxuICAgICAgICA8U3RvY2tDaGFydCBjaGFydFJhbmdlPXtjaGFydFJhbmdlfSBzdG9ja3M9e3N0b2Nrc30gLz5cclxuICAgICAgICA8dWw+e3N0b2NrTGlzdH08L3VsPlxyXG4gICAgICAgIDxTdG9ja0Zvcm1cclxuICAgICAgICAgIGFkZFN0b2NrPXt0aGlzLmFkZFN0b2NrfVxyXG4gICAgICAgICAgZXJyb3JNc2c9e2Vycm9yTXNnfVxyXG4gICAgICAgICAgaGFuZGxlQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIHRleHRGaWVsZD17dGV4dEZpZWxkfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGZvb3Rlcj5cclxuICAgICAgICAgIERhdGEgcHJvdmlkZWQgZm9yIGZyZWUgYnkmbmJzcDtcclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2lleHRyYWRpbmcuY29tL2RldmVsb3Blci9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgSUVYXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAuXHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkxheW91dC5wcm9wVHlwZXMgPSB7XHJcbiAgc3RvY2tzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgICAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgICAgY2xvc2U6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICB9KSksXHJcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgc3ltYm9sOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gIH0pKS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG4iXX0= */\n/*@ sourceURL=components\\Layout.js */'
      }));
    }
  }]);

  return Layout;
}(_react2.default.Component);

Layout.propTypes = {
  stocks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      date: _propTypes2.default.string,
      close: _propTypes2.default.number
    })),
    name: _propTypes2.default.string,
    symbol: _propTypes2.default.string
  })).isRequired
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6WyJpbyIsIlByb3BUeXBlcyIsIlJlYWN0IiwiUmFuZ2VTZWxlY3RvciIsIlN0b2NrQ2hhcnQiLCJTdG9ja0Zvcm0iLCJTdG9jayIsIkxheW91dCIsInByb3BzIiwic3RvY2tzIiwic3RhdGUiLCJjaGFydFJhbmdlIiwiZXJyb3JNc2ciLCJ0ZXh0RmllbGQiLCJhZGRTdG9jayIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVFcnJvck1zZyIsImhhbmRsZVJlbW92YWwiLCJoYW5kbGVTdG9jayIsInJlbW92ZVN0b2NrIiwic2V0Q2hhcnRSYW5nZSIsInNvY2tldCIsIm9uIiwib2ZmIiwiY2xvc2UiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidGV4dENvbnRlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN5bWJvbFRvQWRkIiwidG9VcHBlckNhc2UiLCJjaGFydGluZ1N0b2NrIiwic29tZSIsInN0b2NrIiwic3ltYm9sIiwiZW1pdCIsImNvbG9ycyIsImxlbmd0aCIsInB1c2giLCJyYW5kb21IZXhDb2xvciIsInZhbHVlIiwic2V0VGltZW91dCIsIm5leHRTdG9ja3MiLCJmaWx0ZXIiLCJjb25jYXQiLCJzeW1ib2xUb1JlbW92ZSIsInBhcmVudE5vZGUiLCJzcGxpdCIsInNsaWNlIiwic3RvY2tMaXN0IiwibWFwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwiZGF0YSIsImRhdGUiLCJzdHJpbmciLCJudW1iZXIiLCJuYW1lIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBRVAsQUFBTyxBQUFtQjs7OztBQUMxQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQVc7Ozs7Ozs7OztJQUVaLEE7a0NB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UUFBcEMsQUFBNEM7b0JBQTVDO3NCQUhGLEFBR0UsQUFDQTtBQURBOzBCQUNBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQUs7QUFBTDtBQUFBLFNBSkYsQUFJRSxBQUNBLDRCQUFBLEFBQUM7a0JBQ1csS0FEWixBQUNpQixBQUNmO2tCQUZGLEFBRVksQUFDVjtzQkFBYyxLQUhoQixBQUdxQixBQUNuQjttQkFKRixBQUlhOztvQkFKYjtzQkFMRixBQUtFLEFBTUE7QUFOQTtBQUNFLDBCQUtGLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUVFLGlEQUFBLGNBQUEsT0FBRyxNQUFILEFBQVEscUNBQW9DLFFBQTVDLEFBQW1ELHFCQUFuRDs7b0JBQUE7c0JBQUE7QUFBQTtTQUZGLEFBRUUsUUFiSixBQVdFO2lCQVhGO2FBREYsQUFDRSxBQThCSDtBQTlCRzs7Ozs7RUF0RmUsZ0IsQUFBTTs7QUF1SDNCLE9BQUEsQUFBTzs4QkFDRyxBQUFVLDRCQUFRLEFBQVU7OEJBQzVCLEFBQVUsNEJBQVEsQUFBVTtZQUMxQixvQkFEZ0MsQUFDdEIsQUFDaEI7YUFBTyxvQkFIK0IsQUFDbEMsQUFBa0IsQUFBZ0IsQUFFckIsQUFFbkI7QUFKd0MsQUFDdEMsS0FEc0IsQ0FBbEI7VUFJQSxvQkFMa0MsQUFLeEIsQUFDaEI7WUFBUSxvQkFORixBQUFrQixBQUFnQixBQU10QjtBQU5zQixBQUN4QyxHQUR3QixDQUFsQixFQURWLEFBQW1CLEFBUWIsQUFHTjtBQVhtQixBQUNqQjs7a0JBVUYsQUFBZSIsImZpbGUiOiJMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcGhhcHAvRGVza3RvcC9wcm9qZWN0cy9jaGFydC1zdG9ja3MifQ==