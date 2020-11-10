import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';
import PropTypes from 'prop-types';
// components
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

const Logs = ({ log: { logs, loading }, getLogs, editModal, setEditModal }) => {
  useEffect(() => {
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

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // name of prop: state."name in root reducer"
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
