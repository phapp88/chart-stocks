import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';

const TooltipLi = ({ date, stock }) => {
  const dateMoment = moment(date, 'dddd, MMM D, YYYY').format('YYYY-MM-DD');
  const dataIndex =
    dateMoment === 'Invalid date'
      ? 0
      : stock.data.findIndex((obj) => obj.date === dateMoment);
  return (
    <li>
      <span>
        {stock.symbol} : {stock.data[dataIndex].close.toFixed(2)}
      </span>
      <style jsx>
        {`
          li {
            color: ${stock.color};
            font-size: 22px;
            line-height: 12px;
            position: relative;
            right: 12px;
          }
          li span {
            color: white;
            font-size: 12px;
            bottom: 3px;
            position: relative;
            right: 6px;
          }
        `}
      </style>
    </li>
  );
};

TooltipLi.propTypes = {
  date: PropTypes.string.isRequired,
  stock: PropTypes.shape({
    color: PropTypes.string,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.string,
        close: PropTypes.number,
      }),
    ),
    name: PropTypes.string,
    symbol: PropTypes.string,
  }).isRequired,
};

export default TooltipLi;
