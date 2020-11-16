import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techActions';
import { setAlert } from '../../actions/alertActions';

const TechItem = ({ tech, deleteTech, setAlert }) => {
  const [active, setActive] = useState(false);
  let isActive = active ? 'is-active' : '';

  const onDelete = () => {
    deleteTech(tech.id);
    setAlert({
      type: 'success',
      message: 'Tech Deleted',
    });
  };
  return (
    <a
      href='/#'
      className={`panel-block ${isActive}  is-justify-content-space-between`}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className='panel-content'>
        <span>
          {tech.firstName} {tech.lastName}
        </span>
      </div>
      <div className='panel-content'>
        <span className='panel-icon'>
          <i className='fas fa-trash' onClick={onDelete}></i>
        </span>
      </div>
    </a>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech, setAlert })(TechItem);
