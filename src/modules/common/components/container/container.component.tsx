import React from 'react';
import { Grid } from '@mui/material';
import { PropsChildren } from '../../types/children.type';

export const Container = ({ children }: PropsChildren) => (
  <Grid container columns={{ xs: 4, md: 12 }} justifyContent="center">
    <Grid item xs={8}>
      {children}
    </Grid>
  </Grid>
);
