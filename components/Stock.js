import PropTypes from 'prop-types';
import React from 'react';

const Stock = ({ removeStock, stock }) => {
  const { color, name, symbol } = stock;
  return (
    <li>
      {symbol}<span> - {name}</span>
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
          font-size: 15px;
          margin: 0 3px 10px 3px;
          padding: 6px 12px;
          height: 32px;
          line-height: 32px;
          display: inline-block;
        }
        li:hover {
          box-shadow: 0 0 0 2px ${color};
        }
        i {
          cursor: pointer;
          font-size: 17px;
          margin-left: 3px;
          position: relative;
          top: 1px;
        }
        i:hover {
          color: ${color};
        }
        @media (max-width: 500px) {
          span {
            display: none;
          }
        }
      `}
      </style>
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
