import React, { useState } from 'react';

// components
import Logs from '../logs/Logs';
import AddLogModal from '../logs/AddLogModal';
import AddBtn from './AddBtn';

const Dashboard = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className='section'>
      <Logs />
      <AddLogModal setModal={setModal} modal={modal} />
      <AddBtn modal={modal} setModal={setModal} />
    </div>
  );
};

export default Dashboard;
