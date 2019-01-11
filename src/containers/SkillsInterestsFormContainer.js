import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import FormCustomDropdown from '../components/FormCustomDropdown';

class SkillsInterests extends Component {
  shouldComponentUpdate(nextProps) {
    // Compare the values of each of the 3 arrays
    const prev = this.props.values;
    const next = nextProps.values;
    let areEqual = true;

    Object.entries(prev).forEach(([key, arr]) => {
      areEqual = areEqual
        && arr.length === next[key].length
        && arr
          .map((element, index) => element === next[key][index])
          .reduce((acc, element) => acc && element, true);
    });

    return !areEqual;
  }

  render() {
    return (
      <Container className="skills-interests">
        <div className="dropdown-div">
          <label className="dropdown-label">Skills</label>
          <FormCustomDropdown
            placeholder="Skills"
            name="skills"
            options={this.props.options.skills}
            onChange={this.props.onChange}
          />
        </div>
        <div className="dropdown-div">
          <label className="dropdown-label">Interests</label>
          <FormCustomDropdown
            placeholder="Interests"
            name="interests"
            options={this.props.options.interests}
            onChange={this.props.onChange}
          />
        </div>
        <div className="dropdown-div">
          <label className="dropdown-label">Experience</label>
          <FormCustomDropdown
            placeholder="Experience"
            name="experience"
            options={this.props.options.experience}
            onChange={this.props.onChange}
          />
        </div>
      </Container>
    );
  }
}

SkillsInterests.propTypes = {
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired,
};

export default SkillsInterests;
