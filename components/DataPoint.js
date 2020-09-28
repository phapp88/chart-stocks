import PropTypes from 'prop-types';
import React from 'react';

const DataPoint = ({ color, pos }) => {
  const pointRadius = 4;
  const left = pos.x - pointRadius;
  const top = pos.y - pointRadius;
  return (
    <div>
      <style jsx>
        {`
          div {
            background-color: ${color};
            border-radius: 50%;
            height: ${pointRadius * 2}px;
            left: ${left}px;
            position: absolute;
            width: ${pointRadius * 2}px;
            top: ${top}px;
            z-index: 1;
          }
        `}
      </style>
    </div>
  );
};

DataPoint.propTypes = {
  color: PropTypes.string.isRequired,
  pos: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
};

export default DataPoint;
