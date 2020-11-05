import React, { useState } from 'react';

const AddLogModal = () => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, settech] = useState('');
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className='modal'>
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
                <select>
                  <option>Select Technician</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        <footer className='modal-card-foot'>
          <button className='button is-success'>Save changes</button>
          <button className='button'>Cancel</button>
        </footer>
      </div>
      <button className='modal-close is-large'></button>
    </div>
  );
};

export default AddLogModal;
