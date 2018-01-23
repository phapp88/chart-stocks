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

var _jsxFileName = 'C:\\Users\\phapp\\Desktop\\projects\\chart-stocks\\components\\StockChart.js';


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
        return _react2.default.createElement(_DataPoint2.default, { key: stock.symbol, color: stock.color, pos: dataPoints[i], __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        });
      }) : null;

      return _react2.default.createElement('div', {
        className: 'jsx-1678825443',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1678825443' + ' ' + 'chart-container',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement(_reactChartjs.Line, { data: data, options: options, __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      })), _react2.default.createElement(_Tooltip2.default, {
        date: date,
        dataPoints: dataPoints,
        mouseX: mouseX,
        mouseY: mouseY,
        opacity: tooltipOpacity,
        stocks: stocks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }), DataPoints, _react2.default.createElement(_style2.default, {
        styleId: '1678825443',
        css: '.chart-container.jsx-1678825443{height:400px;position:relative;}div.jsx-1678825443{position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFN0b2NrQ2hhcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0pvQixBQUcwQixBQUlLLGFBSEEsS0FJcEIsYUFIQSIsImZpbGUiOiJjb21wb25lbnRzXFxTdG9ja0NoYXJ0LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3BoYXBwL0Rlc2t0b3AvcHJvamVjdHMvY2hhcnQtc3RvY2tzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdjaGFydGpzLXBsdWdpbi1hbm5vdGF0aW9uJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuXHJcbmltcG9ydCBEYXRhUG9pbnQgZnJvbSAnLi9EYXRhUG9pbnQnO1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICcuL1Rvb2x0aXAnO1xyXG5cclxuY2xhc3MgU3RvY2tDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGRhdGFQb2ludHM6IFt7IHg6IC05OTksIHk6IC05OTkgfV0sIC8vIGluaXRpYWxpemUgZm9yIDEgc3RvY2ssIHRvb2x0aXAgb2Zmc2NyZWVuXHJcbiAgICAgIGRhdGU6ICcnLFxyXG4gICAgICBtb3VzZVg6IDAsXHJcbiAgICAgIG1vdXNlWTogMCxcclxuICAgICAgdG9vbHRpcE9wYWNpdHk6IDAsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaGFydFJhbmdlLCBzdG9ja3MgfSA9IHRoaXMucHJvcHM7XHJcbiAgICBjb25zdCB7IGRhdGFQb2ludHMsIGRhdGUsIG1vdXNlWCwgbW91c2VZLCB0b29sdGlwT3BhY2l0eSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG1vbWVudCgpO1xyXG4gICAgbGV0IHRpbWVVbml0ID0gJ2RheSc7XHJcbiAgICBzd2l0Y2ggKGNoYXJ0UmFuZ2UpIHtcclxuICAgICAgY2FzZSAnMSBNbyc6XHJcbiAgICAgICAgc3RhcnREYXRlLnN1YnRyYWN0KDEsICdtb250aHMnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnMyBNbyc6XHJcbiAgICAgICAgc3RhcnREYXRlLnN1YnRyYWN0KDMsICdtb250aHMnKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnNiBNbyc6XHJcbiAgICAgICAgc3RhcnREYXRlLnN1YnRyYWN0KDYsICdtb250aHMnKTtcclxuICAgICAgICB0aW1lVW5pdCA9ICd3ZWVrJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnWVREJzpcclxuICAgICAgICBzdGFydERhdGUuZGF5T2ZZZWFyKDEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICcxIFlyJzpcclxuICAgICAgICBzdGFydERhdGUuc3VidHJhY3QoMSwgJ3llYXJzJyk7XHJcbiAgICAgICAgdGltZVVuaXQgPSAnd2Vlayc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBzdGFydERhdGUuc3VidHJhY3QoMSwgJ2RheXMnKTtcclxuXHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBkYXRhc2V0czogc3RvY2tzLm1hcCgoc3RvY2spID0+IHtcclxuICAgICAgICBjb25zdCB7IGNvbG9yLCBkYXRhOiBzdG9ja0RhdGEsIHN5bWJvbCB9ID0gc3RvY2s7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGxhYmVsOiBzeW1ib2wsXHJcbiAgICAgICAgICBkYXRhOiBzdG9ja0RhdGEubWFwKG9iaiA9PiAoeyB4OiBtb21lbnQob2JqLmRhdGUsICdZWVlZLU1NLUREJyksIHk6IG9iai5jbG9zZSB9KSksXHJcbiAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgIGJvcmRlckNvbG9yOiBjb2xvcixcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXHJcbiAgICAgICAgICBwb2ludFJhZGl1czogMCxcclxuICAgICAgICB9O1xyXG4gICAgICB9KSxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgYW5ub3RhdGlvbjoge1xyXG4gICAgICAgIGFubm90YXRpb25zOiBbe1xyXG4gICAgICAgICAgYm9yZGVyQ29sb3I6IHRvb2x0aXBPcGFjaXR5ID09PSAwID8gJ3JnYmEoMCwgMCwgMCwgMCknIDogJyM5ZTllOWUnLFxyXG4gICAgICAgICAgYm9yZGVyV2lkdGg6IDIsXHJcbiAgICAgICAgICB0eXBlOiAnbGluZScsXHJcbiAgICAgICAgICBtb2RlOiAndmVydGljYWwnLFxyXG4gICAgICAgICAgc2NhbGVJRDogJ3gtYXhpcy0wJyxcclxuICAgICAgICAgIHZhbHVlOiBkYXRlLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICB9LFxyXG4gICAgICBvbkhvdmVyOiAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ21vdXNlbW92ZScpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb3VzZVg6IGV2ZW50Lm9mZnNldFgsIG1vdXNlWTogZXZlbnQub2Zmc2V0WSB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09ICdtb3VzZW91dCcpIHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0b29sdGlwT3BhY2l0eTogMCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICBsZWdlbmQ6IHsgZGlzcGxheTogZmFsc2UgfSxcclxuICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgeEF4ZXM6IFt7XHJcbiAgICAgICAgICBkaXN0cmlidXRpb246ICdzZXJpZXMnLFxyXG4gICAgICAgICAgZ3JpZExpbmVzOiB7IGRyYXdPbkNoYXJ0QXJlYTogZmFsc2UgfSxcclxuICAgICAgICAgIHRpY2tzOiB7IGRpc3BsYXk6IHRydWUsIG1pblJvdGF0aW9uOiA0NSB9LFxyXG4gICAgICAgICAgdGltZToge1xyXG4gICAgICAgICAgICBtaW46IHN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgdW5pdDogdGltZVVuaXQsXHJcbiAgICAgICAgICAgIGRpc3BsYXlGb3JtYXRzOiB7XHJcbiAgICAgICAgICAgICAgZGF5OiAnTU1NIEQnLFxyXG4gICAgICAgICAgICAgIHdlZWs6ICdNTU0gRCcsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvb2x0aXBGb3JtYXQ6ICdkZGRkLCBNTU0gRCwgWVlZWScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdHlwZTogJ3RpbWUnLFxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgc2NhbGVMYWJlbDoge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiB0cnVlLFxyXG4gICAgICAgICAgICBsYWJlbFN0cmluZzogJ0Nsb3NpbmcgUHJpY2UgKFVTRCknLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgIGJlZ2luQXRaZXJvOiBzdG9ja3MubGVuZ3RoID09PSAwLFxyXG4gICAgICAgICAgICBzdWdnZXN0ZWRNYXg6IDUwLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XSxcclxuICAgICAgfSxcclxuICAgICAgdG9vbHRpcHM6IHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICBpbnRlcnNlY3Q6IGZhbHNlLFxyXG4gICAgICAgIG1vZGU6ICdpbmRleCcsXHJcbiAgICAgICAgY3VzdG9tOiAodG9vbHRpcCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRvb2x0aXAub3BhY2l0eSA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdG9vbHRpcE9wYWNpdHk6IDAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGNvbnN0IG1vdXNlRGF0ZSA9IHRvb2x0aXAuZGF0YVBvaW50c1swXS54TGFiZWw7XHJcbiAgICAgICAgICBjb25zdCBwb2ludHMgPSB0b29sdGlwLmRhdGFQb2ludHMubWFwKHBvaW50ID0+ICh7IHg6IHBvaW50LngsIHk6IHBvaW50LnkgfSkpO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGFQb2ludHM6IHBvaW50cywgZGF0ZTogbW91c2VEYXRlLCB0b29sdGlwT3BhY2l0eTogMSB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBtb3VzZURhdGVNb21lbnQgPSBtb21lbnQoZGF0ZSwgJ2RkZGQsIE1NTSBELCBZWVlZJyk7XHJcbiAgICBjb25zdCBzaG93RGF0YVBvaW50cyA9IHRvb2x0aXBPcGFjaXR5ID09PSAxICYmIHN0YXJ0RGF0ZS5pc0JlZm9yZShtb3VzZURhdGVNb21lbnQpO1xyXG5cclxuICAgIGNvbnN0IERhdGFQb2ludHMgPSBzaG93RGF0YVBvaW50c1xyXG4gICAgICA/IHN0b2Nrcy5tYXAoKHN0b2NrLCBpKSA9PlxyXG4gICAgICAgIDxEYXRhUG9pbnQga2V5PXtzdG9jay5zeW1ib2x9IGNvbG9yPXtzdG9jay5jb2xvcn0gcG9zPXtkYXRhUG9pbnRzW2ldfSAvPilcclxuICAgICAgOiBudWxsO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFydC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxMaW5lIGRhdGE9e2RhdGF9IG9wdGlvbnM9e29wdGlvbnN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgIGRhdGU9e2RhdGV9XHJcbiAgICAgICAgICBkYXRhUG9pbnRzPXtkYXRhUG9pbnRzfVxyXG4gICAgICAgICAgbW91c2VYPXttb3VzZVh9XHJcbiAgICAgICAgICBtb3VzZVk9e21vdXNlWX1cclxuICAgICAgICAgIG9wYWNpdHk9e3Rvb2x0aXBPcGFjaXR5fVxyXG4gICAgICAgICAgc3RvY2tzPXtzdG9ja3N9XHJcbiAgICAgICAgLz5cclxuICAgICAgICB7RGF0YVBvaW50c31cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuY2hhcnQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuU3RvY2tDaGFydC5wcm9wVHlwZXMgPSB7XHJcbiAgY2hhcnRSYW5nZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHN0b2NrczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcclxuICAgIGNvbG9yczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXHJcbiAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBkYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICBjbG9zZTogUHJvcFR5cGVzLm51bWJlcixcclxuICAgIH0pKSxcclxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICBzeW1ib2w6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgfSkpLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9ja0NoYXJ0O1xyXG4iXX0= */\n/*@ sourceURL=components\\StockChart.js */'
      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFN0b2NrQ2hhcnQuanMiXSwibmFtZXMiOlsibW9tZW50IiwiUHJvcFR5cGVzIiwiUmVhY3QiLCJMaW5lIiwiRGF0YVBvaW50IiwiVG9vbHRpcCIsIlN0b2NrQ2hhcnQiLCJwcm9wcyIsInN0YXRlIiwiZGF0YVBvaW50cyIsIngiLCJ5IiwiZGF0ZSIsIm1vdXNlWCIsIm1vdXNlWSIsInRvb2x0aXBPcGFjaXR5IiwiY2hhcnRSYW5nZSIsInN0b2NrcyIsInN0YXJ0RGF0ZSIsInRpbWVVbml0Iiwic3VidHJhY3QiLCJkYXlPZlllYXIiLCJkYXRhIiwiZGF0YXNldHMiLCJtYXAiLCJzdG9jayIsImNvbG9yIiwic3RvY2tEYXRhIiwic3ltYm9sIiwibGFiZWwiLCJvYmoiLCJjbG9zZSIsImZpbGwiLCJib3JkZXJDb2xvciIsImJhY2tncm91bmRDb2xvciIsInBvaW50UmFkaXVzIiwib3B0aW9ucyIsImFubm90YXRpb24iLCJhbm5vdGF0aW9ucyIsImJvcmRlcldpZHRoIiwidHlwZSIsIm1vZGUiLCJzY2FsZUlEIiwidmFsdWUiLCJvbkhvdmVyIiwiZXZlbnQiLCJzZXRTdGF0ZSIsIm9mZnNldFgiLCJvZmZzZXRZIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsImxlZ2VuZCIsImRpc3BsYXkiLCJzY2FsZXMiLCJ4QXhlcyIsImRpc3RyaWJ1dGlvbiIsImdyaWRMaW5lcyIsImRyYXdPbkNoYXJ0QXJlYSIsInRpY2tzIiwibWluUm90YXRpb24iLCJ0aW1lIiwibWluIiwidW5pdCIsImRpc3BsYXlGb3JtYXRzIiwiZGF5Iiwid2VlayIsInRvb2x0aXBGb3JtYXQiLCJ5QXhlcyIsInNjYWxlTGFiZWwiLCJsYWJlbFN0cmluZyIsImJlZ2luQXRaZXJvIiwibGVuZ3RoIiwic3VnZ2VzdGVkTWF4IiwidG9vbHRpcHMiLCJlbmFibGVkIiwiaW50ZXJzZWN0IiwiY3VzdG9tIiwidG9vbHRpcCIsIm9wYWNpdHkiLCJtb3VzZURhdGUiLCJ4TGFiZWwiLCJwb2ludHMiLCJwb2ludCIsIm1vdXNlRGF0ZU1vbWVudCIsInNob3dEYXRhUG9pbnRzIiwiaXNCZWZvcmUiLCJEYXRhUG9pbnRzIiwiaSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheU9mIiwic2hhcGUiLCJjb2xvcnMiLCJudW1iZXIiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTOztBQUVULEFBQU8sQUFBZTs7OztBQUN0QixBQUFPLEFBQWE7Ozs7Ozs7OztJQUVkLEE7c0NBQ0o7O3NCQUFBLEFBQVksT0FBTzt3Q0FBQTs7OElBQUEsQUFDWCxBQUNOOztVQUFBLEFBQUs7a0JBQ1MsQ0FBQyxFQUFFLEdBQUcsQ0FBTCxBQUFNLEtBQUssR0FBRyxDQURoQixBQUNDLEFBQUMsQUFBZSxRQUFRLEFBQ3BDO1lBRlcsQUFFTCxBQUNOO2NBSFcsQUFHSCxBQUNSO2NBSlcsQUFJSCxBQUNSO3NCQVBlLEFBRWpCLEFBQWEsQUFLSztBQUxMLEFBQ1g7V0FNSDs7Ozs7NkJBRVE7bUJBQUE7O21CQUN3QixLQUR4QixBQUM2QjtVQUQ3QixBQUNDLG9CQURELEFBQ0M7VUFERCxBQUNhLGdCQURiLEFBQ2E7bUJBQ3lDLEtBRnRELEFBRTJEO1VBRjNELEFBRUMsb0JBRkQsQUFFQztVQUZELEFBRWEsY0FGYixBQUVhO1VBRmIsQUFFbUIsZ0JBRm5CLEFBRW1CO1VBRm5CLEFBRTJCLGdCQUYzQixBQUUyQjtVQUYzQixBQUVtQyx3QkFGbkMsQUFFbUMsQUFDMUM7O1VBQU0sWUFBTixBQUFrQixBQUNsQjtVQUFJLFdBQUosQUFBZSxBQUNmO2NBQUEsQUFBUSxBQUNOO2FBQUEsQUFBSyxBQUNIO29CQUFBLEFBQVUsU0FBVixBQUFtQixHQUFuQixBQUFzQixBQUN0QjtBQUNGO2FBQUEsQUFBSyxBQUNIO29CQUFBLEFBQVUsU0FBVixBQUFtQixH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V0FBUixBQUFtQixJQUFJLGlCQUFBO3FCQUFVLEVBQUUsR0FBRyxNQUFMLEFBQVcsR0FBRyxHQUFHLE1BQTNCLEFBQVUsQUFBdUI7QUFBdkUsQUFBZSxBQUNmLGFBRGU7bUJBQ2YsQUFBSyxTQUFTLEVBQUUsWUFBRixBQUFjLFFBQVEsTUFBdEIsQUFBNEIsV0FBVyxnQkFBckQsQUFBYyxBQUF1RCxBQUN0RTtBQTNETCxBQUFnQixBQStDSixBQWdCWjtBQWhCWSxBQUNSO0FBaERZLEFBQ2Q7O1VBOERJLGtCQUFrQixzQkFBQSxBQUFPLE1BQS9CLEFBQXdCLEFBQWEsQUFDckM7VUFBTSxpQkFBaUIsbUJBQUEsQUFBbUIsS0FBSyxVQUFBLEFBQVUsU0FBekQsQUFBK0MsQUFBbUIsQUFFbEU7O1VBQU0scUNBQ0YsQUFBTyxJQUFJLFVBQUEsQUFBQyxPQUFELEFBQVEsR0FBUjsrQkFDWCxBQUFDLHFDQUFVLEtBQUssTUFBaEIsQUFBc0IsUUFBUSxPQUFPLE1BQXJDLEFBQTJDLE9BQU8sS0FBSyxXQUF2RCxBQUF1RCxBQUFXO3NCQUFsRTt3QkFEVyxBQUNYO0FBQUE7U0FBQTtBQUZlLEFBQ2YsT0FBQSxDQURlLEdBQW5CLEFBR0ksQUFFSjs7NkJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsb0NBQUssTUFBTixBQUFZLE1BQU0sU0FBbEIsQUFBMkI7b0JBQTNCO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsQUFBQztjQUFELEFBQ1EsQUFDTjtvQkFGRixBQUVjLEFBQ1o7Z0JBSEYsQUFHVSxBQUNSO2dCQUpGLEFBSVUsQUFDUjtpQkFMRixBQUtXLEFBQ1Q7Z0JBTkYsQUFNVTs7b0JBTlY7c0JBSkYsQUFJRSxBQVFDO0FBUkQ7QUFDRSxVQUxKO2lCQUFBO2FBREYsQUFDRSxBQXlCSDtBQXpCRzs7Ozs7RUE5SG1CLGdCLEFBQU07O0FBMEovQixXQUFBLEFBQVc7Y0FDRyxvQkFBQSxBQUFVLE9BREQsQUFDUSxBQUM3Qjs4QkFBUSxBQUFVLDRCQUFRLEFBQVU7WUFDMUIsb0JBQUEsQUFBVSxRQUFRLG9CQURjLEFBQ2hDLEFBQTRCLEFBQ3BDOzhCQUFNLEFBQVUsNEJBQVEsQUFBVTtZQUMxQixvQkFEZ0MsQUFDdEIsQUFDaEI7YUFBTyxvQkFKK0IsQUFFbEMsQUFBa0IsQUFBZ0IsQUFFckIsQUFFbkI7QUFKd0MsQUFDdEMsS0FEc0IsQ0FBbEI7VUFJQSxvQkFOa0MsQUFNeEIsQUFDaEI7WUFBUSxvQkFQRixBQUFrQixBQUFnQixBQU90QjtBQVBzQixBQUN4QyxHQUR3QixDQUFsQixFQUZWLEFBQXVCLEFBVWpCLEFBR047QUFidUIsQUFDckI7O2tCQVlGLEFBQWUiLCJmaWxlIjoiU3RvY2tDaGFydC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9waGFwcC9EZXNrdG9wL3Byb2plY3RzL2NoYXJ0LXN0b2NrcyJ9