import React, { Fragment } from 'react';
// import classnames from 'classnames';
// components
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
// import styles
import './App.scss';

const App = () => {
  return (
    <Fragment>
      <SearchBar />
      <div className='section'>
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
