import React, { useState } from 'react';

// components
import Logs from '../logs/Logs';
import AddLogModal from '../logs/AddLogModal';
import EditLogModal from '../logs/EditLogModal';
import AddTechModal from '../techs/AddTechModal';
import TechListModal from '../techs/TechListModal';
import AddBtn from './AddBtn';

const Dashboard = () => {
  // local state for modals toggles their view
  // passing down setMethods to modals AND components to open/close them
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [addTechModal, setAddTechModal] = useState(false);
  const [techListModal, setTechListModal] = useState(false);

  return (
    <div className='section'>
      <Logs editModal={editModal} setEditModal={setEditModal} />
      <AddLogModal setAddModal={setAddModal} addModal={addModal} />
      <EditLogModal editModal={editModal} setEditModal={setEditModal} />
      <AddTechModal
        addTechModal={addTechModal}
        setAddTechModal={setAddTechModal}
      />
      <TechListModal
        techListModal={techListModal}
        setTechListModal={setTechListModal}
      />
      <AddBtn
        addModal={addModal}
        setAddModal={setAddModal}
        addTechModal={addTechModal}
        setAddTechModal={setAddTechModal}
        techListModal={techListModal}
        setTechListModal={setTechListModal}
      />
    </div>
  );
};

export default Dashboard;
