import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { removeAlert } from '../../actions/alertActions';

const Alert = ({ alert: { showAlert, type, message }, removeAlert }) => {
  return (
    <div className='alertFloating'>
      <CSSTransition
        in={showAlert}
        timeout={300}
        unmountOnExit
        classNames='notification'
      >
        <div
          className={`notification has-text-centered ${
            type === 'danger' ? 'is-danger' : 'is-success'
          }`}
        >
          <button className='delete' onClick={() => removeAlert()}></button>
          {message}
        </div>
      </CSSTransition>
    </div>
  );
};

Alert.propTypes = {
  alert: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  alert: state.alert,
});

export default connect(mapStateToProps, { removeAlert })(Alert);
