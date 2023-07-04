import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  oldPassword: Yup.string()
    .min(10, 'Password is too short - should be 10 chars minimum')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .matches(/[0-9]/, 'Password should contain at least one number')
    .required('Password is required'),
  newPassword: Yup.string()
    .min(10, 'Password is too short - should be 10 chars minimum')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    .matches(/[0-9]/, 'Password should contain at least one number')
    .required('Password is required'),
  confirmPassword: Yup.string().oneOf([Yup.ref('newPassword')], "Password's does not match")
});
