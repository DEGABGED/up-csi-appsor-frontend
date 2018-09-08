import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Header } from 'semantic-ui-react';
import '../../../assets/stylesheets/ReadMeModal.css';

class ReadMeModal extends Component {

  camelizeCase(string) {
    return string.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
  }

  render() {
    const props = this.props;
    return (
      <Modal
        trigger={props.trigger}
        dimmer="blurring"
				className="main-modal"
				closeIcon
        onOpen={props.pauseCarousel}
        onClose={props.playCarousel}
			>
        <Modal.Header className="modal-img" style={{ backgroundImage: `url(${props.img})` }} />
        <Modal.Content className="modal-content">
          <Header className="modal-header">CHECKOUT THE {props.name} COMMITTEE</Header>
          <Modal.Description>
            <p>{props.description}</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }

}

ReadMeModal.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  pauseCarousel: PropTypes.func,
  playCarousel: PropTypes.func,
};

ReadMeModal.defaultProps = {
  name: 'UNKNOWN',
  description: 'No description found',
};

export default ReadMeModal;
