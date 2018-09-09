import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Header } from 'semantic-ui-react'
import "../../../assets/stylesheets/ReadMeModal.css";

function ErrorModalMessage(props) {
  const {
    title,
    content,
  } = props;
  return (
    <div>
      <h3>{title.toUpperCase()}</h3>
      <ul>
        {content.map(data => <li key={data}>{data}</li>)}
      </ul>
    </div>
  );
}

function generateErrorMessage(message) {
  if (typeof message === 'string') {
    return message;
  }
  return Object.keys(message).map((key) => {
    return (
      <ErrorModalMessage
        key={key}
        title={key}
        content={message[key]}
      />
    );
  });
}

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
            ? 'Thank you for registering!'
            : 'Sorry, an error has occurred.'
          }
        </Header>
        <Modal.Description>
          {
            success
            ? `We appreciate your interest in joining our organization, ${message.nickname}!\n` +
              'Please wait for further instructions.\n' +
              'Thank you, and welcome to UP CSI!'
            : message && generateErrorMessage(message)
          }
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default SubmitModal;
