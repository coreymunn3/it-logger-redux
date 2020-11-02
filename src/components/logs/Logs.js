import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  const getLogs = async () => {
    setLoading(true);
    // request to backend
    const res = await axios.get('/logs');
    setLogs(res.data);
    setLoading(false);
  };
  if (loading) {
    return <h4>Loading...</h4>;
  }
  return <div>Logs</div>;
};

export default Logs;
