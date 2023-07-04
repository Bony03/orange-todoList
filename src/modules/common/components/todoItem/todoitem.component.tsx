import React from 'react';
import Typography from '@mui/material/Typography';
import { TodoItem } from './todoitem.styled';
import { ButtonGroupComponent } from '../buttonGroup';
import { IMobItemProps } from '../../types/component.type';

export const TodoItemComponent = ({ data, client, alert, setReplaceState }: IMobItemProps) => (
  <TodoItem>
    <Typography variant="h4" textTransform="capitalize">
      {data.title}
    </Typography>
    <Typography variant="body1" textTransform="capitalize">
      {data.discription}
    </Typography>
    <ButtonGroupComponent
      data={data}
      client={client}
      alert={alert}
      setReplaceState={setReplaceState}
    />
  </TodoItem>
);
