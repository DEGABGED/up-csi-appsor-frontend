import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './presentational/Form';

class Affiliations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formsCount: this.props.affiliations.length,
    };
    this.addForm = this.addForm.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
    this.renderForms = this.renderForms.bind(this);
    this.handleOrgName = this.props.handleDynamicForm.bind(this, 'affiliations', 'orgName');
    this.handlePosition = this.props.handleDynamicForm.bind(this, 'affiliations', 'position');
    this.handleDuties = this.props.handleDynamicForm.bind(this, 'affiliations', 'duties');
  }

  // Add Forms to the UI (the state handles the
  //  additional form through a loop)
  addForm() {
    this.setState({ formsCount: this.state.formsCount + 1 });
  }

  // Deletes the ith form from the UI
  deleteForm(formID) {
    this.setState(
      { formsCount: this.state.formsCount - 1 },
      this.props.handleDeleteForm('affiliations', formID),
    );
  }

  // Render all the Forms
  renderForms() {
    const forms = [];
    for (let id = 0; id < this.state.formsCount; id++) {
      forms.push(<Form
        key={id}
        formID={id}
        affiliations={this.props.affiliations[id]
          || { orgName: null, position: null, duties: null }}
        deleteForm={this.deleteForm}
        handleOrgName={this.handleOrgName}
        handlePosition={this.handlePosition}
        handleDuties={this.handleDuties}
      />);
    }
    return forms;
  }

  render() {
    return (
      <div>
        { this.renderForms() }
        <button onClick={this.addForm}>Add New Org</button>
        <button onClick={this.props.handlePressPrev}>Prev Page!</button>
        <button onClick={this.props.handlePressNext}>Next Page!</button>
      </div>
    );
  }
}

Affiliations.propTypes = {
  handlePressPrev: PropTypes.func.isRequired,
  handlePressNext: PropTypes.func.isRequired,
  handleDynamicForm: PropTypes.func.isRequired,
  handleDeleteForm: PropTypes.func.isRequired,
  affiliations: PropTypes.array.isRequired,
};

export default Affiliations;

// TODO:
// Add logic such that User cannot add new Form
//  not until the user answered all of the previous
//  forms
