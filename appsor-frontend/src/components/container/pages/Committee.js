import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'semantic-ui-react';

import CommitteeForm from '../../presentational/forms/CommitteeForm';
import { committeeOptions } from '../../presentational/helper/defaultOptions';
import '../../../assets/stylesheets/Base.css';
import '../../../assets/stylesheets/Committee.css';

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
        errors={this.props.errors !== undefined ? this.props.errors[id] : undefined}
        duplicates={this.props.duplicates !== undefined ? this.props.duplicates[id] : undefined}
      />);
    }
    return forms;
  }

  render() {
    return (
      <Container textAlign="center" className="page-container committee-container">
        <h1 className="committee-title">Committee Preference</h1>
        { this.renderForms() }
        <Button primary type="submit">Submit</Button>
      </Container>
    );
  }
}

Committee.propTypes = {
  errors: PropTypes.array,
  duplicates: PropTypes.array,
  handleChangeCommittee: PropTypes.func.isRequired,
  handleChangeReason: PropTypes.func.isRequired,
  committees: PropTypes.array.isRequired,
};

Committee.defaultProps = {
  errors: undefined,
  duplicates: undefined,
};

export default Committee;
