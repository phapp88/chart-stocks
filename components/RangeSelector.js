import PropTypes from 'prop-types';
import React from 'react';

const RangeSelector = ({ chartRange, setChartRange }) => (
  <div>
    <button
      className={chartRange === '1 Mo' ? 'active' : ''}
      onClick={setChartRange}
    >
    1 Mo
    </button>
    <button
      className={chartRange === '3 Mo' ? 'active' : ''}
      onClick={setChartRange}
    >
    3 Mo
    </button>
    <button
      className={chartRange === '6 Mo' ? 'active' : ''}
      onClick={setChartRange}
    >
    6 Mo
    </button>
    <button
      className={chartRange === 'YTD' ? 'active' : ''}
      onClick={setChartRange}
    >
    YTD
    </button>
    <button
      className={chartRange === '1 Yr' ? 'active' : ''}
      onClick={setChartRange}
    >
    1 Yr
    </button>
    <style jsx>{`
      div {
        margin: 0 0 8px 36px;
      }
      button {
        background-color: #9e9e9e;
        border: none;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.12);
        cursor: pointer;
        font-family: Roboto, "Noto Sans", sans-serif;
        letter-spacing: 0.56px;
        margin: 4px;
        padding: 3px 8px;
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      }
      button:hover {
        opacity: 0.9;
      }
      .active, button:focus {
        background-color: black;
        border: none;
        color: white;
        outline: 0;
      }
      @media (max-width: 340px) {
        button:nth-child(3) {
          margin-right: 21%;
        }
      }
      @media (max-width: 300px) {
        button:nth-child(3) {
          margin-right: 15%;
        }
      }
    `}
    </style>
  </div>
);

RangeSelector.propTypes = {
  chartRange: PropTypes.string.isRequired,
  setChartRange: PropTypes.func.isRequired,
};

export default RangeSelector;
