import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Slide, SlideProps, Alert } from '@mui/material';
import { AlertStyles } from './alert.styled';

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="down" />;
}
interface IProps {
  open: boolean;
  closeHandler: () => void;
  message: string;
  success: boolean;
}

export const AlertComponent = ({ open, closeHandler, message, success }: IProps) => (
  <AlertStyles>
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      onClose={closeHandler}
      autoHideDuration={6000}
      TransitionComponent={SlideTransition}
    >
      <Alert onClose={closeHandler} severity={success ? 'success' : 'error'}>
        {message}
      </Alert>
    </Snackbar>
  </AlertStyles>
);
