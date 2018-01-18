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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\phapp\\Desktop\\projects\\chart-stocks\\components\\StockChart.js';


var StockChart = function (_React$Component) {
  (0, _inherits3.default)(StockChart, _React$Component);

  function StockChart() {
    (0, _classCallCheck3.default)(this, StockChart);

    return (0, _possibleConstructorReturn3.default)(this, (StockChart.__proto__ || (0, _getPrototypeOf2.default)(StockChart)).apply(this, arguments));
  }

  (0, _createClass3.default)(StockChart, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      if (this.props.chartRange !== nextProps.chartRange) {
        return true;
      }
      if (this.props.stocks.length !== nextProps.stocks.length) {
        return true;
      }
      return false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          chartRange = _props.chartRange,
          stocks = _props.stocks;

      var startDate = (0, _moment2.default)();
      switch (chartRange) {
        case '1M':
          startDate.subtract(1, 'months');
          break;
        case '3M':
          startDate.subtract(3, 'months');
          break;
        case '6M':
          startDate.subtract(6, 'months');
          break;
        case 'YTD':
          startDate.dayOfYear(1);
          break;
        case '1Y':
          startDate.subtract(1, 'years');
          break;
        default:
          break;
      }

      var data = {
        datasets: stocks.map(function (stock) {
          var color = stock.color,
              data = stock.data,
              symbol = stock.symbol;

          return {
            label: symbol,
            data: data.map(function (obj) {
              return { x: (0, _moment2.default)(obj.date), y: obj.close };
            }),
            fill: false,
            borderColor: color,
            backgroundColor: color,
            pointRadius: 0
          };
        })
      };

      var options = {
        legend: { display: false },
        scales: {
          xAxes: [{
            distribution: 'series',
            gridLines: { display: false },
            ticks: { display: true, minRotation: 45 },
            time: {
              min: startDate,
              unit: 'day',
              displayFormats: {
                day: 'MMM D'
              },
              tooltipFormat: 'dddd, MMM D, YYYY'
            },
            type: 'time'
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Closing Price (USD)'
            },
            ticks: {
              beginAtZero: stocks.length === 0,
              suggestedMax: 50
            }
          }]
        },
        tooltips: { intersect: false, mode: 'index', position: 'nearest' }
      };

      return _react2.default.createElement(_reactChartjs.Line, { data: data, options: options, __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      });
    }
  }]);

  return StockChart;
}(_react2.default.Component);

StockChart.propTypes = {
  chartRange: _propTypes2.default.string.isRequired,
  stocks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
    data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      date: _propTypes2.default.string,
      close: _propTypes2.default.number
    })),
    name: _propTypes2.default.string,
    symbol: _propTypes2.default.string
  })).isRequired
};

exports.default = StockChart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFN0b2NrQ2hhcnQuanMiXSwibmFtZXMiOlsibW9tZW50IiwiUHJvcFR5cGVzIiwiUmVhY3QiLCJMaW5lIiwiU3RvY2tDaGFydCIsIm5leHRQcm9wcyIsInByb3BzIiwiY2hhcnRSYW5nZSIsInN0b2NrcyIsImxlbmd0aCIsInN0YXJ0RGF0ZSIsInN1YnRyYWN0IiwiZGF5T2ZZZWFyIiwiZGF0YSIsImRhdGFzZXRzIiwibWFwIiwic3RvY2siLCJjb2xvciIsInN5bWJvbCIsImxhYmVsIiwieCIsIm9iaiIsImRhdGUiLCJ5IiwiY2xvc2UiLCJmaWxsIiwiYm9yZGVyQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb2ludFJhZGl1cyIsIm9wdGlvbnMiLCJsZWdlbmQiLCJkaXNwbGF5Iiwic2NhbGVzIiwieEF4ZXMiLCJkaXN0cmlidXRpb24iLCJncmlkTGluZXMiLCJ0aWNrcyIsIm1pblJvdGF0aW9uIiwidGltZSIsIm1pbiIsInVuaXQiLCJkaXNwbGF5Rm9ybWF0cyIsImRheSIsInRvb2x0aXBGb3JtYXQiLCJ0eXBlIiwieUF4ZXMiLCJzY2FsZUxhYmVsIiwibGFiZWxTdHJpbmciLCJiZWdpbkF0WmVybyIsInN1Z2dlc3RlZE1heCIsInRvb2x0aXBzIiwiaW50ZXJzZWN0IiwibW9kZSIsInBvc2l0aW9uIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJzaGFwZSIsImNvbG9ycyIsIm51bWJlciIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBUzs7Ozs7OztJLEFBRUg7Ozs7Ozs7Ozs7OzBDQUNrQixBLFdBQVcsQUFDL0I7VUFBSSxLQUFBLEFBQUssTUFBTCxBQUFXLGVBQWUsVUFBOUIsQUFBd0MsWUFBWSxBQUNsRDtlQUFBLEFBQU8sQUFDUjtBQUNEO1VBQUks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