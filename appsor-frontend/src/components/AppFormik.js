import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { object } from 'yup';

import Affiliations from './container/pages/Affiliations';
import Committee from './container/pages/Committee';
import PersonalInfo from './presentational/view/PersonalInfo';

import basicInfoSchema from './container/validationSchemas/BasicInfoSchema';
import skillsInterestsSchema from './container/validationSchemas/SkillsInterestsSchema';
import affiliationsSchema from './container/validationSchemas/AffiliationsSchema';
import committeesSchema from './container/validationSchemas/CommitteesSchema';

// add the rest of the pages here
// if you plan to use a custom input handler, follow the format for Affiliations
//    and implement your custom handler in the component itself
const MainForm = ({
  values,
  errors,
  handleSubmit,
  setValues,
  setFieldValue,
}) => (
  <form onSubmit={handleSubmit}>
    <PersonalInfo
      handleChangeBasicInfo={(value) => {
        setValues({
          ...values,
          basicInfo: value,
        });
      }}
      basicInfo={values.basicInfo}
      errorsBasicInfo={errors.basicInfo}
      handleChangeSkillsInterests={(event, { value }) => {
        const field = event.currentTarget.parentNode.parentNode.attributes.name.value;
        setFieldValue(`skillsInterests[${field}]`, value);
      }}
      skillsInterests={values.skillsInterests}
      errorsSkillsInterests={errors.skillsInterests}
    />
    <Affiliations
      handleChange={(value) => {
        setValues({
          ...values,
          affiliations: value,
        });
      }}
      affiliations={values.affiliations}
      errors={errors.affiliations}
    />
    <Committee
      handleChangeCommittee={(event, { value }) => {
        try {
          const id = event.currentTarget.parentNode.parentNode.attributes.name.value;
          setFieldValue(`committees[${parseInt(id, 10)}].committee_id`, value);
        } catch (error) { }
      }}
      handleChangeReason={(event) => {
        const id = event.target.name;
        setFieldValue(`committees[${parseInt(id, 10)}].reason`, event.target.value);
      }}
      committees={values.committees}
      errors={errors.committees}
      duplicates={errors.committeeDuplicates}
    />
  </form>
);

MainForm.propTypes = {
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
};

MainForm.defaultProps = {
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
  handleSubmit: (values) => {
    console.log(values);
    fetch('/applicants', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(values),
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  },
  validateOnChange: false,
  validateOnBlur: false,
})(MainForm);

export default ConnectedForm;
