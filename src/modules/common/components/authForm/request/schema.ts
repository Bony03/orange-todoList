import * as Yup from 'yup';

export const ResetSchema = Yup.object().shape({
  email: Yup.string().email('Please enter correct email address').required('Email is required')
});
