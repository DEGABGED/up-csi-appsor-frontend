import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Container } from 'semantic-ui-react';

import preventDefaultEnter from '../helper/preventDefaultEnter';

function View(props) {
  // console.log(props.options)
  return (
    <Container className="skills-interests">
    <div className="dropdown-div">
      <label className="dropdown-label">Skills</label>
      <Dropdown
        placeholder="Skills"
        name="skills"
        options={props.options.skills}
        closeOnBlur
        allowAdditions
        multiple
        selection
        search
        fluid
        onChange={props.handleChange}
        className="dropdown"
        onKeyPress={preventDefaultEnter}
      />
    </div>
    <div className="dropdown-div">
      <label className="dropdown-label">Interests</label>
      <Dropdown
        placeholder="Interests"
        name="interests"
        options={props.options.interests}
        closeOnBlur
        allowAdditions
        multiple
        selection
        search
        fluid
        onChange={props.handleChange}
        className="dropdown"
        onKeyPress={preventDefaultEnter}
      />
    </div>
    <div className="dropdown-div">
      <label className="dropdown-label">Experience</label>
      <Dropdown
        placeholder="Experience"
        name="experience"
        options={props.options.experience}
        closeOnBlur
        allowAdditions
        multiple
        selection
        search
        fluid
        onChange={props.handleChange}
        className="dropdown"
        onKeyPress={preventDefaultEnter}
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
