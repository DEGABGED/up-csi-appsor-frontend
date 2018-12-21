import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SkillsInterestsView from '../components/SkillsInterestsView';
import { skillsInterestsOptions } from '../helpers/defaultOptions';

class SkillsInterests extends Component {
  createOptions(list) {
    return list.map(item => ({ text: item, value: item }));
  }

  updateOptions() {
    const { skills, interests, experience } = this.props.skillsInterests;
    const skillsOptions = [...new Set([...skills, ...skillsInterestsOptions.skills])];
    const interestsOptions = [...new Set([...interests, ...skillsInterestsOptions.interests])];
    const experienceOptions = [...new Set([...experience, ...skillsInterestsOptions.experience])];

    return {
      skills: this.createOptions(skillsOptions),
      interests: this.createOptions(interestsOptions),
      experience: this.createOptions(experienceOptions),
    };
  }

  render() {
    return (
      <SkillsInterestsView
        options={this.updateOptions()}
        skillsInterests={this.props.skillsInterests}
        handleChange={this.props.handleChange}
      />
    );
  }
}

SkillsInterests.propTypes = {
  handleChange: PropTypes.func.isRequired,
  skillsInterests: PropTypes.object.isRequired,
};

export default SkillsInterests;
