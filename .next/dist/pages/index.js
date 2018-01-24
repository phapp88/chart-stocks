'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var Index = function Index(_ref) {
  var stocks = _ref.stocks;
  return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, 'Chart Stocks'), _react2.default.createElement('meta', { charSet: 'utf-8' }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }), _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
  }), _react2.default.createElement('style', null, '\n        body {\n          color: rgba(0, 0, 0, 0.87);\n          font-family: Roboto, "Noto Sans", sans-serif;\n        }\n      ')), _react2.default.createElement(_Layout2.default, { stocks: stocks }));
};

Index.getInitialProps = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
    var req = _ref2.req;
    var protocol, baseUrl, res, stocks;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            protocol = req.headers['x-forwarded-proto'] || 'http';
            baseUrl = protocol + '://' + req.headers.host;
            _context.next = 4;
            return (0, _isomorphicFetch2.default)(baseUrl + '/stocks');

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            stocks = _context.sent;
            return _context.abrupt('return', { stocks: stocks });

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = Index;