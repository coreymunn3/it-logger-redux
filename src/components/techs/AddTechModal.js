import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTech } from '../../actions/techActions';
import { setAlert } from '../../actions/alertActions';

const AddTechModal = ({ addTechModal, setAddTechModal, addTech, setAlert }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      setAlert({
        type: 'danger',
        message: 'Please Enter a First and Last name',
      });
    } else {
      // add the tech
      addTech({ firstName, lastName });
      // close modal
      setAddTechModal(!addTechModal);
      // clear fields
      setFirstName('');
      setLastName('');
      // user feedback
      setAlert({
        type: 'success',
        message: 'Tech Successfully Added',
      });
    }
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

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
  addTechModal: PropTypes.bool.isRequired,
  setAddTechModal: PropTypes.func.isRequired,
};
export default connect(null, { addTech, setAlert })(AddTechModal);
