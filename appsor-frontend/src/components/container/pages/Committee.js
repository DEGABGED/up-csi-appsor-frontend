import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommitteeForm from '../../presentational/forms/CommitteeForm';
import { committeeOptions } from '../../presentational/helper/defaultOptions';

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
    // Enable all options first to fix bug of all disabled option
    for (let id = 0; id < 6; id++) {
      committeeOptions[id].disabled = false;
    }
    for (let id = 0; id < 3; id++) {
      if (this.props.committees[id].committee_id) {
        committeeOptions[this.props.committees[id].committee_id - 1].disabled = true;
      }
    }
    return committeeOptions;
  }

  // To avoid repeating code, this iterates through all the Froms
  renderForms() {
    const forms = [];
    for (let id = 0; id < 3; id++) {
      forms.push(<CommitteeForm
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
      </div>
    );
  }
}

Committee.propTypes = {
  handleDynamicForm: PropTypes.func.isRequired,
  handleDynamicDropdown: PropTypes.func.isRequired,
  committees: PropTypes.array.isRequired,
};

export default Committee;
