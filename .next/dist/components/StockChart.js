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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\phapp\\Desktop\\projects\\chart-stocks\\components\\StockChart.js';


var pointStyles = ['rect', 'circle', 'triangle', 'rectRounded', 'crossRot', 'rectRot'];

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

  function StockChart(props) {
    (0, _classCallCheck3.default)(this, StockChart);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StockChart.__proto__ || (0, _getPrototypeOf2.default)(StockChart)).call(this, props));

    var dates = (0, _keys2.default)(_this.props.stocks[0].data).reverse();
    var data = { labels: dates, datasets: [] };
    var options = {
      legend: { display: false },
      title: { display: true, fontSize: 18, text: 'STOCKS' },
      tooltips: { intersect: false, mode: 'index', position: 'nearest' }
    };
    _this.props.stocks.forEach(function (stock) {
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
    _this.state = { data: data, options: options };
    return _this;
  }

  (0, _createClass3.default)(StockChart, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (this.props.stocks.length > prevProps.stocks.length) {
        var stockToAdd = this.props.stocks[this.props.stocks.length - 1];
        this.addStockData(stockToAdd);
      }
      if (this.props.stocks.length < prevProps.stocks.length) {
        var stockToRemove = prevProps.stocks.find(function (stock) {
          return !_this2.props.stocks.includes(stock);
        });
        this.removeStockData(stockToRemove);
      }
    }
  }, {
    key: 'addStockData',
    value: function addStockData(stock) {
      var dates = (0, _keys2.default)(stock.data).reverse();
      var closingData = [];
      var color = randomHexColor();
      dates.forEach(function (date) {
        closingData.push(stock.data[date]['4. close']);
      });

      this.setState(function (prevState) {
        var _prevState$data = prevState.data,
            datasets = _prevState$data.datasets,
            labels = _prevState$data.labels;

        return {
          data: {
            labels: labels,
            datasets: datasets.concat({
              label: stock.symbol,
              data: closingData,
              fill: false,
              borderColor: color,
              backgroundColor: color,
              pointStyle: pointStyles[Math.floor(Math.random() * pointStyles.length)]
            })
          }
        };
      });
    }
  }, {
    key: 'removeStockData',
    value: function removeStockData(stock) {
      this.setState(function (prevState) {
        var _prevState$data2 = prevState.data,
            datasets = _prevState$data2.datasets,
            labels = _prevState$data2.labels;

        return {
          data: {
            labels: labels,
            datasets: datasets.filter(function (dataset) {
              return dataset.label !== stock.symbol;
            })
          }
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          data = _state.data,
          options = _state.options;

      return _react2.default.createElement(_reactChartjs.Line, { data: data, options: options, __source: {
          fileName: _jsxFileName,
          lineNumber: 95
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