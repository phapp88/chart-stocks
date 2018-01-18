import PropTypes from 'prop-types';
import React from 'react';

const StockForm = ({ addStock, errorMsg, handleChange, textField }) => (
  <form onSubmit={addStock}>
    <input
      onChange={handleChange}
      type="text"
      placeholder="Stock Symbol"
      value={textField}
    />
    <button>Add</button>
    <p>{errorMsg}</p>
    <style jsx>{`
      form {
        height: 75px;
        padding-left: 44px;
        margin-top: -10px;
      }
      input {
        border: none;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.12);
        height: 46px;
        font-family: Roboto, "Noto Sans", sans-serif;
        font-size: 17px;
        padding-left: 16px;
      }

      input::placeholder {
        color: rgba(0, 0, 0, 0.37);
      }

      button {
        background-color: #9e9e9e;
        border: none;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.12);
        cursor: pointer;
        font-size: 16px;
        height: 46px;
        letter-spacing: 0.56px;
        padding: 0 16px;
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      }

      button:hover {
        opacity: 0.9;
      }
      p {
        color: #ff5252;
        margin-top: 8px;
        text-align: center;
        width: 200px;
      }
    `}</style>
  </form>
);

StockForm.propTypes = {
  addStock: PropTypes.func.isRequired,
  errorMsg: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  textField: PropTypes.string.isRequired,
};

export default StockForm;
