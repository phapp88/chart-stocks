import Chart from 'chart.js';
import PropTypes from 'prop-types';
import React from 'react';

const randomHexColor = () => {
  const chars = '0123456789abcdef'.split('');
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }
  return hex;
};

class StockChart extends React.Component {
  componentDidMount() {
    this.drawChart();
  }

  componentDidUpdate(prevProps) {
    if (this.props.stocks.length !== prevProps.stocks.length) {
      this.drawChart();
    }
  }

  drawChart() {
    const dates = Object.keys(this.props.stocks[0].data).reverse();
    const data = { labels: dates, datasets: [] };
    const options = {
      legend: { display: false },
      title: { display: true, fontSize: 18, text: 'STOCKS' },
      tooltips: { intersect: false, mode: 'index', position: 'nearest' },
    };

    const pointStyles = ['circle', 'crossRot', 'rect', 'rectRounded', 'rectRot', 'triangle'];
    this.props.stocks.forEach((stock) => {
      const closingData = [];
      const color = randomHexColor();
      dates.forEach((date) => {
        closingData.push(stock.data[date]['4. close']);
      });
      data.datasets.push({
        label: stock.symbol,
        data: closingData,
        fill: false,
        borderColor: color,
        backgroundColor: color,
        pointStyle: pointStyles[Math.floor(Math.random() * pointStyles.length)],
      });
    });
    const ctx = this.canvas.getContext('2d');
    // eslint-disable-next-line no-unused-vars
    const chart = new Chart(ctx, { type: 'line', data, options });
  }

  render() {
    return <canvas ref={(canvas) => { this.canvas = canvas; }} />;
  }
}

StockChart.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    symbol: PropTypes.string,
    data: PropTypes.object,
  })).isRequired,
};

export default StockChart;
