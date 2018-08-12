import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import BasicInfo from '../../container/pages/BasicInfo';
import SkillsInterests from '../../container/pages/SkillsInterests';
import '../../../assets/stylesheets/PersonalInfo.css';

const PersonalInfo = props => (
  <Container textAlign="center" className="personalinfo-container">
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
  </Container>
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
