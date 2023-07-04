import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomePageContainer from '../home';
import TodoPageContainer from '../todo';
import { NotFoundPageContainer } from '../notfound';
import { ROUTER_KEYS } from '../common/consts/app-keys.const';
import { RequireAuth } from '../common/hoc/privateRoute';
import { AuthorizationPageContainer } from '../authorization';
import {
  AuthFormComponent,
  LoginFormComponent,
  RegisterFormComponent,
  RequestFormComponent,
  RestoreFormComponent,
  ActivateComponent
} from '../common/components/authForm';
import { ProfilePageContainer } from '../profile';

export const MainRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <RequireAuth>
          <HomePageContainer />
        </RequireAuth>
      ),
      errorElement: <NotFoundPageContainer />
    },
    {
      path: ROUTER_KEYS.TODO,
      element: <TodoPageContainer />
    },
    {
      path: ROUTER_KEYS.PROFILE,
      element: (
        <RequireAuth>
          <ProfilePageContainer />
        </RequireAuth>
      )
    },
    {
      path: ROUTER_KEYS.AUTHORIZATION,
      element: <AuthorizationPageContainer />,
      children: [
        {
          path: '/authorization/',
          element: <AuthFormComponent />
        },
        {
          path: ROUTER_KEYS.LOGIN,
          element: <LoginFormComponent />
        },
        {
          path: ROUTER_KEYS.REGISTER,
          element: <RegisterFormComponent />
        },
        {
          path: ROUTER_KEYS.ACTIVATE,
          element: <ActivateComponent />
        },
        {
          path: ROUTER_KEYS.REQUEST_RESTORE_PASS,
          element: <RequestFormComponent />
        },
        {
          path: ROUTER_KEYS.RESTORE_PASS,
          element: <RestoreFormComponent />
        }
      ]
    }
  ],
  { basename: ROUTER_KEYS.ROOT }
);
