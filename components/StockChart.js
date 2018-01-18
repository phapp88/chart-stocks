import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Line } from 'react-chartjs-2';

class StockChart extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (this.props.chartRange !== nextProps.chartRange) {
      return true;
    }
    if (this.props.stocks.length !== nextProps.stocks.length) {
      return true;
    }
    return false;
  }

  render() {
    const { chartRange, stocks } = this.props;
    const startDate = moment();
    switch (chartRange) {
      case '1M':
        startDate.subtract(1, 'months');
        break;
      case '3M':
        startDate.subtract(3, 'months');
        break;
      case '6M':
        startDate.subtract(6, 'months');
        break;
      case 'YTD':
        startDate.dayOfYear(1);
        break;
      case '1Y':
        startDate.subtract(1, 'years');
        break;
      default:
        break;
    }

    const data = {
      datasets: stocks.map((stock) => {
        const { color, data, symbol } = stock;
        return {
          label: symbol,
          data: data.map(obj => ({ x: moment(obj.date), y: obj.close })),
          fill: false,
          borderColor: color,
          backgroundColor: color,
          pointRadius: 0,
        };
      }),
    };

    const options = {
      legend: { display: false },
      scales: {
        xAxes: [{
          distribution: 'series',
          gridLines: { display: false },
          ticks: { display: true, minRotation: 45 },
          time: {
            min: startDate,
            unit: 'day',
            displayFormats: {
              day: 'MMM D',
            },
            tooltipFormat: 'dddd, MMM D, YYYY',
          },
          type: 'time',
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Closing Price (USD)',
          },
          ticks: {
            beginAtZero: stocks.length === 0,
            suggestedMax: 50,
          },
        }],
      },
      tooltips: { intersect: false, mode: 'index', position: 'nearest' },
    };

    return <Line data={data} options={options} />;
  }
}

StockChart.propTypes = {
  chartRange: PropTypes.string.isRequired,
  stocks: PropTypes.arrayOf(PropTypes.shape({
    colors: PropTypes.arrayOf(PropTypes.string),
    data: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string,
      close: PropTypes.number,
    })),
    name: PropTypes.string,
    symbol: PropTypes.string,
  })).isRequired,
};

export default StockChart;
