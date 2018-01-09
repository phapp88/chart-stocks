'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

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

var _chart = require('chart.js');

var _chart2 = _interopRequireDefault(_chart);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\phapp\\Desktop\\projects\\chart-stocks\\components\\StockChart.js';


var randomHexColor = function randomHexColor() {
  var chars = '0123456789abcdef'.split('');
  var hex = '#';
  for (var i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }
  return hex;
};

var StockChart = function (_React$Component) {
  (0, _inherits3.default)(StockChart, _React$Component);

  function StockChart() {
    (0, _classCallCheck3.default)(this, StockChart);

    return (0, _possibleConstructorReturn3.default)(this, (StockChart.__proto__ || (0, _getPrototypeOf2.default)(StockChart)).apply(this, arguments));
  }

  (0, _createClass3.default)(StockChart, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.drawChart();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props.stocks.length !== prevProps.stocks.length) {
        this.drawChart();
      }
    }
  }, {
    key: 'drawChart',
    value: function drawChart() {
      var dates = (0, _keys2.default)(this.props.stocks[0].data).reverse();
      var data = { labels: dates, datasets: [] };
      var options = {
        legend: { display: false },
        title: { display: true, fontSize: 18, text: 'STOCKS' },
        tooltips: { intersect: false, mode: 'index', position: 'nearest' }
      };

      var pointStyles = ['circle', 'crossRot', 'rect', 'rectRounded', 'rectRot', 'triangle'];
      this.props.stocks.forEach(function (stock) {
        var closingData = [];
        var color = randomHexColor();
        dates.forEach(function (date) {
          closingData.push(stock.data[date]['4. close']);
        });
        data.datasets.push({
          label: stock.symbol,
          data: closingData,
          fill: false,
          borderColor: color,
          backgroundColor: color,
          pointStyle: pointStyles[Math.floor(Math.random() * pointStyles.length)]
        });
      });
      var ctx = this.canvas.getContext('2d');
      // eslint-disable-next-line no-unused-vars
      var chart = new _chart2.default(ctx, { type: 'line', data: data, options: options });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('canvas', { ref: function ref(canvas) {
          _this2.canvas = canvas;
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      });
    }
  }]);

  return StockChart;
}(_react2.default.Component);

StockChart.propTypes = {
  stocks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    _id: _propTypes2.default.string,
    symbol: _propTypes2.default.string,
    data: _propTypes2.default.object
  })).isRequired
};

exports.default = StockChart;