import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { Persist } from 'formik-persist';
import { object } from 'yup';

import PersonalInfoFormContainer from './PersonalInfoFormContainer';
import AffiliationsFormContainer from './AffiliationsFormContainer';
import CommitteeFormContainer from './CommitteeFormContainer';
import SubmitModal from '../components/design/SubmitModal';

import basicInfoSchema from '../schemas/BasicInfoSchema';
import skillsInterestsSchema from '../schemas/SkillsInterestsSchema';
import affiliationsSchema from '../schemas/AffiliationsSchema';
import committeesSchema from '../schemas/CommitteesSchema';

import { updateSkillsInterestsOptions } from '../helpers/defaultOptions';
import formSubmit from '../helpers/formSubmit';

// add the rest of the pages here
// if you plan to use a custom input handler, follow the format for PersonalInfo
//    and implement your custom handler in the component itself
class MainForm extends Component {
  componentDidUpdate(prevProps) {
    const errorTags = {
      basicInfo: 'personal-info',
      skillsInterests: 'personal-info',
      affiliations: 'affiliations',
      committees: 'committee',
      committeeDuplicates: 'committee',
    };
    if (
      prevProps.isSubmitting
      && !this.props.isSubmitting
      && !this.props.isValid
      && Object.keys(this.props.errors).length > 0
    ) {
      document.getElementById(
        errorTags[Object.keys(this.props.errors)[0]],
      ).scrollIntoView();
    }
  }

  render() {
    const {
      status,
      values,
      errors,
      handleSubmit,
      setValues,
      setFieldValue,
      setSubmitting,
      isSubmitting,
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <PersonalInfoFormContainer
          id="personal-info"
          basicInfo={values.basicInfo}
          onChangeBasicInfo={({ name, value }) => {
            setFieldValue(`basicInfo[${name}]`, value);
          }}
          errorsBasicInfo={errors.basicInfo}
          skillsInterests={values.skillsInterests}
          onChangeSkillsInterests={(field, value) => {
            setFieldValue(`skillsInterests[${field}]`, value);
          }}
          errorsSkillsInterests={errors.skillsInterests}
          optionsSkillsInterests={updateSkillsInterestsOptions(values.skillsInterests)}
        />
        <AffiliationsFormContainer
          id="affiliations"
          values={values.affiliations}
          onChange={({ formID, name, value }) => {
            const newAffiliations = [...values.affiliations];
            newAffiliations[formID][name] = value;
            setValues({
              ...values,
              affiliations: newAffiliations,
            });
          }}
          errors={errors.affiliations}
        />
        <CommitteeFormContainer
          id="committee"
          values={values.committees}
          onChangeCommittee={(field, value) => {
            setFieldValue(`committees[${parseInt(field, 10)}].committee_id`, value);
          }}
          onChangeReason={({ formID, value }) => {
            setFieldValue(`committees[${parseInt(formID, 10)}].reason`, value);
          }}
          errors={errors.committees}
          duplicates={errors.committeeDuplicates}
          isSubmitting={isSubmitting}
        />
        <SubmitModal {...status} setSubmitting={setSubmitting} />
        <Persist name="form-values" />
      </form>
    );
  }
}


MainForm.propTypes = {
  status: PropTypes.bool,
  values: PropTypes.object.isRequired,
  errors: PropTypes.shape({
    basicInfo: PropTypes.object,
    skillsInterests: PropTypes.object,
    affiliations: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.string,
    ]),
  }),
  handleSubmit: PropTypes.func.isRequired,
  setValues: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
  setSubmitting: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  setFormState: PropTypes.func.isRequired,
};

MainForm.defaultProps = {
  status: undefined,
  errors: undefined,
};


// add items here as necessary (validation, etc)
const ConnectedForm = withFormik({
  mapPropsToValues: props => props.values,
  validationSchema: object().shape({
    basicInfo: basicInfoSchema,
    committees: committeesSchema,
    skillsInterests: skillsInterestsSchema,
    affiliations: affiliationsSchema,
  }),
  validate: (values) => {
    const committeeErrors = [];
    const committeeIds = [];

    // get committee ids
    for (let i = 0; i < 3; i++) {
      committeeIds[i] = values.committees[i].committee_id;
    }
    // check for duplicates
    for (let i = 0; i < 2; i++) {
      for (let j = i + 1; j < 3; j++) {
        if (committeeIds[i] != null && committeeIds[i] === committeeIds[j]) {
          committeeErrors[i] = 'Duplicates are not allowed';
          committeeErrors[j] = 'Duplicates are not allowed';
        }
      }
    }
    return committeeErrors.length ? { committeeDuplicates: committeeErrors } : {};
  },
  handleSubmit: formSubmit,
  validateOnChange: false,
  validateOnBlur: false,
})(MainForm);

export default ConnectedForm;
