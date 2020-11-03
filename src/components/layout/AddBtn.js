import React from 'react';

const AddBtn = () => {
  return (
    <div className='field is-grouped'>
      <p className='control'>
        <button className='button is-large is-rounded is-success'>
          <span className='icon is-large'>
            <i className='fas fa-plus'></i>
          </span>
        </button>
      </p>
      <p className='control'>
        <button className='button is-large is-link is-rounded'>
          <span className='icon is-large'>
            <i className='fas fa-user-plus'></i>
          </span>
        </button>
      </p>
      <p className='control'>
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
