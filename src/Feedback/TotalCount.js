import React from 'react';
import PropTypes from 'prop-types';

function TotalCount({ title, good, neutral, bad, total, procentage }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive rate procentage {procentage}%</p>
    </div>
  );
}

TotalCount.propTypes = {
  title: PropTypes.string,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  procentage: PropTypes.number,
};

export default TotalCount;
