import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

function View(props) {
  return (
    <div>
      <Dropdown
        placeholder="Skills"
        options={props.options.skills}
        allowAdditions
        multiple
        selection
        search
        onChange={props.handleChangeSkills}
      />

      <Dropdown
        placeholder="Interests"
        options={props.options.interests}
        allowAdditions
        multiple
        selection
        search
        onChange={props.handleChangeInterests}
      />

      <Dropdown
        placeholder="Experience"
        options={props.options.experience}
        allowAdditions
        multiple
        selection
        search
        onChange={props.handleChangeExperience}
      />
    </div>
  );
}

View.propTypes = {
  options: PropTypes.object.isRequired,
  handleChangeSkills: PropTypes.func.isRequired,
  handleChangeInterests: PropTypes.func.isRequired,
  handleChangeExperience: PropTypes.func.isRequired,
};

export default View;
