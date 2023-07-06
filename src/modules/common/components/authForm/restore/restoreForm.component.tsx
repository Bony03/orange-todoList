import React, { useState } from "react";
import { Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik } from "formik";

import { ROUTER_KEYS, STORAGE_KEYS } from "../../../consts/app-keys.const";
import { useRestorePass } from "../../../hooks/useUsersQuery";
import { useAlert } from "../../../hooks/useAlert";
import { ResetSchema } from "./schema";
import { initialValues, initialVisibilityState } from "./initialValue";

import {
  AuthForm,
  AuthContainer,
  ButtonGroup,
  BackLink,
  FloatInput,
} from "../form.styled";
import { ButtonComponent } from "../../button";
import eye from "../../../../../assets/image/eye.png";
import closedEye from "../../../../../assets/image/closedEye.png";
import { COLORS } from "../../../../theme";
import { AlertComponent } from "../../alert";

export const RestoreFormComponent = () => {
  const location = useLocation();
  localStorage.setItem(
    STORAGE_KEYS.TOKEN,
    `Bearer ${location.pathname.split("/")[3]}`
  );
  const [visible, setVisible] = useState(initialVisibilityState);
  const alert = useAlert();
  const { mutate: restore } = useRestorePass(alert);
  const navigate = useNavigate();
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
          validationSchema={ResetSchema}
          onSubmit={(values, { setValues }) => {
            restore({ password: values.confirmPassword });
            setValues(initialValues);
          }}
        >
          {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
            <form onSubmit={handleSubmit}>
              <FloatInput value={values.password}>
                <input
                  type={visible.newPassword ? "text" : "password"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  name="password"
                  id="password"
                />
                <label htmlFor="password">New password</label>
                <button
                  type="button"
                  onClick={() => {
                    setVisible({
                      ...visible,
                      newPassword: !visible.newPassword,
                    });
                  }}
                >
                  {visible.newPassword ? (
                    <img src={closedEye} alt="Closed eye" />
                  ) : (
                    <img src={eye} alt="Eye" />
                  )}
                </button>
                {errors.password && <div>{errors.password}</div>}
              </FloatInput>
              <FloatInput value={values.confirmPassword}>
                <input
                  type={visible.confirmPassword ? "text" : "password"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  name="confirmPassword"
                  id="confirmPassword"
                />
                <label htmlFor="confirmPassword">Confirm password</label>
                <button
                  type="button"
                  onClick={() => {
                    setVisible({
                      ...visible,
                      confirmPassword: !visible.confirmPassword,
                    });
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
                <ButtonComponent
                  type="submit"
                  text="Submit"
                  color={COLORS.primary}
                />
              </ButtonGroup>
            </form>
          )}
        </Formik>
      </AuthForm>
    </AuthContainer>
  );
};
