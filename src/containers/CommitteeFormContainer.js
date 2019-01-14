import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Button } from 'semantic-ui-react';

import CommitteeFormView from '../components/CommitteeFormView';
import { committeeOptions } from '../helpers/defaultOptions';
import { shallowEqual } from '../helpers/generics';
import '../assets/stylesheets/Base.css';
import '../assets/stylesheets/Committee.css';

class Committee extends Component {
  shouldComponentUpdate(nextProps) {
    // Check if the list of objects are equal
    const prev = this.props.committees;
    const next = nextProps.committees;
    let areEqual = prev.length === next.length;

    areEqual = areEqual && shallowEqual(this.props.errors, nextProps.errors);

    areEqual = areEqual && prev
      .map((element, index) => shallowEqual(element, next[index]))
      .reduce((acc, element) => acc && element, true);

    return !areEqual;
  }

  render() {
    // To avoid repeating code, this iterates through all the Froms
    const forms = [];

    for (let id = 0; id < 3; id++) {
      forms.push(<CommitteeFormView
        key={id}
        formID={id}
        options={committeeOptions}
        value={this.props.committees[id]}
        onChangeCommittee={this.props.onChangeCommittee}
        onChangeReason={this.props.onChangeReason}
        errors={this.props.errors !== undefined ? this.props.errors[id] : undefined}
        duplicates={this.props.duplicates !== undefined ? this.props.duplicates[id] : undefined}
      />);
    }

    return (
      <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutLeft" duration={0.5}>
        <Container textAlign="center" className="page-container committee-container" id={this.props.id} >
          <h1 className="page-title">Committee Preference</h1>
          { forms }
          <Button primary type="submit" disabled={this.props.isSubmitting} >Submit</Button>
        </Container>
      </ScrollAnimation>
    );
  }
}

Committee.propTypes = {
  id: PropTypes.string,
  errors: PropTypes.array,
  duplicates: PropTypes.array,
  onChangeCommittee: PropTypes.func.isRequired,
  onChangeReason: PropTypes.func.isRequired,
  committees: PropTypes.array.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

Committee.defaultProps = {
  id: 'committee',
  errors: undefined,
  duplicates: undefined,
};

export default Committee;
