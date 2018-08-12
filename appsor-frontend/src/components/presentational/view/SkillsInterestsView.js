import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Container } from 'semantic-ui-react';

function View(props) {
  return (
    <Container>
      <Dropdown
        placeholder="Skills"
        name="skills"
        options={props.options.skills}
        closeOnBlur
        allowAdditions
        multiple
        selection
        search
        onChange={props.handleChange}
      />

      <Dropdown
        placeholder="Interests"
        name="interests"
        options={props.options.interests}
        closeOnBlur
        allowAdditions
        multiple
        selection
        search
        onChange={props.handleChange}
      />

      <Dropdown
        placeholder="Experience"
        name="experience"
        options={props.options.experience}
        closeOnBlur
        allowAdditions
        multiple
        selection
        search
        onChange={props.handleChange}
      />
    </Container>
  );
}

View.propTypes = {
  options: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default View;
