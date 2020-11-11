import React from 'react';
// import classnames from 'classnames';
// components
import SearchBar from './components/layout/SearchBar';
import Dashboard from './components/layout/Dashboard';
import Alert from './components/layout/Alert';
// state
import { Provider } from 'react-redux';
import store from './store';
// import styles
import './App.scss';

const App = () => {
  return (
    <Provider store={store}>
      <SearchBar />
      <Alert />
      <Dashboard />
    </Provider>
  );
};

export default App;
