import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SkillsInterestsView from '../../presentational/view/SkillsInterestsView';
import { skillsInterestsOptions } from '../../presentational/helper/defaultOptions';

class SkillsInterests extends Component {
  createOptions(list) {
    return list.map(item => ({ text: item, value: item }));
  }

  updateOptions() {
    const { skills, interests, experience } = this.props.skillsInterests;
    return {
      skills: !skills.length
        || skillsInterestsOptions.skills.includes(skills[skills.length - 1])
        ? this.createOptions(skillsInterestsOptions.skills)
        : this.createOptions([...skillsInterestsOptions.skills, skills[skills.length - 1]]),
      interests: !interests.length
        || skillsInterestsOptions.interests.includes(interests[interests.length - 1])
        ? this.createOptions(skillsInterestsOptions.interests)
        : this.createOptions([...skillsInterestsOptions.interests,
          interests[interests.length - 1]]),
      experience: !experience.length
        || skillsInterestsOptions.experience.includes(experience[experience.length - 1])
        ? this.createOptions(skillsInterestsOptions.experience)
        : this.createOptions([...skillsInterestsOptions.experience,
          experience[experience.length - 1]]),
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
