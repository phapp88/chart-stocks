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
      lineNumber: 26
    }
  }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsIkhlYWQiLCJQcm9wVHlwZXMiLCJSZWFjdCIsIkxheW91dCIsIkluZGV4Iiwic3RvY2tzIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVxIiwicHJvdG9jb2wiLCJoZWFkZXJzIiwiYmFzZVVybCIsImhvc3QiLCJyZXMiLCJqc29uIiwicHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwiZGF0YSIsImRhdGUiLCJzdHJpbmciLCJjbG9zZSIsIm51bWJlciIsIm5hbWUiLCJzeW1ib2wiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7Ozs7OztBQUVuQixJQUFNLFFBQVEsU0FBUixBQUFRLFlBQUE7TUFBQSxBQUFHLGNBQUgsQUFBRzt5QkFDZixjQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxHQUFBLGtCQUNFLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQURGLEFBQ0UsQUFDQSx5REFBTSxTQUFOLEFBQWM7Z0JBQWQ7a0JBRkYsQUFFRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLFlBQVcsU0FBdEIsQUFBOEI7Z0JBQTlCO2tCQUhGLEFBR0UsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO2dCQUE1QjtrQkFKRixBQUlFLEFBQ0E7QUFEQTs7U0FDQSxBQUNNLEFBQ0o7VUFGRixBQUVPOztnQkFGUDtrQkFMRixBQUtFLEFBSUE7QUFKQTtBQUNFLHNCQUdGLGNBQUE7O2dCQUFBO2tCQUFBO0FBQUE7QUFBQSxLQVZKLEFBQ0UsQUFTRSxBQVFGLHlKQUFBLEFBQUMsa0NBQU8sUUFBUixBQUFnQjtnQkFBaEI7a0JBbkJVLEFBQ1osQUFrQkU7QUFBQTs7QUFuQko7O0FBdUJBLE1BQUEsQUFBTSw4QkFBTjt1RkFBd0Isd0JBQUE7UUFBQSxBQUFTLFlBQVQsQUFBUztnQ0FBVDtrRUFBQTtnQkFBQTt5Q0FBQTtlQUNoQjtBQURnQix1QkFDTCxJQUFBLEFBQUksUUFBSixBQUFZLHdCQURQLEFBQytCLEFBQy9DO0FBRmdCLHNCQUFBLEFBRUgsbUJBQWMsSUFBQSxBQUFJLFFBRmYsQUFFdUI7NEJBRnZCO21CQUdKLCtCQUFBLEFBQVMsVUFITDs7ZUFHaEI7QUFIZ0IsMkJBQUE7NEJBQUE7bUJBSUQsSUFKQyxBQUlELEFBQUk7O2VBQW5CO0FBSmdCLDhCQUFBOzZDQUtmLEVBQUUsUUFMYSxBQUtmOztlQUxlO2VBQUE7NEJBQUE7O0FBQUE7Z0JBQUE7QUFBeEI7O3VCQUFBOzZCQUFBO0FBQUE7OztBQVFBLE1BQUEsQUFBTTs4QkFDSSxBQUFVLDRCQUFRLEFBQVU7OEJBQzVCLEFBQVUsNEJBQVEsQUFBVTtZQUMxQixvQkFEZ0MsQUFDdEIsQUFDaEI7YUFBTyxvQkFIK0IsQUFDbEMsQUFBa0IsQUFBZ0IsQUFFckIsQUFFbkI7QUFKd0MsQUFDdEMsS0FEc0IsQ0FBbEI7VUFJQSxvQkFMa0MsQUFLeEIsQUFDaEI7WUFBUSxvQkFORixBQUFrQixBQUFnQixBQU10QjtBQU5zQixBQUN4QyxHQUR3QixDQUFsQixFQURWLEFBQWtCLEFBUVosQUFHTjtBQVhrQixBQUNoQjs7a0JBVUYsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy9waGFwcC9EZXNrdG9wL3Byb2plY3RzL2NoYXJ0LXN0b2NrcyJ9