import React, { Component } from 'react';
import PropTypes from 'prop-types';
import View from './presentational/View';
import defaultOptions from './presentational/defaultOptions';

class SkillsInterests extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.createOptions = this.createOptions.bind(this);
    this.updateOptions = this.updateOptions.bind(this);
    this.handleSkills = this.props.handleChange.bind(this, 'skillsInterests', 'skills');
    this.handleInterests = this.props.handleChange.bind(this, 'skillsInterests', 'interests');
    this.handleExperience = this.props.handleChange.bind(this, 'skillsInterests', 'experience');
  }

  createOptions(list) {
    return list.map(item => ({ text: item, value: item }));
  }

  updateOptions() {
    const { skills, interests, experience } = this.props.skillsInterests;
    return {
      skills: !skills.length
        || defaultOptions.skills.includes(skills[skills.length - 1])
        ? this.createOptions(defaultOptions.skills)
        : this.createOptions([...defaultOptions.skills, skills[skills.length - 1]]),
      interests: !interests.length
        || defaultOptions.interests.includes(interests[interests.length - 1])
        ? this.createOptions(defaultOptions.interests)
        : this.createOptions([...defaultOptions.interests, interests[interests.length - 1]]),
      experience: !experience.length
        || defaultOptions.experience.includes(experience[experience.length - 1])
        ? this.createOptions(defaultOptions.experience)
        : this.createOptions([...defaultOptions.experience, experience[experience.length - 1]]),
    };
  }

  render() {
    return (
      <div>
        <View
          options={this.updateOptions()}
          skillsInterests={this.props.skillsInterests}
          handleSkills={this.handleSkills}
          handleInterests={this.handleInterests}
          handleExperience={this.handleExperience}
        />
        <button onClick={this.props.handlePressPrev}>Prev Page!</button>
        <button onClick={this.props.handlePressNext}>Next Page!</button>
      </div>
    );
  }
}

SkillsInterests.propTypes = {
  handlePressPrev: PropTypes.func.isRequired,
  handlePressNext: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  skillsInterests: PropTypes.object.isRequired,
};

export default SkillsInterests;
