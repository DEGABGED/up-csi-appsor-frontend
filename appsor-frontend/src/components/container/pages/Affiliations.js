import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AffiliationsForm from '../../presentational/forms/AffiliationsForm';

class Affiliations extends Component {
  constructor(props) {
    super(props);
    this.addForm = this.addForm.bind(this);
    this.deleteForm = this.deleteForm.bind(this);
    this.renderForms = this.renderForms.bind(this);
  }

  // Add Forms to the UI (the state handles the
  //  additional form through a loop)
  addForm() {
    this.props.handleChange([
      ...this.props.affiliations,
      {
        orgName: null,
        position: null,
        duties: null,
      },
    ]);
  }

  // Deletes the ith form from the UI
  deleteForm(formID) {
    const value = this.props.affiliations.slice();
    value.splice(formID, 1);
    this.props.handleChange(value);
  }

  // Render all the Forms
  renderForms() {
    return this.props.affiliations.map((m, i) => (
      <AffiliationsForm
        key={i}
        formID={i}
        affiliations={m}
        deleteForm={this.deleteForm}
        handleChange={e => {
          const { name, value } = e.currentTarget;
          let newAffiliations = [...this.props.affiliations];
          newAffiliations[i][name] = value;
          this.props.handleChange(newAffiliations);
        }}
      />
    ));
  }

  render() {
    return (
      <div>
        { this.renderForms() }
        <button onClick={this.addForm}>Add New Org</button>
      </div>
    );
  }
}

Affiliations.propTypes = {
  handleChange: PropTypes.func.isRequired,
  affiliations: PropTypes.array.isRequired,
};

export default Affiliations;

// TODO:
// Add logic such that User cannot add new Form
//  not until the user answered all of the previous
//  forms
