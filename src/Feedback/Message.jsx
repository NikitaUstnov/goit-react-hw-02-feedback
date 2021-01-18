import React from 'react';
import PropTypes from 'prop-types';

function Message({ message }) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string,
};

export default Message;
