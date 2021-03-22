import React from 'react';
import Modal from '../Modal';


const RegisterModal = ({showModal,closeModal}) => {

    return (
        <Modal showModal={showModal} closeModal={closeModal}>
            Modal
            <button onClick={closeModal}>close</button>
        </Modal>
    )
}

export default RegisterModal;