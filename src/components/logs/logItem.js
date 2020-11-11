import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dayjs from 'react-dayjs';
import { connect } from 'react-redux';
import { deleteLog } from '../../actions/logActions';

const LogItem = ({
  log: { id, date, message, attention, tech },
  editModal,
  setEditModal,
  deleteLog,
}) => {
  const [active, setActive] = useState(false);
  let isActive = active ? 'is-active' : '';
  let needsAttention = attention ? 'has-text-danger' : '';

  const onDelete = () => {
    deleteLog(id);
  };

  return (
    <a
      href='/#'
      className={`panel-block ${needsAttention} ${isActive} is-justify-content-space-between`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className='panel-content' onClick={() => setEditModal(!editModal)}>
        <span className='panel-icon'>
          <i className={`fas fa-clipboard ${needsAttention}`}></i>
        </span>
        <Dayjs className='is-italic' format='MMM DD YYYY'>
          {date}
        </Dayjs>
        <span className='mx-2'>{`${message} (${tech})`}</span>
      </div>
      <div className='panel-content'>
        <span className='panel-icon' onClick={onDelete}>
          <i className='fas fa-trash'></i>
        </span>
      </div>
    </a>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog })(LogItem);
