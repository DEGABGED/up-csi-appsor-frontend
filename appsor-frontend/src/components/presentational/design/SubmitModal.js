import React from 'react';
import PropTypes from 'prop-types';
import { Image, Modal, Header } from 'semantic-ui-react';
import '../../../assets/stylesheets/SubmitModal.css';

import successImg from '../../../assets/images/people/fin.png';

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

function ErrorModal(props) {
  const {
    display,
    message,
    onClose,
  } = props;
  return (
    <Modal
      closeIcon
      open={display}
      dimmer="blurring"
      className="error-modal"
      onClose={onClose}
      size="mini"
    >
      <Modal.Content className="modal-content">
        <Header className="modal-header">
          {'Sorry, an error has occurred.'}
        </Header>
        <Modal.Description>
          {message && generateErrorMessage(message)}
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

function SuccessModal(props) {
  const {
    display,
    message,
    onFinish,
  } = props;
  return (
    <Modal
      closeIcon
      open={display}
      dimmer="blurring"
      className="submit-modal"
      onClose={onFinish}
      size="tiny"
    >
      <Modal.Content image className="modal-content">
        <Image wrapped className="modal-img" size="medium" src={successImg || null} />
        <div className="modal-subcontent">
          <Header className="modal-header">
            {'Thanks for applying!'}
          </Header>
          <Modal.Description>
            {
              `We appreciate your interest in joining our organization, ${message.nickname}!\n` +
              'Please wait for further instructions.\n' +
              'Thank you, and welcome to UP CSI!'
            }
          </Modal.Description>
        </div>
      </Modal.Content>
    </Modal>
  );
}

function SubmitModal(props) {
  const {
    success,
  } = props;
  return success ? <SuccessModal {...props} /> : <ErrorModal {...props} />;
}

export default SubmitModal;
