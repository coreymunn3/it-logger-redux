import React, { useState } from 'react';

const AddBtn = () => {
  const [hidden, setHidden] = useState(true);

  const handleHover = () => setHidden(!hidden);

  return (
    <div className='field is-grouped is-flex-direction-column-reverse'>
      <p
        className='control my-1 primary-button'
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <button className='button is-large is-rounded is-success'>
          <span className='icon is-large'>
            <i className='fas fa-plus'></i>
          </span>
        </button>
      </p>
      <p className={`control my-1 ${hidden ? 'is-hidden' : ''}`}>
        <button className='button is-large is-link is-rounded'>
          <span className='icon is-large'>
            <i className='fas fa-user-plus'></i>
          </span>
        </button>
      </p>
      <p className={`control my-1 ${hidden ? 'is-hidden' : ''}`}>
        <button className='button is-large is-link is-rounded'>
          <span className='icon is-large'>
            <i className='fas fa-user-friends'></i>
          </span>
        </button>
      </p>
    </div>
  );
};

export default AddBtn;
