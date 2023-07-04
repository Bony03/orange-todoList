/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import { ROUTER_KEYS } from '../../../consts/app-keys.const';
import { useRegister } from '../../../hooks/useUsersQuery';
import { useAlert } from '../../../hooks/useAlert';
import { initialValues } from './initialValue';
import { SignupSchema } from './schema';

import {
  AuthForm,
  AuthContainer,
  Success,
  ButtonGroup,
  BackLink,
  FloatInput
} from '../form.styled';
import { ButtonComponent } from '../../button';
import success from '../../../../../assets/image/success.svg';
import eye from '../../../../../assets/image/eye.png';
import closedEye from '../../../../../assets/image/closedEye.png';
import { COLORS } from '../../../../theme';
import { AlertComponent } from '../../alert';

export const RegisterFormComponent = () => {
  const alert = useAlert();
  const [visible, setVisible] = useState(false);
  const { mutate: register, isSuccess } = useRegister(alert);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AuthContainer>
      <AlertComponent
        open={alert.open}
        closeHandler={alert.closeHandler}
        message={alert.message.message}
        success={alert.message.success}
      />
      <AuthForm>
        <Typography variant="h4">
          Todo<span>List</span>
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={(values, { setValues }) => {
            register(values);
            setValues(initialValues);
            setTimeout(() => {
              navigate(location.state.from || ROUTER_KEYS.ROOT);
            }, 2000);
          }}
        >
          {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
            <form onSubmit={handleSubmit}>
              <FloatInput value={values.email}>
                <input
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  name="email"
                  id="email"
                />
                <label htmlFor="email">Email</label>
                {errors.email && <div>{errors.email}</div>}
              </FloatInput>
              <FloatInput value={values.name}>
                <input
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name"
                  id="name"
                />
                <label htmlFor="name">Name</label>
                {errors.name && <div>{errors.name}</div>}
              </FloatInput>
              <FloatInput value={values.password}>
                <input
                  type={visible ? 'text' : 'password'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                  id="password"
                />
                <label htmlFor="password">Password</label>
                <button
                  type="button"
                  onClick={() => {
                    setVisible(!visible);
                  }}
                >
                  {visible ? <img src={closedEye} alt="Closed eye" /> : <img src={eye} alt="Eye" />}
                </button>
                {errors.password && <div>{errors.password}</div>}
              </FloatInput>
              <ButtonGroup>
                <BackLink
                  type="button"
                  onClick={() => {
                    navigate(ROUTER_KEYS.AUTHORIZATION);
                  }}
                >
                  <svg
                    width="32"
                    height="8"
                    viewBox="0 0 32 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31 4H1M1 4L6 0.5M1 4L6 7.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </BackLink>
                <ButtonComponent type="submit" text="Register" color={COLORS.primary} />
              </ButtonGroup>
            </form>
          )}
        </Formik>

        {isSuccess && (
          <Success>
            <img src={success} alt="success" />
            <Typography variant="h5">Successfully registered!</Typography>
          </Success>
        )}
      </AuthForm>
    </AuthContainer>
  );
};
