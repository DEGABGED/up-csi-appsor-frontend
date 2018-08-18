import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import BasicInfo from '../../container/pages/BasicInfo';
import SkillsInterests from '../../container/pages/SkillsInterests';
import GlitterPics from '../design/GlitterPics';

import '../../../assets/stylesheets/Base.css';
import '../../../assets/stylesheets/PersonalInfo.css';

const PersonalInfo = props => (
  <div>
    <Container textAlign="center" className="page-container personal-info-container">
      <GlitterPics
        begin="5"
        end="10"
        columns="2"
        offset="30"
      />
      <div className="personal-info-form">
        <h1 className="page-title">Personal Information</h1>
        <BasicInfo
          handleChange={props.handleChangeBasicInfo}
          basicInfo={props.basicInfo}
          errors={props.errorsBasicInfo}
        />
        <SkillsInterests
          handleChange={props.handleChangeSkillsInterests}
          skillsInterests={props.skillsInterests}
          errors={props.errorsSkillsInterests}
        />
      </div>
      <GlitterPics
        begin="0"
        end="5"
        columns="2"
        offset="0"
      />
    </Container>
  </div>
);

PersonalInfo.propTypes = {
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
};

export default PersonalInfo;
