import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import ScrollAnimation from 'react-animate-on-scroll';

import BasicInfo from './BasicInfo';
import SkillsInterests from './SkillsInterests';
import GlitterPics from '../components/design/GlitterPics';
import { updateSkillsInterestsOptions } from '../helpers/defaultOptions';
import DrinksDisplay from '../components/design/DrinksDisplay';

import '../assets/stylesheets/Base.css';
import '../assets/stylesheets/PersonalInfo.css';

function PersonalInfo(props) {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutLeft" duration={0.5}>
      <DrinksDisplay />
      <Container id={props.id} textAlign="center" className="page-container personal-info-container">
        <GlitterPics
          begin={5}
          end={10}
          columns={2}
          offset={0}
        />
        <div className="personal-info-form">
          <h1 className="page-title">Personal Information</h1>
          <BasicInfo
            handleChange={props.handleChangeBasicInfo}
            basicInfo={props.basicInfo}
            errors={props.errorsBasicInfo}
          />
          <SkillsInterests
            options={updateSkillsInterestsOptions(props.skillsInterests)}
            handleChange={props.handleChangeSkillsInterests}
            errors={props.errorsSkillsInterests}
          />
        </div>
        <GlitterPics
          begin={0}
          end={5}
          columns={2}
          offset={1}
        />
      </Container>
    </ScrollAnimation>
  );
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
