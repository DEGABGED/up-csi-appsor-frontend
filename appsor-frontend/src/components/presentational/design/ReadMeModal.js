import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react'

function ReadMeModal(props) {
	return (
		<Modal trigger={props.trigger}>
			{/*The regular expression below just CamelCases the committee name*/}
			<Modal.Header>Checkout the {props.name.toLowerCase().replace(/^\w/, c => c.toUpperCase())} committee</Modal.Header>
			<Modal.Content>
				<p>Explain the committee here</p>
			</Modal.Content>
		</Modal>
	)
}

ReadMeModal.propTypes = {
  name: PropTypes.string
};

ReadMeModal.defaultProps = {
  name: "UNKNOWN"
};

export default ReadMeModal;
