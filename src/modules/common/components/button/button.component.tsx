import React from 'react';
import Typography from '@mui/material/Typography';
import { Button } from './button.styled';

type IButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined;
  text: string;
  outline?: boolean;
  color?: string;
  margin?: boolean;
  clickHandler?: () => void;
};

export const ButtonComponent = ({
  type,
  text,
  outline,
  color,
  margin,
  clickHandler
}: IButtonProps) => (
  <Button type={type} outline={outline} color={color} margin={margin} onClick={clickHandler}>
    <Typography variant="button">{text}</Typography>
  </Button>
);
