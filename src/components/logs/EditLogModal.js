import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateLog, clearCurrent } from '../../actions/logActions';
import { setAlert } from '../../actions/alertActions';
import TechSelectOptions from '../techs/TechSelectOptions';

const EditLogModal = ({
  editModal,
  setEditModal,
  updateLog,
  current,
  clearCurrent,
  setAlert,
}) => {
  // local state for form data
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  // populate form with current log on component load
  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  // submit the form
  const onSubmit = () => {
    if (message === '' || tech === '') {
      // replace with alert or popup
      // console.log('Please enter a message and select a tech');
      setAlert({
        type: 'danger',
        message: 'Please Enter a Message and Select a Tech',
      });
    } else {
      // update the log
      const newLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      updateLog(newLog);
      // clear current
      clearCurrent();
      // close modal
      setEditModal(!editModal);
      // clear fields
      setMessage('');
      setAttention(false);
      setTech('');
      // user feedback
      setAlert({
        type: 'success',
        message: 'Log Updated',
      });
    }
  };

  const onExit = () => {
    // clear current state
    clearCurrent();
    // close modal
    setEditModal(!editModal);
  };

  return (
    <div className={`modal ${editModal ? 'is-active' : ''}`}>
      <div className='modal-background'></div>
      <div className='modal-card section'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>Edit Log</p>
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
                placeholder='Enter Message'
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
            Save Log
          </button>
          <button className='button' onClick={onExit}>
            Cancel
          </button>
        </footer>
      </div>
      <button className='modal-close is-large' onClick={onExit}></button>
    </div>
  );
};

EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { updateLog, clearCurrent, setAlert })(
  EditLogModal
);
