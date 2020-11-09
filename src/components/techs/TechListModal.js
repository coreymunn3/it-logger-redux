import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TechItem from './TechItem';

const TechListModal = ({ techListModal, setTechListModal }) => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  const getTechs = async () => {
    setLoading(true);
    // request to backend
    const res = await axios.get('/techs');
    setTechs(res.data);
    setLoading(false);
  };

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
              techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
          </article>
        </section>
      </div>
      <button
        className='modal-close is-large'
        onClick={() => setTechListModal(!techListModal)}
      ></button>
    </div>
  );
};

export default TechListModal;
