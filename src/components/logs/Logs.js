import React, { useState, useEffect } from 'react';
import axios from 'axios';
// components
import LogItem from './LogItem';

const Logs = () => {
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
    return <h4>Loading...</h4>;
  }
  return (
    <article className='panel is-primary'>
      <p className='panel-heading'>System Logs</p>
      <p className='panel-tabs'>
        <a className='is-active' href='/#'>
          All
        </a>
        <a href='/#'>High Priority</a>
      </p>
      {logs.map((log) => (
        <LogItem key={log.id} log={log} />
      ))}
    </article>
  );
};

export default Logs;
