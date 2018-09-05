import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Header } from 'semantic-ui-react'
import "../../../assets/stylesheets/ReadMeModal.css";

function camelizeCase(string) {
		return string.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
}

function ReadMeModal(props) {
	return (
		<Modal trigger={props.trigger}
			dimmer={'blurring'}
			className="main-modal"
		>
			<Modal.Header className="modal-img" style={{backgroundImage: "url(" + props.img + ")"}}>
			</Modal.Header>
			<Modal.Content className="modal-content">
				<Header className="modal-header">CHECKOUT THE {props.name} COMMITTEE</Header>
				<Modal.Description>
					<p>{props.description}</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	)
}

ReadMeModal.propTypes = {
  name: PropTypes.string,
	description: PropTypes.string,
	img: PropTypes.string,
};

ReadMeModal.defaultProps = {
  name: "UNKNOWN",
	description: "No description found"
};

export default ReadMeModal;
