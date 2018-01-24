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

require('chartjs-plugin-annotation');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactChartjs = require('react-chartjs-2');

var _DataPoint = require('./DataPoint');

var _DataPoint2 = _interopRequireDefault(_DataPoint);

var _Tooltip = require('./Tooltip');

var _Tooltip2 = _interopRequireDefault(_Tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StockChart = function (_React$Component) {
  (0, _inherits3.default)(StockChart, _React$Component);

  function StockChart(props) {
    (0, _classCallCheck3.default)(this, StockChart);

    var _this = (0, _possibleConstructorReturn3.default)(this, (StockChart.__proto__ || (0, _getPrototypeOf2.default)(StockChart)).call(this, props));

    _this.state = {
      dataPoints: [{ x: -999, y: -999 }], // initialize for 1 stock, tooltip offscreen
      date: '',
      mouseX: 0,
      mouseY: 0,
      tooltipOpacity: 0
    };
    return _this;
  }

  (0, _createClass3.default)(StockChart, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          chartRange = _props.chartRange,
          stocks = _props.stocks;
      var _state = this.state,
          dataPoints = _state.dataPoints,
          date = _state.date,
          mouseX = _state.mouseX,
          mouseY = _state.mouseY,
          tooltipOpacity = _state.tooltipOpacity;

      var startDate = (0, _moment2.default)();
      var timeUnit = 'day';
      switch (chartRange) {
        case '1 Mo':
          startDate.subtract(1, 'months');
          break;
        case '3 Mo':
          startDate.subtract(3, 'months');
          break;
        case '6 Mo':
          startDate.subtract(6, 'months');
          timeUnit = 'week';
          break;
        case 'YTD':
          startDate.dayOfYear(1);
          break;
        case '1 Yr':
          startDate.subtract(1, 'years');
          timeUnit = 'week';
          break;
        default:
          break;
      }
      startDate.subtract(1, 'days');

      var data = {
        datasets: stocks.map(function (stock) {
          var color = stock.color,
              stockData = stock.data,
              symbol = stock.symbol;

          return {
            label: symbol,
            data: stockData.map(function (obj) {
              return { x: (0, _moment2.default)(obj.date, 'YYYY-MM-DD'), y: obj.close };
            }),
            fill: false,
            borderColor: color,
            backgroundColor: color,
            pointRadius: 0
          };
        })
      };

      var options = {
        annotation: {
          annotations: [{
            borderColor: tooltipOpacity === 0 ? 'rgba(0, 0, 0, 0)' : '#9e9e9e',
            borderWidth: 2,
            type: 'line',
            mode: 'vertical',
            scaleID: 'x-axis-0',
            value: date
          }]
        },
        onHover: function onHover(event) {
          if (event.type === 'mousemove') {
            _this2.setState({ mouseX: event.offsetX, mouseY: event.offsetY });
          } else if (event.type === 'mouseout') {
            _this2.setState({ tooltipOpacity: 0 });
          }
        },
        maintainAspectRatio: false,
        legend: { display: false },
        scales: {
          xAxes: [{
            distribution: 'series',
            gridLines: { drawOnChartArea: false },
            ticks: { display: true, minRotation: 45 },
            time: {
              min: startDate,
              unit: timeUnit,
              displayFormats: {
                day: 'MMM D',
                week: 'MMM D'
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
        tooltips: {
          enabled: false,
          intersect: false,
          mode: 'index',
          custom: function custom(tooltip) {
            if (tooltip.opacity === 0) {
              _this2.setState({ tooltipOpacity: 0 });
              return;
            }
            var mouseDate = tooltip.dataPoints[0].xLabel;
            var points = tooltip.dataPoints.map(function (point) {
              return { x: point.x, y: point.y };
            });
            _this2.setState({ dataPoints: points, date: mouseDate, tooltipOpacity: 1 });
          }
        }
      };

      var mouseDateMoment = (0, _moment2.default)(date, 'dddd, MMM D, YYYY');
      var showDataPoints = tooltipOpacity === 1 && startDate.isBefore(mouseDateMoment);

      var DataPoints = showDataPoints ? stocks.map(function (stock, i) {
        return _react2.default.createElement(_DataPoint2.default, { key: stock.symbol, color: stock.color, pos: dataPoints[i] });
      }) : null;

      return _react2.default.createElement('div', {
        className: 'jsx-1678825443'
      }, _react2.default.createElement('div', {
        className: 'jsx-1678825443' + ' ' + 'chart-container'
      }, _react2.default.createElement(_reactChartjs.Line, { data: data, options: options })), _react2.default.createElement(_Tooltip2.default, {
        date: date,
        dataPoints: dataPoints,
        mouseX: mouseX,
        mouseY: mouseY,
        opacity: tooltipOpacity,
        stocks: stocks
      }), DataPoints, _react2.default.createElement(_style2.default, {
        styleId: '1678825443',
        css: ['.chart-container.jsx-1678825443{height:400px;position:relative;}', 'div.jsx-1678825443{position:relative;}']
      }));
    }
  }]);

  return StockChart;
}(_react2.default.Component);

exports.default = StockChart;