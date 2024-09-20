import React, { useState } from 'react';
import Modal from './Modal';

function Project({ title, description, details }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="project">
      <h3 onClick={openModal}>{title}</h3>
      <p>{description}</p>
      <Modal show={showModal} onClose={closeModal} title={title} description={details} />
    </div>
  );
}

export default Project;
