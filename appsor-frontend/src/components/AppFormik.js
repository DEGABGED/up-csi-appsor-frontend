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
}) => (
  <Form>
    <BasicInfo
      handleChange={value => {
        setValues({
          ...values,
          basicInfo: value
        });
      }}
      basicInfo={values.basicInfo}
    />
    <Affiliations
      handleChange={value => {
        setValues({
          ...values,
          affiliations: value,
        });
      }}
      affiliations={values.affiliations}
    />
  </Form>
);

// add items here as necessary (validation, etc)
const ConnectedForm = withFormik({
  mapPropsToValues: props => props.values,
  validate: (values, props) => {},
  handleSubmit: values => console.log(values),
})(MainForm);

export default ConnectedForm;
