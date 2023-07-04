import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Error404 } from './404.styled';
import error404 from '../../../../assets/image/error404.svg';

export const Eror404Component = () => (
  <Error404>
    <img src={error404} alt="404" />
    <div>
      <Typography variant="h1"> Request Error</Typography>
      <Typography variant="subtitle1">
        Bad request. Try to reload page and try again or <Link to="/">go home</Link>.
      </Typography>
    </div>
  </Error404>
);
