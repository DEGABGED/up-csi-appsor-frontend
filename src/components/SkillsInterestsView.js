import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import CustomDropdown from './CustomDropdown';

function View(props) {
  return (
    <Container className="skills-interests">
      <div className="dropdown-div">
        <label className="dropdown-label">Skills</label>
        <CustomDropdown
          placeholder="Skills"
          name="skills"
          options={props.options.skills}
          onChange={props.handleChange}
        />
      </div>
      <div className="dropdown-div">
        <label className="dropdown-label">Interests</label>
        <CustomDropdown
          placeholder="Interests"
          name="interests"
          options={props.options.interests}
          onChange={props.handleChange}
        />
      </div>
      <div className="dropdown-div">
        <label className="dropdown-label">Experience</label>
        <CustomDropdown
          placeholder="Experience"
          name="experience"
          options={props.options.experience}
          onChange={props.handleChange}
        />
      </div>
    </Container>
  );
}

View.propTypes = {
  options: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default View;
