import React from 'react';
import PropTypes from 'prop-types';
import Dayjs from 'react-dayjs';

const LogItem = ({ log: { id, date, message, attention, tech } }) => {
  let textColor = attention ? 'has-text-danger' : '';

  return (
    <a href='#edit' className={`panel-block ${textColor}`}>
      <span className='panel-icon'>
        <i className={`fas fa-clipboard ${textColor}`}></i>
      </span>
      <Dayjs className='is-italic' format='MMM DD YYYY'>
        {date}
      </Dayjs>
      <span className='mx-2'>{`${message} (${tech})`}</span>
      <span className='panel-icon'>
        <i className='fas fa-trash'></i>
      </span>
    </a>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
