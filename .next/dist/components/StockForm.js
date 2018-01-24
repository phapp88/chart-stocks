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

var StockForm = function StockForm(_ref) {
  var addStock = _ref.addStock,
      errorMsg = _ref.errorMsg,
      handleChange = _ref.handleChange,
      textField = _ref.textField;
  return _react2.default.createElement('form', { onSubmit: addStock, className: 'jsx-3321889708'
  }, _react2.default.createElement('input', {
    onChange: handleChange,
    type: 'text',
    placeholder: 'Stock Symbol',
    value: textField,
    className: 'jsx-3321889708'
  }), _react2.default.createElement('button', {
    className: 'jsx-3321889708'
  }, 'Add'), _react2.default.createElement('p', {
    className: 'jsx-3321889708'
  }, errorMsg), _react2.default.createElement(_style2.default, {
    styleId: '3321889708',
    css: ['form.jsx-3321889708{height:75px;padding-left:44px;margin-top:-10px;}', 'input.jsx-3321889708{border:none;box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px rgba(0,0,0,0.14),0 1px 5px rgba(0,0,0,0.12);height:46px;font-family:Roboto,"Noto Sans",sans-serif;font-size:17px;padding-left:16px;}', 'input.jsx-3321889708::-webkit-input-placeholder{color:rgba(0,0,0,0.37);}', 'input.jsx-3321889708::-moz-placeholder{color:rgba(0,0,0,0.37);}', 'input.jsx-3321889708:-ms-input-placeholder{color:rgba(0,0,0,0.37);}', 'input.jsx-3321889708::placeholder{color:rgba(0,0,0,0.37);}', 'button.jsx-3321889708{background-color:#9e9e9e;border:none;box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px rgba(0,0,0,0.14),0 1px 5px rgba(0,0,0,0.12);cursor:pointer;font-size:16px;height:46px;-webkit-letter-spacing:0.56px;-moz-letter-spacing:0.56px;-ms-letter-spacing:0.56px;letter-spacing:0.56px;padding:0 16px;-webkit-transition:box-shadow 0.28s cubic-bezier(0.4,0,0.2,1);transition:box-shadow 0.28s cubic-bezier(0.4,0,0.2,1);}', 'button.jsx-3321889708:hover{opacity:0.9;}', 'p.jsx-3321889708{color:#ff5252;margin-top:6px;text-align:center;width:200px;}', '@media (max-width:350px){input.jsx-3321889708{width:60%;}}']
  }));
};

exports.default = StockForm;