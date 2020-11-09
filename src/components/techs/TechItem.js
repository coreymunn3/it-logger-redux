import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TechItem = ({ tech }) => {
  const [active, setActive] = useState(false);
  let isActive = active ? 'is-active' : '';

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
          <i
            className='fas fa-trash'
            onClick={() => console.log('throw away')}
          ></i>
        </span>
      </div>
    </a>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
