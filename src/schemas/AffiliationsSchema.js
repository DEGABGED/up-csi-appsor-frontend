import * as yup from 'yup';

const Schema = yup.array().of(
  yup.object().shape({
    orgName: yup.string().nullable().required('This field is required'),
    position: yup.string().nullable().required('This field is required'),
    duties: yup.string().nullable().required('This field is required'),
  }),
).max(6);

export default Schema;
