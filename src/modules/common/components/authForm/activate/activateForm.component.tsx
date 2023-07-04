import React from 'react';
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthForm, AuthContainer, Activation, Loading } from '../form.styled';
import { ButtonComponent } from '../../button';
import { ROUTER_KEYS } from '../../../consts/app-keys.const';
import { COLORS } from '../../../../theme';
import success from '../../../../../assets/image/success.svg';
import fail from '../../../../../assets/image/fail.svg';
import { useActivateUser } from '../../../hooks/useUsersQuery';

export const ActivateComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.pathname.split('/')[3];
  const { data, isSuccess, isError, isLoading } = useActivateUser(id);
  return (
    <AuthContainer>
      <AuthForm>
        <Typography variant="h4">
          Todo<span>List</span>
        </Typography>
        {isLoading && (
          <Loading>
            <div className="rect rect1" />
            <div className="rect rect2" />
            <div className="rect rect3" />
            <div className="rect rect4" />
            <div className="rect rect5" />
          </Loading>
        )}
        {isError && (
          <>
            <Activation success={false}>
              <img src={fail} alt="fail" />
              <Typography variant="h5">Activation failure</Typography>
            </Activation>
            <ButtonComponent
              type="button"
              text="Go Home"
              color={COLORS.red}
              clickHandler={() => {
                navigate(ROUTER_KEYS.ROOT);
              }}
            />
          </>
        )}
        {isSuccess && (
          <>
            <Activation success>
              <img src={success} alt="success" />
              <Typography variant="h5">{data.message}</Typography>
            </Activation>
            <ButtonComponent
              type="button"
              text="Go Home"
              color={COLORS.green}
              clickHandler={() => {
                navigate(ROUTER_KEYS.ROOT);
              }}
            />
          </>
        )}
      </AuthForm>
    </AuthContainer>
  );
};
