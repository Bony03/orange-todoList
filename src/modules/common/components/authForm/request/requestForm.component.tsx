import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";

import { ROUTER_KEYS } from "../../../consts/app-keys.const";
import { useRequestPassLink } from "../../../hooks/useUsersQuery";
import { useAlert } from "../../../hooks/useAlert";
import { ResetSchema } from "./schema";
import { initialValues } from "./initialValue";

import {
  AuthForm,
  AuthContainer,
  ButtonGroup,
  BackLink,
  FloatInput,
} from "../form.styled";
import { ButtonComponent } from "../../button";
import { COLORS } from "../../../../theme";
import { AlertComponent } from "../../alert";

export const RequestFormComponent = () => {
  const alert = useAlert();
  const { mutate: request } = useRequestPassLink(alert);
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
            request(values);
            setValues(initialValues);
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
