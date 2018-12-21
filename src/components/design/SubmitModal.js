import React from 'react';
import PropTypes from 'prop-types';
import { Image, Modal, Header } from 'semantic-ui-react';
import '../../assets/stylesheets/SubmitModal.css';

import successImg from '../../assets/images/fin.jpg';
import errorImg from '../../assets/images/people/error.png';

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
  // eslint-disable-next-line arrow-body-style
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
    setSubmitting,
  } = props;
  return (
    <Modal
      closeIcon
      open={display}
      dimmer="blurring"
      className="error-modal"
      onClose={() => {
        setSubmitting(false);
        onClose();
      }}
      size="tiny"
    >
      <Modal.Content className="modal-content">
        <Image wrapped className="modal-img" size="small" src={errorImg || null} />
        <div className="modal-subcontent">
          <Header className="modal-header">
            {'Sorry, an error has occurred.'}
          </Header>
          <Modal.Description>
            {message && generateErrorMessage(message)}
          </Modal.Description>
        </div>
      </Modal.Content>
    </Modal>
  );
}

function SuccessModal(props) {
  const {
    display,
    message,
    onFinish,
    setSubmitting,
  } = props;
  return (
    <Modal
      closeIcon
      open={display}
      dimmer="blurring"
      className="submit-modal"
      onClose={() => {
        setSubmitting(false);
        onFinish();
      }}
      size="small"
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

ErrorModalMessage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

ErrorModal.propTypes = {
  display: PropTypes.bool,
  message: PropTypes.string,
  onClose: PropTypes.func,
  setSubmitting: PropTypes.func.isRequired,
};

SuccessModal.propTypes = {
  display: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onFinish: PropTypes.func.isRequired,
  setSubmitting: PropTypes.func.isRequired,
};

ErrorModal.defaultProps = {
  display: undefined,
  message: undefined,
  onClose: undefined,
};

SubmitModal.propTypes = {
  success: PropTypes.bool,
};

SubmitModal.defaultProps = {
  success: undefined,
};


export default SubmitModal;
