import React, { useState } from 'react';

const AddLogModal = ({ modal, setModal }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');
  // const [modalActive, setModalActive] = useState(false);

  const onSubmit = () => {
    console.log(message, tech, attention);
  };

  return (
    <div className={`modal ${modal ? 'is-active' : ''}`}>
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
                  <option value='John Doe'>John Doe</option>
                  <option value='Amy Smth'>Amy Smith</option>
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
                  onChange={(e) => setAttention(!e.target.value)}
                />
                {' ' + 'Needs Attention'}
              </label>
            </div>
          </div>
        </section>

        <footer className='modal-card-foot'>
          <button className='button is-success' onClick={onSubmit}>
            Save Log
          </button>
          <button className='button' onClick={() => setModal(!modal)}>
            Cancel
          </button>
        </footer>
      </div>
      <button
        className='modal-close is-large'
        onClick={() => setModal(!modal)}
      ></button>
    </div>
  );
};

export default AddLogModal;
