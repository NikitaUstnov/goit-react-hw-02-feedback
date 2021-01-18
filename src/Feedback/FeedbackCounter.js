import React from 'react';
import PropTypes from 'prop-types';

function FeedbackCounter({ title, addRate }) {
  console.log('функция вызывается при нажатии');
  // const { good, neutral, bad } = options;
  return (
    <div>
      <h1>{title}</h1>
      <button type="button" name="good" onClick={addRate}>
        Good
      </button>
      <button type="button" name="neutral" onClick={addRate}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={addRate}>
        Bad
      </button>
    </div>
  );
}

FeedbackCounter.propTypes = {
  addRate: PropTypes.func,
  title: PropTypes.string,
};

export default FeedbackCounter;
