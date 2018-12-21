import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Header } from 'semantic-ui-react';
import '../../../assets/stylesheets/ReadMeModal.css';

class ReadMeModal extends Component {
  camelizeCase(string) {
    return string.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  }

  render() {
    return (
      <Modal
        trigger={this.props.trigger}
        dimmer="blurring"
        className="main-modal"
        closeIcon
        onOpen={this.props.pauseCarousel}
        onClose={this.props.playCarousel}
      >
        <Modal.Header className="modal-img" style={{ backgroundImage: `url(${this.props.img})` }} />
        <Modal.Content className="modal-content">
          <Header className="modal-header">{this.props.name} COMMITTEE</Header>
          <Modal.Description>
            <p>{this.props.description}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

ReadMeModal.propTypes = {
  trigger: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  pauseCarousel: PropTypes.func,
  playCarousel: PropTypes.func,
};

ReadMeModal.defaultProps = {
  pauseCarousel: undefined,
  playCarousel: undefined,
};

export default ReadMeModal;
