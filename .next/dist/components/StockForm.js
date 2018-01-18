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
  return _react2.default.createElement('form', { onSubmit: addStock, className: 'jsx-3676886775',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('input', {
    onChange: handleChange,
    type: 'text',
    placeholder: 'Stock Symbol',
    value: textField,
    className: 'jsx-3676886775',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), _react2.default.createElement('button', {
    className: 'jsx-3676886775',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Add'), _react2.default.createElement('p', {
    className: 'jsx-3676886775',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, errorMsg), _react2.default.createElement(_style2.default, {
    styleId: '3676886775',
    css: 'form.jsx-3676886775{height:75px;padding-left:44px;margin-top:-10px;}input.jsx-3676886775{border:none;box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px rgba(0,0,0,0.14),0 1px 5px rgba(0,0,0,0.12);height:46px;font-family:Roboto,"Noto Sans",sans-serif;font-size:17px;padding-left:16px;}input.jsx-3676886775::-webkit-input-placeholder{color:rgba(0,0,0,0.37);}input.jsx-3676886775::-moz-placeholder{color:rgba(0,0,0,0.37);}input.jsx-3676886775:-ms-input-placeholder{color:rgba(0,0,0,0.37);}input.jsx-3676886775::placeholder{color:rgba(0,0,0,0.37);}button.jsx-3676886775{background-color:#9e9e9e;border:none;box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px rgba(0,0,0,0.14),0 1px 5px rgba(0,0,0,0.12);cursor:pointer;font-size:16px;height:46px;-webkit-letter-spacing:0.56px;-moz-letter-spacing:0.56px;-ms-letter-spacing:0.56px;letter-spacing:0.56px;padding:0 16px;-webkit-transition:box-shadow 0.28s cubic-bezier(0.4,0,0.2,1);transition:box-shadow 0.28s cubic-bezier(0.4,0,0.2,1);}button.jsx-3676886775:hover{opacity:0.9;}p.jsx-3676886775{color:#ff5252;margin-top:8px;text-align:center;width:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFN0b2NrRm9ybS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IsQUFHcUIsQUFLQSxBQVNjLEFBSUQsQUFZYixBQUdFLFlBaENJLEFBS3lGLEFBeUI3RyxFQUdpQixTQW5CakIsRUFJYyxJQWdCTSxDQWpDRCxPQWtCMEYsVUFqQjdHLEFBaUNjLFlBQ2QsaURBOUJjLFlBQ2dDLGFBYTdCLGVBQ0EsY0FiQSxDQWNILFlBQ1UsRUFkSixrQkFDcEIscUZBY2lCLGVBQzBDLG9IQUMzRCIsImZpbGUiOiJjb21wb25lbnRzXFxTdG9ja0Zvcm0uanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcGhhcHAvRGVza3RvcC9wcm9qZWN0cy9jaGFydC1zdG9ja3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU3RvY2tGb3JtID0gKHsgYWRkU3RvY2ssIGVycm9yTXNnLCBoYW5kbGVDaGFuZ2UsIHRleHRGaWVsZCB9KSA9PiAoXHJcbiAgPGZvcm0gb25TdWJtaXQ9e2FkZFN0b2NrfT5cclxuICAgIDxpbnB1dFxyXG4gICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwiU3RvY2sgU3ltYm9sXCJcclxuICAgICAgdmFsdWU9e3RleHRGaWVsZH1cclxuICAgIC8+XHJcbiAgICA8YnV0dG9uPkFkZDwvYnV0dG9uPlxyXG4gICAgPHA+e2Vycm9yTXNnfTwvcD5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgZm9ybSB7XHJcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNDRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgfVxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgICAgIGhlaWdodDogNDZweDtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzllOWU5ZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDQ2cHg7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNTZweDtcclxuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI4cyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuOTtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBjb2xvcjogI2ZmNTI1MjtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZm9ybT5cclxuKTtcclxuXHJcblN0b2NrRm9ybS5wcm9wVHlwZXMgPSB7XHJcbiAgYWRkU3RvY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgZXJyb3JNc2c6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBoYW5kbGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgdGV4dEZpZWxkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9ja0Zvcm07XHJcbiJdfQ== */\n/*@ sourceURL=components\\StockForm.js */'
  }));
};

StockForm.propTypes = {
  addStock: _propTypes2.default.func.isRequired,
  errorMsg: _propTypes2.default.string.isRequired,
  handleChange: _propTypes2.default.func.isRequired,
  textField: _propTypes2.default.string.isRequired
};

exports.default = StockForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFN0b2NrRm9ybS5qcyJdLCJuYW1lcyI6WyJQcm9wVHlwZXMiLCJSZWFjdCIsIlN0b2NrRm9ybSIsImFkZFN0b2NrIiwiZXJyb3JNc2ciLCJoYW5kbGVDaGFuZ2UiLCJ0ZXh0RmllbGQiLCJwcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFlBQVksU0FBWixBQUFZLGdCQUFBO01BQUEsQUFBRyxnQkFBSCxBQUFHO01BQUgsQUFBYSxnQkFBYixBQUFhO01BQWIsQUFBdUIsb0JBQXZCLEFBQXVCO01BQXZCLEFBQXFDLGlCQUFyQyxBQUFxQzt5QkFDckQsY0FBQSxVQUFNLFVBQU4sQUFBZ0IscUJBQWhCOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7R0FBQTtjQUNFLEFBQ1ksQUFDVjtVQUZGLEFBRU8sQUFDTDtpQkFIRixBQUdjLEFBQ1o7V0FKRixBQUlTO2VBSlQ7O2dCQUFBO2tCQURGLEFBQ0UsQUFNQTtBQU5BO0FBQ0Usc0JBS0YsY0FBQTtlQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FQRixBQU9FLEFBQ0Esd0JBQUEsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUFJO0FBQUo7QUFBQSxLQVJGLEFBUUU7YUFSRjtTQURnQixBQUNoQjtBQUFBO0FBREY7O0FBc0RBLFVBQUEsQUFBVTtZQUNFLG9CQUFBLEFBQVUsS0FEQSxBQUNLLEFBQ3pCO1lBQVUsb0JBQUEsQUFBVSxPQUZBLEFBRU8sQUFDM0I7Z0JBQWMsb0JBQUEsQUFBVSxLQUhKLEFBR1MsQUFDN0I7YUFBVyxvQkFBQSxBQUFVLE9BSnZCLEFBQXNCLEFBSVEsQUFHOUI7QUFQc0IsQUFDcEI7O2tCQU1GLEFBQWUiLCJmaWxlIjoiU3RvY2tGb3JtLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3BoYXBwL0Rlc2t0b3AvcHJvamVjdHMvY2hhcnQtc3RvY2tzIn0=