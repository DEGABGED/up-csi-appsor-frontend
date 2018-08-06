import * as yup from 'yup';

const Schema = yup.object().shape({
  firstName: yup.string().nullable().required('This field is required'),
  lastName: yup.string().nullable().required('This field is required'),
  middleInitial: yup.string().nullable().required('This field is required'),
  nickname: yup.string().nullable().required('This field is required'),
  studentNumber: yup.string().nullable()
    .matches(/^\d{4}-\d{5}$/, 'Invalid student number given')
    .required('This field is required'),
  birthday: yup.date().nullable().required('This field is required'),
  contactNumber: yup.string().nullable()
    .matches(/^\(\+63\)\s?\d{3}\s?\d{3}\s?\d{4}$/, 'Invalid contact number given')
    .required('This field is required'),
  email: yup.string().nullable()
    .email('Invalid email given')
    .required('This field is required'),
  address: yup.string().nullable().required('This field is required'),
});


export default Schema;
