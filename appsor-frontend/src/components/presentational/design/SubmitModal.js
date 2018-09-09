import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Header } from 'semantic-ui-react'
import "../../../assets/stylesheets/ReadMeModal.css";

function SubmitModal(props) {
  const {
    display,
    success,
    message,
    onClose,
    onFinish,
  } = props;
  return (
    <Modal
      closeIcon
      open={display}
      dimmer="blurring"
      className="submit-modal"
      onClose={success ? onFinish : onClose}
    >
      <Modal.Content className="modal-content">
        <Header className="modal-header">
          {
            success
            ? 'Congratulations!'
            : 'Sorry, an error has occurred.'
          }
        </Header>
        <Modal.Description>
          { JSON.stringify(message) }
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default SubmitModal;