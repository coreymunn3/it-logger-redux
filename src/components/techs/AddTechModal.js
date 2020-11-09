import React, { useState } from 'react';

const AddTechModal = ({ addTechModal, setAddTechModal }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      console.log('Please enter the first and last name');
    }
    console.log(firstName, lastName);
    // close modal
    // clear fields
    setFirstName('');
    setLastName('');
  };

  return (
    <div className={`modal ${addTechModal ? 'is-active' : ''}`}>
      <div className='modal-background'></div>
      <div className='modal-card section'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>Add Technician</p>
        </header>
        <section className='modal-card-body'>
          <div className='field'>
            <label className='label'>First Name</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                name='firstName'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </div>
          </div>
          <div className='field'>
            <label className='label'>Last Name</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                name='lastName'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
          </div>
        </section>

        <footer className='modal-card-foot'>
          <button className='button is-success' onClick={onSubmit}>
            Create Technician
          </button>
          <button
            className='button'
            onClick={() => setAddTechModal(!addTechModal)}
          >
            Cancel
          </button>
        </footer>
      </div>
      <button
        className='modal-close is-large'
        onClick={() => setAddTechModal(!addTechModal)}
      ></button>
    </div>
  );
};

export default AddTechModal;
