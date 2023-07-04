import React from 'react';
import { Switch } from '@mui/material';
import { SwitchStyles } from './switch.styled';

type IProps = {
  checked: boolean | undefined;
  clickHandler: () => void;
};

export const SwitchComponent = ({ checked, clickHandler }: IProps) => (
  <SwitchStyles>
    <Switch
      checked={checked}
      onClick={() => {
        clickHandler();
      }}
    />
  </SwitchStyles>
);
