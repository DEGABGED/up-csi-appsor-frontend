import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { object } from 'yup';
import ScrollAnimation from 'react-animate-on-scroll';

import Affiliations from './container/pages/Affiliations';
import Committee from './container/pages/Committee';
import PersonalInfo from './container/pages/PersonalInfo';

import basicInfoSchema from './container/validationSchemas/BasicInfoSchema';
import skillsInterestsSchema from './container/validationSchemas/SkillsInterestsSchema';
import affiliationsSchema from './container/validationSchemas/AffiliationsSchema';
import committeesSchema from './container/validationSchemas/CommitteesSchema';

// add the rest of the pages here
// if you plan to use a custom input handler, follow the format for Affiliations
//    and implement your custom handler in the component itself
class MainForm extends Component {
  componentDidMount() {
    window.addEventListener('keydown', (event) => {
      if (event.ctrlKey && event.keyCode === 13) {
        console.log("CTRL+ENTER");
        const currentPage = document.getElementsByClassName('animated fadeIn')[0];
        const pageList = document.getElementsByClassName('animated');
        const currentIndex = [...pageList].indexOf(currentPage);
        if (currentIndex >= 0 && currentIndex + 1 < pageList.length) {
          pageList[currentIndex].classList.remove('fadeIn');
          pageList[currentIndex].classList.remove('fadeOutLeft');
          pageList[currentIndex].classList.add('fadeOutLeft');
          setTimeout(() => {
            pageList[currentIndex + 1].scrollIntoView();
          }, 300);
        }
      }
    });
  }

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
        errorTags[Object.keys(this.props.errors)[0]]
      ).scrollIntoView();
    }
  }

  render() {
    const {
      values,
      errors,
      handleSubmit,
      setValues,
      setFieldValue,
    } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <ScrollAnimation animateIn="fadeIn" animateOut="fadeOutLeft" duration={0.5}>
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
            handleChangeSkillsInterests={(event, { value }) => {
              let field;
              if ([13, 8, 46].includes(event.keyCode)) { /* Enter, Backspace, Delete */
                field = event.target.parentNode.attributes.name.value;
              } else {
                field = event.currentTarget.parentNode.parentNode.attributes.name.value;
              }
              setFieldValue(`skillsInterests[${field}]`, value);
            }}
            skillsInterests={values.skillsInterests}
            errorsSkillsInterests={errors.skillsInterests}
          />
        </ScrollAnimation>
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
        </ScrollAnimation>
        <div className="section-footer">
          Press <strong>Ctrl+Enter</strong> to scroll
        </div>
      </form>
    );
  }
}


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
  isSubmitting: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
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
