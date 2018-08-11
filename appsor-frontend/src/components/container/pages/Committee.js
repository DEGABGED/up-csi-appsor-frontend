import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommitteeForm from '../../presentational/forms/CommitteeForm';
import { committeeOptions } from '../../presentational/helper/defaultOptions';

class Committee extends Component {
  constructor(props) {
    super(props);
    this.renderForms = this.renderForms.bind(this);
  }

  // To avoid repeating code, this iterates through all the Froms
  renderForms() {
    const forms = [];
    for (let id = 0; id < 3; id++) {
      forms.push(<CommitteeForm
        key={id}
        formID={id}
        options={committeeOptions}
        committees={this.props.committees[id]}
        handleChangeCommittee={this.props.handleChangeCommittee}
        handleChangeReason={this.props.handleChangeReason}
        errors={this.props.errors !== undefined? this.props.errors[id] : undefined}
        duplicates={this.props.duplicates !== undefined? this.props.duplicates[id] : undefined}
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
  handleChangeCommittee: PropTypes.func.isRequired,
  handleChangeReason: PropTypes.func.isRequired,
  committees: PropTypes.array.isRequired,
};

export default Committee;
