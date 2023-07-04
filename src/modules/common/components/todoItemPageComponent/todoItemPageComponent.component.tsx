import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { useUpdateTodo } from '../../hooks/useTodosQuery';
import { IDataClientAlert } from '../../types/dataClientAlert.type';

import { TodoItemPageStyled, CheckBoxWrapper, ButtonWrapper } from './todoItemPageComponent.styled';
import { SwitchComponent } from '../switch';
import { ButtonComponent } from '../button';
import { COLORS } from '../../../theme';
import { ROUTER_KEYS } from '../../consts/app-keys.const';

export function TodoItemPageComponent({ data, client, alert }: IDataClientAlert) {
  const navigate = useNavigate();
  const { mutate: updateTodo } = useUpdateTodo(client, alert);
  return (
    <TodoItemPageStyled>
      <Typography variant="h4" textTransform="capitalize">
        {data.title}
      </Typography>
      <Typography variant="body1" textTransform="capitalize">
        {data.discription}
      </Typography>
      <CheckBoxWrapper>
        <Typography variant="h5" textTransform="capitalize">
          Completed
        </Typography>
        <SwitchComponent
          checked={data.completed}
          clickHandler={() => {
            updateTodo({ ...data, completed: !data.completed });
          }}
        />
      </CheckBoxWrapper>
      <CheckBoxWrapper>
        <Typography variant="h5" textTransform="capitalize">
          Private
        </Typography>
        <SwitchComponent
          checked={data.isPrivate}
          clickHandler={() => {
            updateTodo({ ...data, isPrivate: !data.isPrivate });
          }}
        />
      </CheckBoxWrapper>
      <ButtonWrapper>
        <ButtonComponent
          type="button"
          text="back"
          color={COLORS.secondary}
          clickHandler={() => {
            navigate(ROUTER_KEYS.ROOT);
          }}
        />
      </ButtonWrapper>
    </TodoItemPageStyled>
  );
}
