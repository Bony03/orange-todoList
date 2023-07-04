/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MainRouter } from '../navigation';

import * as theme from '../theme';
import * as Styled from './app.styled';
import '../../style.css';
import { AuthContext } from '../common/context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      cacheTime: Infinity
    }
  }
});

const AppContainer = () => {
  const [isAuth, setAuth] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={{ isAuth, setAuth }}>
        <Styled.GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={MainRouter} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AuthContext.Provider>
    </ThemeProvider>
  );
};

export default AppContainer;
