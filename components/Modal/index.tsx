import React, { useState, useEffect } from 'react';
import Parser from 'html-react-parser';
import Modal from 'react-modal';
interface ModalLinkProps {
  openModal: boolean;
  title?: string;
  text?: string;
  onRequestClose: () => void;
}
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#modal-root');
const ModalLinks = ({ openModal, text, title,onRequestClose }: ModalLinkProps) => {


  return (
    <div>
      <Modal
        isOpen={openModal}
        onRequestClose={onRequestClose}
        style={customStyles}
      >
        <div className="animate-fade-in-down h-full mx-auto">
          <div className="flex justify-between item-center">
            <h2><strong>{title}</strong></h2>
            <button onClick={onRequestClose}><strong>X</strong></button>
          </div>

          <p className='mt-5 mb-5'>{Parser(text ?? '')}</p>
        </div>
      </Modal>
    </div>
  );
}

export default ModalLinks