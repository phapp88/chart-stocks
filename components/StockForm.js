import PropTypes from 'prop-types';
import React from 'react';

const StockForm = (props) => {
  const { addStock, handleChange, textField } = props;
  return (
    <form onSubmit={addStock}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Stock Symbol"
        value={textField}
      />
      <button>Add</button>
      <style jsx>{`
        input {
          border: none;
          box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.12);
          height: 46px;
          font-size: 17px;
          padding-left: 16px;
        }

        input::placeholder {
          color: rgba(0, 0, 0, 0.37);
        }

        button {
          background-color: #3f51b5;
          border: none;
          box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 1px 5px rgba(0, 0, 0, 0.12);
          color: white;
          cursor: default;
          font-size: 16px;
          height: 46px;
          letter-spacing: 0.56px;
          padding: 0 16px;
          text-transform: uppercase;
          transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        }

        button:hover {
          background-color: rgba(63, 81, 181, 0.9);
        }
      `}</style>
    </form>
  );
};

StockForm.propTypes = {
  addStock: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  textField: PropTypes.string.isRequired,
};

export default StockForm;
