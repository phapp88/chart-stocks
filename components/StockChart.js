import PropTypes from 'prop-types';
import React from 'react';
import { Line } from 'react-chartjs-2';

const pointStyles = ['rect', 'circle', 'triangle', 'rectRounded', 'crossRot', 'rectRot'];

const randomHexColor = () => {
  const chars = '0123456789abcdef'.split('');
  let hex = '#';
  for (let i = 0; i < 6; i++) {
    hex += chars[Math.floor(Math.random() * 16)];
  }
  return hex;
};

class StockChart extends React.Component {
  constructor(props) {
    super(props);
    const dates = Object.keys(this.props.stocks[0].data).reverse();
    const data = { labels: dates, datasets: [] };
    const options = {
      legend: { display: false },
      title: { display: true, fontSize: 18, text: 'STOCKS' },
      tooltips: { intersect: false, mode: 'index', position: 'nearest' },
    };
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
    this.state = { data, options };
  }

  componentDidUpdate(prevProps) {
    if (this.props.stocks.length > prevProps.stocks.length) {
      const stockToAdd = this.props.stocks[this.props.stocks.length - 1];
      this.addStockData(stockToAdd);
    }
    if (this.props.stocks.length < prevProps.stocks.length) {
      const stockToRemove = prevProps.stocks.find(stock => !this.props.stocks.includes(stock));
      this.removeStockData(stockToRemove);
    }
  }

  addStockData(stock) {
    const dates = Object.keys(stock.data).reverse();
    const closingData = [];
    const color = randomHexColor();
    dates.forEach((date) => {
      closingData.push(stock.data[date]['4. close']);
    });

    this.setState((prevState) => {
      const { datasets, labels } = prevState.data;
      return {
        data: {
          labels,
          datasets: datasets.concat({
            label: stock.symbol,
            data: closingData,
            fill: false,
            borderColor: color,
            backgroundColor: color,
            pointStyle: pointStyles[Math.floor(Math.random() * pointStyles.length)],
          }),
        },
      };
    });
  }

  removeStockData(stock) {
    this.setState((prevState) => {
      const { datasets, labels } = prevState.data;
      return {
        data: {
          labels,
          datasets: datasets.filter(dataset => dataset.label !== stock.symbol),
        },
      };
    });
  }

  render() {
    const { data, options } = this.state;
    return <Line data={data} options={options} />;
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
