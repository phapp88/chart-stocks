import PropTypes from 'prop-types';
import React from 'react';

const Stock = ({ removeStock, stock }) => {
  const { color, name, symbol } = stock;
  return (
    <li>
      {symbol} - {name}
      <i
        className="fa fa-times-circle"
        onClick={removeStock}
        role="button"
        tabIndex="0"
      />
      <style jsx>{`
        li {
          background-color: #cfcfcf;
          border-radius: 24px;
          margin: 0 3px 10px 3px;
          padding: 8px 16px;
          height: 32px;
          line-height: 32px;
          display: inline-block;
        }
        li:hover {
          box-shadow: 0 0 0 2px ${color};
        }
        i {
          cursor: pointer;
          font-size: 18px;
          margin-left: 3px;
          position: relative;
          top: 1px;
        }
        i:hover {
          color: ${color};
        }
      `}</style>
    </li>
  );
};

Stock.propTypes = {
  removeStock: PropTypes.func.isRequired,
  stock: PropTypes.shape({
    color: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string,
      close: PropTypes.number,
    })),
    name: PropTypes.string,
    symbol: PropTypes.string,
  }).isRequired,
};

export default Stock;
