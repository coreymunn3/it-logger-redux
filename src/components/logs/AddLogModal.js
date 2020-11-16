import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLog } from '../../actions/logActions';
import { setAlert } from '../../actions/alertActions';
import TechSelectOptions from '../techs/TechSelectOptions';

const AddLogModal = ({ addModal, setAddModal, addLog, setAlert }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      // alert user
      setAlert({
        type: 'danger',
        message: 'Please Enter a Message and Select a Tech',
      });
    } else {
      // create log object and pass to redux
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };
      addLog(newLog);
      // close the modal
      setAddModal(!addModal);
      // clear fields
      setMessage('');
      setAttention(false);
      setTech('');
      // user feedback
      setAlert({
        type: 'success',
        message: 'Log Added',
      });
    }
  };

  return (
    <div className={`modal ${addModal ? 'is-active' : ''}`}>
      <div className='modal-background'></div>
      <div className='modal-card section'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>Add Log</p>
        </header>
        <section className='modal-card-body'>
          <div className='field'>
            <label className='label'>Message</label>
            <div className='control'>
              <input
                className='input'
                type='text'
                name='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></input>
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <div className='select'>
                <select
                  name='tech'
                  value={tech}
                  onChange={(e) => setTech(e.target.value)}
                >
                  <option value='' disabled>
                    Select Technician
                  </option>
                  <TechSelectOptions />
                </select>
              </div>
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <label className='checkbox'>
                <input
                  type='checkbox'
                  value={attention}
                  checked={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                {' Needs Attention'}
              </label>
            </div>
          </div>
        </section>

        <footer className='modal-card-foot'>
          <button className='button is-success' onClick={onSubmit}>
            Create Log
          </button>
          <button className='button' onClick={() => setAddModal(!addModal)}>
            Cancel
          </button>
        </footer>
      </div>
      <button
        className='modal-close is-large'
        onClick={() => setAddModal(!addModal)}
      ></button>
    </div>
  );
};

AddLogModal.propTypes = {
  addModal: PropTypes.bool.isRequired,
  setAddModal: PropTypes.func.isRequired,
  addLog: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { addLog, setAlert })(AddLogModal);
