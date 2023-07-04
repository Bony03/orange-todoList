/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';

import { ROUTER_KEYS } from '../../consts/app-keys.const';
import { SignupSchema } from './schema';
import { initialValues, initialVisibilityState } from './initialValues';
import { useChangePass, useGetUserData } from '../../hooks/useUsersQuery';
import { useAlert } from '../../hooks/useAlert';

import { AlertComponent } from '../alert';
import { AuthContainer, BackLink, ButtonGroup, FloatInput } from '../authForm';
import { COLORS } from '../../../theme';
import { ButtonComponent } from '../button';
import { ProfileForm } from './profile.styled';
import closedEye from '../../../../assets/image/closedEye.png';
import eye from '../../../../assets/image/eye.png';

export const ProfileComponent = () => {
  const alert = useAlert();
  const [visible, setVisible] = useState(initialVisibilityState);
  const { mutate: changePass } = useChangePass(alert);
  const { data } = useGetUserData(alert);
  const client = useQueryClient();
  const navigate = useNavigate();
  return (
    <AuthContainer>
      <AlertComponent
        open={alert.open}
        closeHandler={alert.closeHandler}
        message={alert.message.message}
        success={alert.message.success}
      />
      <ProfileForm>
        <ButtonComponent
          type="button"
          text="LogOut"
          color={COLORS.transparent}
          clickHandler={() => {
            localStorage.clear();
            client.resetQueries([]);
            navigate(ROUTER_KEYS.ROOT);
          }}
        />
        {data && (
          <>
            <Typography variant="h4">
              Welcome <span>{data.data.name}</span>
            </Typography>
            <Typography variant="body1">
              email: <span>{data.data.email}</span>
            </Typography>
            <Typography variant="body1">
              activated: <span>{data.data.isActivated ? 'activated' : 'not activated'}</span>
            </Typography>
          </>
        )}
        <Typography variant="h6">Change Password</Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={SignupSchema}
          onSubmit={(values, { setValues }) => {
            changePass({ oldPassword: values.oldPassword, newPassword: values.confirmPassword });
            setValues(initialValues);
          }}
        >
          {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
            <form onSubmit={handleSubmit}>
              <FloatInput value={values.oldPassword}>
                <input
                  type={visible.oldPassword ? 'text' : 'password'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.oldPassword}
                  autoComplete="oldPassword"
                  name="oldPassword"
                  id="oldPassword"
                />
                <label htmlFor="oldPassword">Old password</label>
                <button
                  type="button"
                  onClick={() => {
                    setVisible({ ...visible, oldPassword: !visible.oldPassword });
                  }}
                >
                  {visible.oldPassword ? (
                    <img src={closedEye} alt="Closed eye" />
                  ) : (
                    <img src={eye} alt="Eye" />
                  )}
                </button>
                {errors.oldPassword && <div>{errors.oldPassword}</div>}
              </FloatInput>
              <FloatInput value={values.newPassword}>
                <input
                  type={visible.newPassword ? 'text' : 'password'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newPassword}
                  autoComplete="newPassword"
                  name="newPassword"
                  id="newPassword"
                />
                <label htmlFor="newPassword">New password</label>
                <button
                  type="button"
                  onClick={() => {
                    setVisible({ ...visible, newPassword: !visible.newPassword });
                  }}
                >
                  {visible.newPassword ? (
                    <img src={closedEye} alt="Closed eye" />
                  ) : (
                    <img src={eye} alt="Eye" />
                  )}
                </button>
                {errors.newPassword && <div>{errors.newPassword}</div>}
              </FloatInput>
              <FloatInput value={values.confirmPassword}>
                <input
                  type={visible.confirmPassword ? 'text' : 'password'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  autoComplete="confirmPassword"
                  name="confirmPassword"
                  id="confirmPassword"
                />
                <label htmlFor="confirmPassword">Confirm password</label>
                <button
                  type="button"
                  onClick={() => {
                    setVisible({ ...visible, confirmPassword: !visible.confirmPassword });
                  }}
                >
                  {visible.confirmPassword ? (
                    <img src={closedEye} alt="Closed eye" />
                  ) : (
                    <img src={eye} alt="Eye" />
                  )}
                </button>
                {errors.confirmPassword && <div>{errors.confirmPassword}</div>}
              </FloatInput>
              <ButtonGroup>
                <BackLink
                  type="button"
                  onClick={() => {
                    navigate(ROUTER_KEYS.ROOT);
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
                <ButtonComponent type="submit" text="Change" color={COLORS.primary} />
              </ButtonGroup>
            </form>
          )}
        </Formik>
      </ProfileForm>
    </AuthContainer>
  );
};
