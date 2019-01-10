import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import FormCustomDropdown from '../components/FormCustomDropdown';

function SkillsInterests(props) {
  return (
    <Container className="skills-interests">
      <div className="dropdown-div">
        <label className="dropdown-label">Skills</label>
        <FormCustomDropdown
          placeholder="Skills"
          name="skills"
          options={props.options.skills}
          onChange={props.onChange}
        />
      </div>
      <div className="dropdown-div">
        <label className="dropdown-label">Interests</label>
        <FormCustomDropdown
          placeholder="Interests"
          name="interests"
          options={props.options.interests}
          onChange={props.onChange}
        />
      </div>
      <div className="dropdown-div">
        <label className="dropdown-label">Experience</label>
        <FormCustomDropdown
          placeholder="Experience"
          name="experience"
          options={props.options.experience}
          onChange={props.onChange}
        />
      </div>
    </Container>
  );
}

SkillsInterests.propTypes = {
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SkillsInterests;
