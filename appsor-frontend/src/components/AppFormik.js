import React, { Component } from 'react';
import { withFormik, Form } from 'formik';
import update from 'immutability-helper';

import Home from './container/pages/Home';
import Affiliations from './container/pages/Affiliations';
import BasicInfo from './container/pages/BasicInfo';
import Committee from './container/pages/Committee';
import SkillsInterests from './container/pages/SkillsInterests';
import Result from './container/pages/Result';

import pages from './container/helper/pageorder';
import initialState from './container/helper/appstate';

import { object } from 'yup'
import basicInfoSchema from './container/validationSchemas/BasicInfoSchema'
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
        })
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
    />
    <Affiliations
      handleChange={(value) => {
        setValues({
          ...values,
          affiliations: value,
        });
      }}
      affiliations={values.affiliations}
    />
    <hr/>
    <button color="primary" type='submit'>Submit</button>
  </form>
);

// add items here as necessary (validation, etc)
const ConnectedForm = withFormik({
  mapPropsToValues: props => props.values,
  validationSchema: object().shape({
    basicInfo: basicInfoSchema
  }),
  handleSubmit: values => console.log(values),
  validateOnChange: false,
})(MainForm);

export default ConnectedForm;
