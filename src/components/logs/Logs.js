import React, { useState, useEffect } from 'react';
import axios from 'axios';
// components
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Logs = ({ editModal, setEditModal }) => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getLogs = async () => {
      setLoading(true);
      // request to backend
      const res = await axios.get('/logs');
      setLogs(res.data);
      setLoading(false);
    };
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <Preloader></Preloader>;
  }
  return (
    <article className='panel is-primary'>
      <p className='panel-heading'>System Logs</p>
      {logs.map((log) => (
        <LogItem
          key={log.id}
          log={log}
          editModal={editModal}
          setEditModal={setEditModal}
        />
      ))}
    </article>
  );
};

export default Logs;
