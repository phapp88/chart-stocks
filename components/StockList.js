import PropTypes from 'prop-types';
import React from 'react';

const StockList = props => (
  <ul>
    {props.stocks.map(stock => (
      <li key={stock._id}>
        {stock.symbol}
        <i className="fa fa-times-circle" onClick={props.removeStock} />
      </li>
    ))}
    <style jsx>{`
      li {
        background-color: #e0e0e0;
        border-radius: 16px;
        margin: 0 3px;
        padding-left: 12px;
        height: 32px;
        line-height: 32px;
        display: inline-block;
      }
      i {
        margin-left: 4px;
        margin-right: 12px;
      }
    `}</style>
  </ul>
);

StockList.propTypes = {
  removeStock: PropTypes.func.isRequired,
  stocks: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StockList;
