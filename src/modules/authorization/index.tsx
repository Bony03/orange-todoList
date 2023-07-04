import React from 'react';
import { Outlet } from 'react-router-dom';
import { HeaderComponent } from '../common/components/header';
import { BubleComponent } from '../common/components/buble';

export const AuthorizationPageContainer = () => (
  <>
    <HeaderComponent />
    <BubleComponent />
    <Outlet />
  </>
);
