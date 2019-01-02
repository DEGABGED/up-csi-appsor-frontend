import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import BasicInfo from './BasicInfo';
import SkillsInterests from './SkillsInterests';
import GlitterPics from '../components/design/GlitterPics';
import { skillsInterestsOptions } from '../helpers/defaultOptions';

import '../assets/stylesheets/Base.css';
import '../assets/stylesheets/PersonalInfo.css';

class PersonalInfo extends Component {
  mapToOptions(list) {
    return list.map(item => ({ text: item, value: item }));
  }

  updateSkillsInterestsOptions() {
    const { skills, interests, experience } = this.props.skillsInterests;
    const skillsOptions = [...new Set([...skills, ...skillsInterestsOptions.skills])];
    const interestsOptions = [...new Set([...interests, ...skillsInterestsOptions.interests])];
    const experienceOptions = [...new Set([...experience, ...skillsInterestsOptions.experience])];

    return {
      skills: this.mapToOptions(skillsOptions),
      interests: this.mapToOptions(interestsOptions),
      experience: this.mapToOptions(experienceOptions),
    };
  }

  render() {
    return (
      <Container id={this.props.id} textAlign="center" className="page-container personal-info-container">
        <GlitterPics
          begin={5}
          end={10}
          columns={2}
          offset={0}
        />
        <div className="personal-info-form">
          <h1 className="page-title">Personal Information</h1>
          <BasicInfo
            handleChange={this.props.handleChangeBasicInfo}
            basicInfo={this.props.basicInfo}
            errors={this.props.errorsBasicInfo}
          />
          <SkillsInterests
            options={this.updateSkillsInterestsOptions()}
            handleChange={this.props.handleChangeSkillsInterests}
            errors={this.props.errorsSkillsInterests}
          />
        </div>
        <GlitterPics
          begin={0}
          end={5}
          columns={2}
          offset={1}
        />
      </Container>
    );
  }
}

PersonalInfo.propTypes = {
  id: PropTypes.string,
  handleChangeBasicInfo: PropTypes.func.isRequired,
  basicInfo: PropTypes.object.isRequired,
  errorsBasicInfo: PropTypes.object,
  handleChangeSkillsInterests: PropTypes.func.isRequired,
  skillsInterests: PropTypes.object.isRequired,
  errorsSkillsInterests: PropTypes.object,
};

PersonalInfo.defaultProps = {
  errorsBasicInfo: undefined,
  errorsSkillsInterests: undefined,
  id: 'personal-info',
};

export default PersonalInfo;
