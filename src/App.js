import React from 'react';
// import classnames from 'classnames';
// components
import SearchBar from './components/layout/SearchBar';
import Dashboard from './components/layout/Dashboard';
// state
import { Provider } from 'react-redux';
import store from './store';
// import styles
import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <SearchBar />
      <Dashboard />
    </Provider>
  );
};

export default App;
