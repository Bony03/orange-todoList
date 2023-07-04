import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Please enter correct email address').required('Email is required'),
  password: Yup.string()
    .min(10, 'Password is too short - should be 10 chars minimum')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .matches(/[0-9]/, 'Password should contain at least one number')
    .required('Password is required')
});
