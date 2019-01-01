import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'formik';
import { Container } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';


import AffiliationsFormView from '../components/AffiliationsFormView';
import '../assets/stylesheets/Base.css';
import '../assets/stylesheets/Affiliations.css';

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
      <Container className="page-container" id={this.props.id}>
        <h1 className="page-title">Affiliations</h1>
        {this.props.affiliations.map((a, i) => (
          <AffiliationsFormView
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
            errors={(typeof (this.props.errors) !== 'undefined' && Array.isArray(this.props.errors))
              ? this.props.errors[i]
              : this.props.errors
            }
          />
        ))}
        <div className="add-org-button">
          <Button
            onClick={() => helpers.push({
              orgName: null,
              position: null,
              duties: null,
            })}
            disabled={this.props.affiliations.length >= 6}
          >+ Add Organization
          </Button>
        </div>
      </Container>
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
  id: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  affiliations: PropTypes.array.isRequired,
  errors: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.string,
  ]),
};

Affiliations.defaultProps = {
  id: 'affiliations',
  errors: undefined,
};

export default Affiliations;
