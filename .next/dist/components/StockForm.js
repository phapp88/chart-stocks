'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx\\style.js');

var _style2 = _interopRequireDefault(_style);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\phapp\\Desktop\\projects\\chart-stocks\\components\\StockForm.js';


var StockForm = function StockForm(props) {
  var addStock = props.addStock,
      handleChange = props.handleChange,
      textField = props.textField;

  return _react2.default.createElement('form', { onSubmit: addStock, 'data-jsx': 574155462,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('input', {
    onChange: handleChange,
    type: 'text',
    placeholder: 'Stock Symbol',
    value: textField,
    'data-jsx': 574155462,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), _react2.default.createElement('button', {
    'data-jsx': 574155462,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'Add'), _react2.default.createElement(_style2.default, {
    styleId: 574155462,
    css: 'input[data-jsx="574155462"]{border:none;box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px rgba(0,0,0,0.14),0 1px 5px rgba(0,0,0,0.12);height:46px;font-size:17px;padding-left:16px}input[data-jsx="574155462"]::-webkit-input-placeholder{color:rgba(0,0,0,0.37)}input[data-jsx="574155462"]::-moz-placeholder{color:rgba(0,0,0,0.37)}input[data-jsx="574155462"]:-ms-input-placeholder{color:rgba(0,0,0,0.37)}input[data-jsx="574155462"]::placeholder{color:rgba(0,0,0,0.37)}button[data-jsx="574155462"]{background-color:#3f51b5;border:none;box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px rgba(0,0,0,0.14),0 1px 5px rgba(0,0,0,0.12);color:white;cursor:default;font-size:16px;height:46px;-webkit-letter-spacing:0.56px;-moz-letter-spacing:0.56px;-ms-letter-spacing:0.56px;letter-spacing:0.56px;padding:0 16px;text-transform:uppercase;-webkit-transition:box-shadow 0.28s cubic-bezier(0.4,0,0.2,1);transition:box-shadow 0.28s cubic-bezier(0.4,0,0.2,1)}button[data-jsx="574155462"]:hover{background-color:rgba(63,81,181,0.9)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFN0b2NrRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFja0IsQUFHdUIsQUFRYyxBQUlELEFBY2UsWUF6Qm1FLFdBUTdHLEVBSWMsWUFDK0YsQUFhN0csdUVBekJjLFlBQ0csYUFZSCxFQVhNLFVBWUgsUUFYakIsT0FZaUIsZUFDSCxZQUNVLHlHQUNQLGVBQ1UseUJBQ2dDLG9IQUMzRCIsImZpbGUiOiJjb21wb25lbnRzXFxTdG9ja0Zvcm0uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcGhhcHAvRGVza3RvcC9wcm9qZWN0cy9jaGFydC1zdG9ja3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU3RvY2tGb3JtID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBhZGRTdG9jaywgaGFuZGxlQ2hhbmdlLCB0ZXh0RmllbGQgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17YWRkU3RvY2t9PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlN0b2NrIFN5bWJvbFwiXHJcbiAgICAgICAgdmFsdWU9e3RleHRGaWVsZH1cclxuICAgICAgLz5cclxuICAgICAgPGJ1dHRvbj5BZGQ8L2J1dHRvbj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XHJcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjU2cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI4cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjMsIDgxLCAxODEsIDAuOSk7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcblN0b2NrRm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgYWRkU3RvY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgaGFuZGxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHRleHRGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvY2tGb3JtO1xyXG4iXX0= */\n/*@ sourceURL=components\\StockForm.js */'
  }));
};

StockForm.propTypes = {
  addStock: _propTypes2.default.func.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  textField: _propTypes2.default.string.isRequired
};

exports.default = StockForm;