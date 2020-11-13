import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';
import TechItem from './TechItem';

const TechListModal = ({
  techListModal,
  setTechListModal,
  getTechs,
  tech: { techs, loading },
}) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={`modal ${techListModal ? 'is-active' : ''}`}>
      <div className='modal-background'></div>
      <div className='modal-card section'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>Technicians</p>
        </header>
        <section className='modal-card-body'>
          <article className='panel is-danger'>
            {!loading &&
              techs !== null &&
              techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
          </article>
        </section>
        <section className='modal-card-foot'></section>
      </div>
      <button
        className='modal-close is-large'
        onClick={() => setTechListModal(!techListModal)}
      ></button>
    </div>
  );
};

TechListModal.propTypes = {
  techListModal: PropTypes.bool.isRequired,
  setTechListModal: PropTypes.func.isRequired,
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});
export default connect(mapStateToProps, { getTechs })(TechListModal);
