import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { AuthForm, AuthContainer, AuthLink } from '../form.styled';
import { ButtonComponent } from '../../button';
import { ROUTER_KEYS } from '../../../consts/app-keys.const';

export const AuthFormComponent = () => {
  const navigate = useNavigate();

  return (
    <AuthContainer>
      <AuthForm>
        <Typography variant="h4">
          Todo<span>List</span>
        </Typography>
        <ButtonComponent
          type="button"
          text="Login"
          outline
          clickHandler={() => {
            navigate(ROUTER_KEYS.LOGIN);
          }}
        />
        <ButtonComponent
          type="button"
          text="Register"
          outline
          clickHandler={() => {
            navigate(ROUTER_KEYS.REGISTER);
          }}
        />
        <AuthLink
          onClick={() => {
            navigate(ROUTER_KEYS.REQUEST_RESTORE_PASS);
          }}
        >
          Restore Password
        </AuthLink>
      </AuthForm>
    </AuthContainer>
  );
};
