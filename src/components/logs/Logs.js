import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

// import styles from './Logs.module.scss';

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
    <Fragment>
      <h3 className='title has-text-primary collectionTitle'>System Logs</h3>
      <ul className='collection'></ul>
    </Fragment>
  );
};

export default Logs;
