import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

function View(props) {
  return (
    <div>
      <Dropdown
        placeholder="Skills"
        options={props.options.skills}
        defaultValue={props.skillsInterests.skills}
        allowAdditions
        multiple
        selection
        search
        onChange={props.handleSkills}
      />

      <Dropdown
        placeholder="Interests"
        options={props.options.interests}
        defaultValue={props.skillsInterests.interests}
        allowAdditions
        multiple
        selection
        search
        onChange={props.handleInterests}
      />

      <Dropdown
        placeholder="Experience"
        options={props.options.experience}
        defaultValue={props.skillsInterests.experience}
        allowAdditions
        multiple
        selection
        search
        onChange={props.handleExperience}
      />
    </div>
  );
}

View.propTypes = {
  options: PropTypes.object.isRequired,
  skillsInterests: PropTypes.object.isRequired,
  handleSkills: PropTypes.func.isRequired,
  handleInterests: PropTypes.func.isRequired,
  handleExperience: PropTypes.func.isRequired,
};

export default View;
