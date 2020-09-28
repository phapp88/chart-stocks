import PropTypes from 'prop-types';
import React from 'react';

import TooltipLi from './TooltipLi';

const Tooltip = ({ dataPoints, date, mouseX, mouseY, opacity, stocks }) => {
  let left = '';
  let top = '';
  if (stocks.length === 1) {
    left = `${dataPoints[0].x - 70}px`;
    top = `${dataPoints[0].y + 10}px`;
  } else {
    left = `${mouseX - 140}px`;
    top = `${mouseY - 17.5 - 6 * stocks.length}px`;
  }
  const transition = opacity === 0 ? 'opacity 0.5s 0.5s' : '';
  return (
    <div>
      <p>{date}</p>
      <ul>
        {stocks.map((stock) => (
          <TooltipLi key={stock.symbol} date={date} stock={stock} />
        ))}
      </ul>
      <style jsx>
        {`
          div {
            background-color: rgba(0, 0, 0, 0.8);
            border: 2px solid #9e9e9e;
            color: white;
            left: ${left};
            letter-spacing: 0.56px;
            opacity: ${opacity};
            padding: 5px;
            pointer-events: none;
            position: absolute;
            top: ${top};
            transition: ${transition};
            z-index: 2;
          }
          p {
            font-size: 10px;
            text-align: center;
          }
          ul {
            padding-top: 2.5px;
          }
          p,
          ul {
            margin: 0;
          }
        `}
      </style>
    </div>
  );
};

Tooltip.propTypes = {
  dataPoints: PropTypes.arrayOf(
    PropTypes.shape({
      x: PropTypes.number,
      y: PropTypes.number,
    }),
  ).isRequired,
  date: PropTypes.string.isRequired,
  mouseX: PropTypes.number.isRequired,
  mouseY: PropTypes.number.isRequired,
  opacity: PropTypes.number.isRequired,
  stocks: PropTypes.arrayOf(
    PropTypes.shape({
      colors: PropTypes.arrayOf(PropTypes.string),
      data: PropTypes.arrayOf(
        PropTypes.shape({
          date: PropTypes.string,
          close: PropTypes.number,
        }),
      ),
      name: PropTypes.string,
      symbol: PropTypes.string,
    }),
  ).isRequired,
};

export default Tooltip;
