import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'formik';
import { Container } from 'semantic-ui-react';
import Button from '@material-ui/core/Button';
import ScrollAnimation from 'react-animate-on-scroll';

import AffiliationsFormEntry from '../components/AffiliationsFormEntry';
import '../assets/stylesheets/Base.css';
import '../assets/stylesheets/Affiliations.css';

class AffiliationsFormContainer extends Component {
  constructor(props) {
    super(props);
    this.renderForms = this.renderForms.bind(this);
  }

  // Render all the Forms
  // The handleChange function here makes sure that only the
  //    relevant slice of the values is edited
  renderForms(helpers) {
    return (
      <Container className="page-container" id={this.props.id}>
        <h1 className="page-title">Affiliations</h1>
        {this.props.values.map((a, i) => (
          <AffiliationsFormEntry
            key={i}
            formID={i}
            value={a}
            deleteForm={() => helpers.remove(i)}
            onChange={this.props.onChange}
            errors={(typeof (this.props.errors) !== 'undefined' && Array.isArray(this.props.errors))
              ? this.props.errors[i]
              : this.props.errors
            }
          />
        ))}
        <div className="add-org-button">
          <Button
            onClick={() => helpers.push({
              orgName: '',
              position: '',
              duties: '',
            })}
            disabled={this.props.values.length >= 6}
          >+ Add Organization
          </Button>
        </div>
      </Container>
    );
  }

  render() {
    return (
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutLeft" duration={0.5}>
        <FieldArray
          name="affiliations"
          validateOnChange={false}
          render={this.renderForms}
        />
      </ScrollAnimation>
    );
  }
}

AffiliationsFormContainer.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  errors: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.string,
  ]),
};

AffiliationsFormContainer.defaultProps = {
  id: 'affiliations',
  errors: undefined,
};

export default AffiliationsFormContainer;
