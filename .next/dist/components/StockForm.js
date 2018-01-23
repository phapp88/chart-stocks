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


var StockForm = function StockForm(_ref) {
  var addStock = _ref.addStock,
      errorMsg = _ref.errorMsg,
      handleChange = _ref.handleChange,
      textField = _ref.textField;
  return _react2.default.createElement('form', { onSubmit: addStock, className: 'jsx-3321889708',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('input', {
    onChange: handleChange,
    type: 'text',
    placeholder: 'Stock Symbol',
    value: textField,
    className: 'jsx-3321889708',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement('button', {
    className: 'jsx-3321889708',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Add'), _react2.default.createElement('p', {
    className: 'jsx-3321889708',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, errorMsg), _react2.default.createElement(_style2.default, {
    styleId: '3321889708',
    css: 'form.jsx-3321889708{height:75px;padding-left:44px;margin-top:-10px;}input.jsx-3321889708{border:none;box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px rgba(0,0,0,0.14),0 1px 5px rgba(0,0,0,0.12);height:46px;font-family:Roboto,"Noto Sans",sans-serif;font-size:17px;padding-left:16px;}input.jsx-3321889708::-webkit-input-placeholder{color:rgba(0,0,0,0.37);}input.jsx-3321889708::-moz-placeholder{color:rgba(0,0,0,0.37);}input.jsx-3321889708:-ms-input-placeholder{color:rgba(0,0,0,0.37);}input.jsx-3321889708::placeholder{color:rgba(0,0,0,0.37);}button.jsx-3321889708{background-color:#9e9e9e;border:none;box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px rgba(0,0,0,0.14),0 1px 5px rgba(0,0,0,0.12);cursor:pointer;font-size:16px;height:46px;-webkit-letter-spacing:0.56px;-moz-letter-spacing:0.56px;-ms-letter-spacing:0.56px;letter-spacing:0.56px;padding:0 16px;-webkit-transition:box-shadow 0.28s cubic-bezier(0.4,0,0.2,1);transition:box-shadow 0.28s cubic-bezier(0.4,0,0.2,1);}button.jsx-3321889708:hover{opacity:0.9;}p.jsx-3321889708{color:#ff5252;margin-top:6px;text-align:center;width:200px;}@media (max-width:350px){input.jsx-3321889708{width:60%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFN0b2NrRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IsQUFHcUIsQUFLQSxBQVNjLEFBSUQsQUFZYixBQUdFLEFBT0YsVUFDWixFQXhDa0IsQUFLeUYsQUF5QjdHLEVBR2lCLFNBbkJqQixFQUljLElBZ0JNLENBakNELE9Ba0IwRixVQWpCN0csQUFpQ2MsWUFDZCxpREE5QmMsWUFDZ0MsYUFhN0IsZUFDQSxjQWJBLENBY0gsWUFDVSxFQWRKLGtCQUNwQixxRkFjaUIsZUFDMEMsb0hBQzNEIiwiZmlsZSI6ImNvbXBvbmVudHNcXFN0b2NrRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9waGFwcC9EZXNrdG9wL3Byb2plY3RzL2NoYXJ0LXN0b2NrcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTdG9ja0Zvcm0gPSAoeyBhZGRTdG9jaywgZXJyb3JNc2csIGhhbmRsZUNoYW5nZSwgdGV4dEZpZWxkIH0pID0+IChcclxuICA8Zm9ybSBvblN1Ym1pdD17YWRkU3RvY2t9PlxyXG4gICAgPGlucHV0XHJcbiAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgcGxhY2Vob2xkZXI9XCJTdG9jayBTeW1ib2xcIlxyXG4gICAgICB2YWx1ZT17dGV4dEZpZWxkfVxyXG4gICAgLz5cclxuICAgIDxidXR0b24+QWRkPC9idXR0b24+XHJcbiAgICA8cD57ZXJyb3JNc2d9PC9wPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICBmb3JtIHtcclxuICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0NHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgaGVpZ2h0OiA0NnB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM3KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWU5ZTllO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41NnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjhzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiAjZmY1MjUyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiAzNTBweCkge1xyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBgfVxyXG4gICAgPC9zdHlsZT5cclxuICA8L2Zvcm0+XHJcbik7XHJcblxyXG5TdG9ja0Zvcm0ucHJvcFR5cGVzID0ge1xyXG4gIGFkZFN0b2NrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGVycm9yTXNnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgaGFuZGxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHRleHRGaWVsZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvY2tGb3JtO1xyXG4iXX0= */\n/*@ sourceURL=components\\StockForm.js */'
  }));
};

StockForm.propTypes = {
  addStock: _propTypes2.default.func.isRequired,
  errorMsg: _propTypes2.default.string.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  textField: _propTypes2.default.string.isRequired
};

exports.default = StockForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFN0b2NrRm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJSZWFjdCIsIlN0b2NrRm9ybSIsImFkZFN0b2NrIiwiZXJyb3JNc2ciLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0RmllbGQiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFlBQVksU0FBWixBQUFZLGdCQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO01BQUgsQUFBYSxnQkFBYixBQUFhO01BQWIsQUFBdUIsb0JBQXZCLEFBQXVCO01BQXZCLEFBQXFDLGlCQUFyQyxBQUFxQzt5QkFDckQsY0FBQSxVQUFNLFVBQU4sQUFBZ0IscUJBQWhCOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7R0FBQTtjQUNFLEFBQ1ksQUFDVjtVQUZGLEFBRU8sQUFDTDtpQkFIRixBQUdjLEFBQ1o7V0FKRixBQUlTO2VBSlQ7O2dCQUFBO2tCQURGLEFBQ0UsQUFNQTtBQU5BO0FBQ0Usc0JBS0YsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FQRixBQU9FLEFBQ0Esd0JBQUEsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxLQVJGLEFBUUU7YUFSRjtTQURnQixBQUNoQjtBQUFBO0FBREY7O0FBNERBLFVBQUEsQUFBVTtZQUNFLG9CQUFBLEFBQVUsS0FEQSxBQUNLLEFBQ3pCO1lBQVUsb0JBQUEsQUFBVSxPQUZBLEFBRU8sQUFDM0I7Z0JBQWMsb0JBQUEsQUFBVSxLQUhKLEFBR1MsQUFDN0I7YUFBVyxvQkFBQSxBQUFVLE9BSnZCLEFBQXNCLEFBSVEsQUFHOUI7QUFQc0IsQUFDcEI7O2tCQU1GLEFBQWUiLCJmaWxlIjoiU3RvY2tGb3JtLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3BoYXBwL0Rlc2t0b3AvcHJvamVjdHMvY2hhcnQtc3RvY2tzIn0=