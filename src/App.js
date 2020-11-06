import React, { Fragment } from 'react';
// import classnames from 'classnames';
// components
import SearchBar from './components/layout/SearchBar';
import Dashboard from './components/layout/Dashboard';
// import styles
import './App.scss';

const App = () => {
  return (
    <Fragment>
      <SearchBar />
      <Dashboard />
    </Fragment>
  );
};

export default App;
