import fetch from 'isomorphic-fetch';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/Layout';

const Index = ({ stocks }) => (
  <div>
    <Head>
      <title>Chart Stocks</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <style>{`
        body {
          color: rgba(0, 0, 0, 0.87);
          font-family: Roboto, "Noto Sans", sans-serif;
        }
      `}
      </style>
    </Head>
    <Layout stocks={stocks} />
  </div>
);

Index.getInitialProps = async ({ req }) => {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const baseUrl = `${protocol}://${req.headers.host}`;
    const res = await fetch(`${baseUrl}/stocks`);
    const stocks = await res.json();
    return { stocks };
  } catch (err) {
    console.log(err);
    return { stocks: [] };
  }
};

Index.propTypes = {
  stocks: PropTypes.arrayOf(PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({
      date: PropTypes.string,
      close: PropTypes.number,
    })),
    name: PropTypes.string,
    symbol: PropTypes.string,
  })).isRequired,
};

export default Index;
