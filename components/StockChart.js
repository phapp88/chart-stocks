import 'chartjs-plugin-annotation';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

import DataPoint from './DataPoint';
import Tooltip from './Tooltip';

const StockChart = ({ chartRange, stocks }) => {
  const [dataPoints, setDataPoints] = useState([{ x: -999, y: -999 }]); // initialize for 1 stock, tooltip offscreen
  const [date, setDate] = useState('');
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [tooltipOpacity, setTooltipOpacity] = useState(0);

  const startDate = moment();
  let timeUnit = 'day';
  switch (chartRange) {
    case '1 Mo':
      startDate.subtract(1, 'months');
      break;
    case '3 Mo':
      startDate.subtract(3, 'months');
      break;
    case '6 Mo':
      startDate.subtract(6, 'months');
      timeUnit = 'week';
      break;
    case 'YTD':
      startDate.dayOfYear(1);
      break;
    case '1 Yr':
      startDate.subtract(1, 'years');
      timeUnit = 'week';
      break;
    default:
      break;
  }
  startDate.subtract(1, 'days');

  const data = {
    datasets: stocks.map((stock) => {
      const { color, data: stockData, symbol } = stock;
      return {
        label: symbol,
        data: stockData.map((obj) => ({
          x: moment(obj.date, 'YYYY-MM-DD'),
          y: obj.close,
        })),
        fill: false,
        borderColor: color,
        backgroundColor: color,
        pointRadius: 0,
      };
    }),
  };

  const options = {
    annotation: {
      annotations: [
        {
          borderColor: tooltipOpacity === 0 ? 'rgba(0, 0, 0, 0)' : '#9e9e9e',
          borderWidth: 2,
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: moment(date, 'dddd, MMM D, YYYY'),
        },
      ],
    },
    onHover: (event) => {
      if (event.type === 'mousemove') {
        setMouseX(event.offsetX);
        setMouseY(event.offsetY);
      } else if (event.type === 'mouseout') {
        setTooltipOpacity(0);
      }
    },
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      xAxes: [
        {
          distribution: 'series',
          gridLines: { drawOnChartArea: false },
          ticks: { display: true, min: startDate, minRotation: 45 },
          time: {
            unit: timeUnit,
            displayFormats: {
              day: 'MMM D',
              week: 'MMM D',
            },
            tooltipFormat: 'dddd, MMM D, YYYY',
          },
          type: 'time',
        },
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Closing Price (USD)',
          },
          ticks: {
            beginAtZero: stocks.length === 0,
            suggestedMax: 50,
          },
        },
      ],
    },
    tooltips: {
      enabled: false,
      intersect: false,
      mode: 'index',
      custom: (tooltip) => {
        if (tooltip.opacity === 0) {
          setTooltipOpacity(0);
          return;
        }
        const mouseDate = tooltip.dataPoints[0].xLabel;
        const points = tooltip.dataPoints.map((point) => ({
          x: point.x,
          y: point.y,
        }));
        setDataPoints(points);
        setDate(mouseDate);
        setTooltipOpacity(1);
      },
    },
  };

  const mouseDateMoment = moment(date, 'dddd, MMM D, YYYY');
  const showDataPoints =
    tooltipOpacity === 1 && startDate.isBefore(mouseDateMoment);

  const DataPoints = showDataPoints
    ? stocks.map((stock, i) => (
        <DataPoint key={stock.symbol} color={stock.color} pos={dataPoints[i]} />
      ))
    : null;

  return (
    <div>
      <div className="chart-container">
        <Line data={data} options={options} />
      </div>
      <Tooltip
        date={date}
        dataPoints={dataPoints}
        mouseX={mouseX}
        mouseY={mouseY}
        opacity={tooltipOpacity}
        stocks={stocks}
      />
      {DataPoints}
      <style jsx>
        {`
          .chart-container {
            height: 400px;
            position: relative;
          }
          div {
            position: relative;
          }
        `}
      </style>
    </div>
  );
};

StockChart.propTypes = {
  chartRange: PropTypes.string.isRequired,
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

export default StockChart;
