import React from 'react';

const Preloader = () => {
  return (
    <div className='my-1'>
      <progress className='progress is-primary is-small' max='100'>
        15%
      </progress>
    </div>
  );
};

export default Preloader;
