import * as yup from 'yup';

const Schema = yup.object().shape({
  experience: yup.array().of(yup.string().nullable()).required('This field is required'),
  interests: yup.array().of(yup.string().nullable()).required('This field is required'),
  skills: yup.array().of(yup.string().nullable()).required('This field is required'),
});

export default Schema;
