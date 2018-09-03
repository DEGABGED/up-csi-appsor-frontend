import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react'

function camelizeCase(string) {
		return string.toLowerCase().replace(/\b\w/g, c => c.toUpperCase())
}

function ReadMeModal(props) {
	return (
		<Modal trigger={props.trigger}
			dimmer={'blurring'}
			size={'fullscreen'}
		>
			<Modal.Header>Checkout the {camelizeCase(props.name)} committee</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<p>{props.description}</p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	)
}

ReadMeModal.propTypes = {
  name: PropTypes.string,
	description: PropTypes.string
};

ReadMeModal.defaultProps = {
  name: "UNKNOWN",
	description: "No description found"
};

export default ReadMeModal;
