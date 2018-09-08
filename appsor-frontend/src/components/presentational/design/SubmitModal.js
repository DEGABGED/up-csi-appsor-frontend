import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Header } from 'semantic-ui-react'
import "../../../assets/stylesheets/ReadMeModal.css";

function SubmitModal(props) {
  return (
    <Modal
      closeIcon
      open={props.isOpen}
      dimmer="blurring"
      className="submit-modal"
      onClose={props.onClose}
    >
      <Modal.Content className="modal-content">
        <Header className="modal-header">CONGRATULATIONS!</Header>
        <Modal.Description>
          afsdfasdfasdfadsfasdfsdaf
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default SubmitModal;