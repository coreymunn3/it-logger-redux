import React, { useState } from 'react';

const AddBtn = ({
  addModal,
  setAddModal,
  addTechModal,
  setAddTechModal,
  techListModal,
  setTechListModal,
}) => {
  const [hidden, setHidden] = useState(true);
  const handleHover = () => setHidden(!hidden);

  return (
    <div className='control-panel'>
      <div
        className='field is-grouped is-flex-direction-column-reverse is-align-items-center'
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <p className='control mt-1 mx-0'>
          <button
            className='button is-large is-rounded is-success'
            onClick={() => setAddModal(!addModal)}
          >
            <span className='icon is-large'>
              <i className='fas fa-plus'></i>
            </span>
          </button>
        </p>
        <p className={`control my-1 mx-0 ${hidden ? 'is-hidden' : ''}`}>
          <button
            className='button is-success is-rounded'
            onClick={() => setAddTechModal(!addTechModal)}
          >
            <span className='icon'>
              <i className='fas fa-user-plus'></i>
            </span>
          </button>
        </p>
        <p className={`control my-1 mx-0 ${hidden ? 'is-hidden' : ''}`}>
          <button
            className='button is-link is-rounded'
            onClick={() => setTechListModal(!techListModal)}
          >
            <span className='icon'>
              <i className='fas fa-user-friends'></i>
            </span>
          </button>
        </p>
      </div>
    </div>
  );
};

//

export default AddBtn;
