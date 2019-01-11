import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';
import ScrollAnimation from 'react-animate-on-scroll';

import BasicInfo from './BasicInfoFormContainer';
import SkillsInterests from './SkillsInterestsFormContainer';
import GlitterPics from '../components/design/DesktopGlitter';
import MobileGlitter from '../components/design/MobileGlitter';

import '../assets/stylesheets/Base.css';
import '../assets/stylesheets/PersonalInfo.css';

function PersonalInfo(props) {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutLeft" duration={0.5}>
      <MobileGlitter />
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
            onChange={props.onChangeBasicInfo}
            basicInfo={props.basicInfo}
            errors={props.errorsBasicInfo}
          />
          <SkillsInterests
            options={props.optionsSkillsInterests}
            values={props.skillsInterests}
            onChange={props.onChangeSkillsInterests}
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
  basicInfo: PropTypes.object.isRequired,
  onChangeBasicInfo: PropTypes.func.isRequired,
  errorsBasicInfo: PropTypes.object,
  skillsInterests: PropTypes.object.isRequired,
  onChangeSkillsInterests: PropTypes.func.isRequired,
  errorsSkillsInterests: PropTypes.object,
  optionsSkillsInterests: PropTypes.object.isRequired,
};

PersonalInfo.defaultProps = {
  errorsBasicInfo: undefined,
  errorsSkillsInterests: undefined,
  id: 'personal-info',
};

export default PersonalInfo;
