import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import BasicInfo from './BasicInfo';
import SkillsInterests from './SkillsInterests';
import GlitterPics from '../../presentational/design/GlitterPics';

import '../../../assets/stylesheets/Base.css';
import '../../../assets/stylesheets/PersonalInfo.css';

const PersonalInfo = props => (
  <Container id={props.id} textAlign="center" className="page-container personal-info-container">
    <GlitterPics
      begin={5}
      end={10}
      columns={2}
      offset={30}
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
      begin={0}
      end={5}
      columns={2}
      offset={0}
    />
    <div className="section-footer">
      Press <strong>Ctrl+Enter</strong> to scroll
    </div>
  </Container>
);

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
