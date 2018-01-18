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

var _jsxFileName = 'C:\\Users\\phapp\\Desktop\\projects\\chart-stocks\\pages\\index.js?entry',
    _this = undefined;

var Index = function Index(_ref) {
  var stocks = _ref.stocks;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Chart Stocks'), _react2.default.createElement('meta', { charSet: 'utf-8', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }), _react2.default.createElement('link', {
    rel: 'stylesheet',
    href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('style', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, '\n        body {\n          color: rgba(0, 0, 0, 0.87);\n          font-family: Roboto, "Noto Sans", sans-serif;\n        }\n      ')), _react2.default.createElement(_Layout2.default, { stocks: stocks, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var res, stocks;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicFetch2.default)('http://localhost:3000/stocks');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          stocks = _context.sent;
          return _context.abrupt('return', { stocks: stocks });

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, _this);
}));

Index.propTypes = {
  stocks: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    data: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      date: _propTypes2.default.string,
      close: _propTypes2.default.number
    })),
    name: _propTypes2.default.string,
    symbol: _propTypes2.default.string
  })).isRequired
};

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsIkhlYWQiLCJQcm9wVHlwZXMiLCJSZWFjdCIsIkxheW91dCIsIkluZGV4Iiwic3RvY2tzIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwianNvbiIsInByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsImRhdGEiLCJkYXRlIiwic3RyaW5nIiwiY2xvc2UiLCJudW1iZXIiLCJuYW1lIiwic3ltYm9sIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBTSxRQUFRLFNBQVIsQUFBUSxZQUFBO01BQUEsQUFBRyxjQUFILEFBQUc7eUJBQ2YsY0FBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEsR0FBQSxrQkFDRSxBQUFDOztnQkFBRDtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FERixBQUNFLEFBQ0EseURBQU0sU0FBTixBQUFjO2dCQUFkO2tCQUZGLEFBRUUsQUFDQTtBQURBOzhDQUNNLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO2dCQUE5QjtrQkFIRixBQUdFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsY0FBYSxNQUF2QixBQUE0QjtnQkFBNUI7a0JBSkYsQUFJRSxBQUNBO0FBREE7O1NBQ0EsQUFDTSxBQUNKO1VBRkYsQUFFTzs7Z0JBRlA7a0JBTEYsQUFLRSxBQUlBO0FBSkE7QUFDRSxzQkFHRixjQUFBOztnQkFBQTtrQkFBQTtBQUFBO0FBQUEsS0FWSixBQUNFLEFBU0UsQUFPRix5SkFBQSxBQUFDLGtDQUFPLFFBQVIsQUFBZ0I7Z0JBQWhCO2tCQWxCVSxBQUNaLEFBaUJFO0FBQUE7O0FBbEJKOztBQXNCQSxNQUFBLEFBQU0sMkZBQWtCLG1CQUFBO1dBQUE7Z0VBQUE7Y0FBQTt1Q0FBQTthQUFBOzBCQUFBO2lCQUNKLCtCQURJLEFBQ0osQUFBTTs7YUFBbEI7QUFEZ0IseUJBQUE7MEJBQUE7aUJBRUQsSUFGQyxBQUVELEFBQUk7O2FBQW5CO0FBRmdCLDRCQUFBOzJDQUdmLEVBQUUsUUFIYSxBQUdmOzthQUhlO2FBQUE7MEJBQUE7O0FBQUE7Y0FBQTtBQUF4Qjs7QUFNQSxNQUFBLEFBQU07OEJBQ0ksQUFBVSw0QkFBUSxBQUFVOzhCQUM1QixBQUFVLDRCQUFRLEFBQVU7WUFDMUIsb0JBRGdDLEFBQ3RCLEFBQ2hCO2FBQU8sb0JBSCtCLEFBQ2xDLEFBQWtCLEFBQWdCLEFBRXJCLEFBRW5CO0FBSndDLEFBQ3RDLEtBRHNCLENBQWxCO1VBSUEsb0JBTGtDLEFBS3hCLEFBQ2hCO1lBQVEsb0JBTkYsQUFBa0IsQUFBZ0IsQUFNdEI7QUFOc0IsQUFDeEMsR0FEd0IsQ0FBbEIsRUFEVixBQUFrQixBQVFaLEFBR047QUFYa0IsQUFDaEI7O2tCQVVGLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvcGhhcHAvRGVza3RvcC9wcm9qZWN0cy9jaGFydC1zdG9ja3MifQ==