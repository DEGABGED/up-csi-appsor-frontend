import * as yup from 'yup';

const Schema = yup.array().of(yup.object().shape({
	priority: yup.number(),
	committee_id: yup.number().nullable().required('This field is required'),
	reason: yup.string().nullable().required('This field is required')
}));

export default Schema;
