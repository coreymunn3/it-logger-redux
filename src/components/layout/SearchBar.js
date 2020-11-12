import React, { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { searchLogs } from '../../actions/logActions';

const SearchBar = ({ searchLogs }) => {
  const text = useRef('');

  const onChange = () => {
    searchLogs(text.current.value);
  };
  return (
    <nav className='navbar is-primary'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='/#'>
          <i className='fab fa-atlassian'></i>
          IT-LOGGER
        </a>
      </div>
      <div className='navbar-start'>
        <a className='navbar-item' href='/#'>
          Home
        </a>
        <a className='navbar-item' href='/#'>
          About
        </a>
        <div className='field navbar-item'>
          <div className='control is-expanded has-icons-left has-icons-right'>
            <input
              className='input'
              type='text'
              placeholder='Search System Logs'
              ref={text}
              onChange={onChange}
            />
            <span className='icon is-small is-left'>
              <i className='fas fa-search'></i>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired,
};

export default connect(null, { searchLogs })(SearchBar);
