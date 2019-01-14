import React from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Button } from 'semantic-ui-react';

import CommitteeFormView from '../components/CommitteeFormView';
import { committeeOptions } from '../helpers/defaultOptions';
import '../assets/stylesheets/Base.css';
import '../assets/stylesheets/Committee.css';

function Committee(props) {
  // To avoid repeating code, this iterates through all the Froms
  const forms = [];

  for (let id = 0; id < 3; id++) {
    forms.push(<CommitteeFormView
      key={id}
      formID={id}
      options={committeeOptions}
      value={props.committees[id]}
      onChangeCommittee={props.onChangeCommittee}
      onChangeReason={props.onChangeReason}
      errors={props.errors !== undefined ? props.errors[id] : undefined}
      duplicates={props.duplicates !== undefined ? props.duplicates[id] : undefined}
    />);
  }

  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutLeft" duration={0.5}>
      <Container textAlign="center" className="page-container committee-container" id={props.id} >
        <h1 className="page-title">Committee Preference</h1>
        { forms }
        <Button primary type="submit" disabled={props.isSubmitting} >Submit</Button>
      </Container>
    </ScrollAnimation>
  );
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
