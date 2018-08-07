import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'formik';

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
  // The handleChange function here makes sure that only the
  //    relevant slice of the values is edited
  renderForms(helpers) {
    return (
      <div>
        {this.props.affiliations.map((a, i) => (
          <AffiliationsForm
            key={i}
            formID={i}
            affiliations={a}
            deleteForm={() => helpers.remove(i)}
            handleChange={(e) => {
              const { name, value } = e.currentTarget;
              const newAffiliations = [...this.props.affiliations];
              newAffiliations[i][name] = value;
              this.props.handleChange(newAffiliations);
            }}
            errors={typeof (this.props.errors) === 'undefined' ? undefined : this.props.errors[i]}
          />
        ))}
        <button
          type="button"
          onClick={() => helpers.push({
            orgName: null,
            position: null,
            duties: null,
          })}
        >Add New Org
        </button>
      </div>
    );
  }

  render() {
    return (
      <FieldArray
        name="affiliations"
        validateOnChange={false}
        render={this.renderForms}
      />
    );
  }
}

Affiliations.propTypes = {
  handleChange: PropTypes.func.isRequired,
  affiliations: PropTypes.array.isRequired,
  errors: PropTypes.arrayOf(PropTypes.object),
};

Affiliations.defaultProps = {
  errors: undefined,
};

export default Affiliations;

// TODO:
// Add logic such that User cannot add new Form
//  not until the user answered all of the previous
//  forms
