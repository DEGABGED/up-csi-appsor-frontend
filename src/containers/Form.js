import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { object } from 'yup';
import ScrollAnimation from 'react-animate-on-scroll';

import Affiliations from './Affiliations';
import Committee from './Committee';
import PersonalInfo from './PersonalInfo';
import SubmitModal from '../components/design/SubmitModal';

import basicInfoSchema from '../schemas/BasicInfoSchema';
import skillsInterestsSchema from '../schemas/SkillsInterestsSchema';
import affiliationsSchema from '../schemas/AffiliationsSchema';
import committeesSchema from '../schemas/CommitteesSchema';

// add the rest of the pages here
// if you plan to use a custom input handler, follow the format for Affiliations
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
        <PersonalInfo
          id="personal-info"
          handleChangeBasicInfo={(value) => {
            setValues({
              ...values,
              basicInfo: value,
            });
          }}
          basicInfo={values.basicInfo}
          errorsBasicInfo={errors.basicInfo}
          handleChangeSkillsInterests={(field, value) => {
            setFieldValue(`skillsInterests[${field}]`, value);
          }}
          skillsInterests={values.skillsInterests}
          errorsSkillsInterests={errors.skillsInterests}
        />
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutLeft" duration={0.5}>
          <Affiliations
            id="affiliations"
            handleChange={(value) => {
              setValues({
                ...values,
                affiliations: value,
              });
            }}
            affiliations={values.affiliations}
            errors={errors.affiliations}
          />
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutLeft" duration={0.5}>
          <Committee
            id="committee"
            handleChangeCommittee={(event, { value }) => {
              let id;
              if (event.keyCode === 13) { /* Enter */
                id = event.target.parentNode.attributes.name.value;
              } else {
                try {
                  id = event.currentTarget.parentNode.parentNode.attributes.name.value;
                } catch (error) {
                  id = event.target.parentNode.attributes.name.value;
                }
              }
              setFieldValue(`committees[${parseInt(id, 10)}].committee_id`, value);
            }}
            handleChangeReason={(event) => {
              const id = event.target.name;
              setFieldValue(`committees[${parseInt(id, 10)}].reason`, event.target.value);
            }}
            committees={values.committees}
            errors={errors.committees}
            duplicates={errors.committeeDuplicates}
            isSubmitting={isSubmitting}
          />
        </ScrollAnimation>
        <SubmitModal {...status} setSubmitting={setSubmitting} />
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
};

MainForm.defaultProps = {
  status: undefined,
  errors: undefined,
};

const modalValues = (setStatus, success, message = '') => ({
  display: true,
  success,
  message,
  onClose: () => {
    setStatus({ display: false });
  },
  onFinish: () => {
    setStatus({ display: false });
    window.location.href = '/';
  },
});

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
  handleSubmit: (values, { setStatus }) => {
    const url = 'https://up-csi-appsor-backend.herokuapp.com/api/applicants';

    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(values),
    })
      .then((res) => {
        const wasSuccessful = res.ok;
        res.json()
          .then((data) => {
            setStatus(modalValues(setStatus, wasSuccessful, data));
          })
          .catch(() => {
            setStatus(modalValues(
              setStatus,
              false,
              'Please try submitting the form again. If the problem persists, please tell us. Thank you!',
            ));
          });
      })
      .catch(() => {
        setStatus(modalValues(setStatus,
          false,
          'Please try submitting the form again. If the problem persists, please tell us. Thank you!',
        ));
      });
  },
  validateOnChange: false,
  validateOnBlur: false,
})(MainForm);

export default ConnectedForm;
