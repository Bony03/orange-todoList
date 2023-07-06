import React, { ReactNode } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { ROUTER_KEYS } from '../../consts/app-keys.const';
import { useCheckToken } from '../../hooks/useUsersQuery';
import { LoadingComponent } from '../../components/loading';

type IProps = {
  children: JSX.Element;
};

export const RequireAuth = ({ children }: IProps) => {
  const location = useLocation();
  const { isSuccess, isError, isLoading } = useCheckToken();

  if (isLoading) {
    return <LoadingComponent />;
  }

  if (isSuccess) {
    return children;
  }
  if (isError) {
    return <Navigate to={ROUTER_KEYS.AUTHORIZATION} state={{ from: location.pathname }} />;
  }
  return null;
};
