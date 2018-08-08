import React from 'react';
import { withFormik } from 'formik';
import { object } from 'yup';
import PropTypes from 'prop-types';

// import Home from './container/pages/Home';
import Affiliations from './container/pages/Affiliations';
import BasicInfo from './container/pages/BasicInfo';
import Committee from './container/pages/Committee';
import SkillsInterests from './container/pages/SkillsInterests';
// import Result from './container/pages/Result';

import basicInfoSchema from './container/validationSchemas/BasicInfoSchema';
import skillsInterestsSchema from './container/validationSchemas/SkillsInterestsSchema';
import affiliationsSchema from './container/validationSchemas/AffiliationsSchema';

// add the rest of the pages here
// if you plan to use a custom input handler, follow the format for Affiliations
//    and implement your custom handler in the component itself
const MainForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
  setValues,
  setFieldValue,
}) => (
  <form onSubmit={handleSubmit}>
    <BasicInfo
      handleChange={(value) => {
        setValues({
          ...values,
          basicInfo: value,
        });
      }}
      basicInfo={values.basicInfo}
      errors={errors.basicInfo}
    />
    <SkillsInterests
      handleChange={(event, { value }) => {
        const field = event.currentTarget.parentNode.parentNode.attributes.name.value;
        setFieldValue(`skillsInterests[${field}]`, value);
      }}
      skillsInterests={values.skillsInterests}
      errors={errors.skillsInterests}
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
        const id = event.currentTarget.parentNode.parentNode.attributes.name.value;
        setFieldValue(`committees[${parseInt(id, 10)}].committee_id`, value);
      }}
      handleChangeReason={(event) => {
        const id = event.target.name;
        setFieldValue(`committees[${parseInt(id, 10)}].reason`, event.target.value);
      }}
      committees={values.committees}
    />
    <hr />
    <button color="primary" type="submit">Submit</button>
  </form>
);

MainForm.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.shape({
    basicInfo: PropTypes.object,
    skillsInterests: PropTypes.object,
    affiliations: PropTypes.arrayOf(PropTypes.object),
  }),
  touched: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
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
    skillsInterests: skillsInterestsSchema,
    affiliations: affiliationsSchema,
  }),
  handleSubmit: values => console.log(values),
  validateOnChange: false,
  validateOnBlur: false,
})(MainForm);

export default ConnectedForm;
