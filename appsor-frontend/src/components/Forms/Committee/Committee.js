import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './presentational/Form';
import defaultOptions from './presentational/defaultOptions';

class Committee extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.updateOptions = this.updateOptions.bind(this);
    this.renderForms = this.renderForms.bind(this);
    this.handleCommittee = this.props.handleDynamicDropdown.bind(this, 'committees', 'committee_id');
    this.handleReason = this.props.handleDynamicForm.bind(this, 'committees', 'reason');
  }

  // The logic to disable duplicate choices for the Dropdown
  updateOptions() {
    for (let id = 0; id < 3; id++) {
      if (this.props.committees[id].committee_id) {
        defaultOptions[this.props.committees[id].committee_id - 1].disabled = true;
      }
    }
    return defaultOptions;
  }

  // To avoid repeating code, this iterates through all the Froms
  renderForms() {
    const forms = [];
    for (let id = 0; id < 3; id++) {
      forms.push(<Form
        key={id}
        formID={id}
        options={this.updateOptions()}
        committees={this.props.committees[id]}
        handleCommittee={this.handleCommittee}
        handleReason={this.handleReason}
      />);
    }
    return forms;
  }

  render() {
    return (
      <div>
        { this.renderForms() }
        <button onClick={this.props.handlePressPrev}>Prev Page!</button>
        <button onClick={this.props.handlePressNext}>Next Page!</button>
      </div>
    );
  }
}

Committee.propTypes = {
  handlePressPrev: PropTypes.func.isRequired,
  handlePressNext: PropTypes.func.isRequired,
  handleDynamicForm: PropTypes.func.isRequired,
  handleDynamicDropdown: PropTypes.func.isRequired,
  committees: PropTypes.array.isRequired,
};

export default Committee;
