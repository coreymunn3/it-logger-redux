import React from 'react';
import PropTypes from 'prop-types';

const LogItem = ({ log: { date, message, attention, tech } }) => {
  return (
    <a
      href='#edit'
      className={`panel-block ${attention ? 'has-text-danger' : ''}`}
    >
      <span className='panel-icon'>
        <i class={`fas fa-clipboard ${attention ? 'has-text-danger' : ''}`} />
      </span>
      {`${date} - ${message} - ${tech}`}
    </a>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
