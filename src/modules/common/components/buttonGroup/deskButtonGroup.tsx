import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useDeleteTodo, useUpdateTodo } from '../../hooks/useTodosQuery';
import { IDataClientAlert } from '../../types/dataClientAlert.type';

import { SwitchComponent } from '../switch';
import { ButtonComponent } from '../button';
import { ButtonGroup } from './buttonGroup.styled';
import { COLORS } from '../../../theme';

export function DeskButtonGroupComponent({ data, client, alert }: IDataClientAlert) {
  const navigate = useNavigate();
  const { mutate: toggleTodo } = useUpdateTodo(client, alert);
  const { mutate: deleteTodo } = useDeleteTodo(client, alert);
  return (
    <ButtonGroup>
      <div>
        <ButtonComponent
          type="button"
          text="View"
          color={COLORS.primary}
          margin
          clickHandler={() => {
            navigate(`/${data.id}`);
          }}
        />
        <ButtonComponent
          type="button"
          text="Delete"
          color={COLORS.secondary}
          margin
          clickHandler={() => {
            deleteTodo(data.id);
          }}
        />
      </div>
      <SwitchComponent
        checked={data.completed}
        clickHandler={() => {
          toggleTodo({ ...data, completed: !data.completed });
        }}
      />
    </ButtonGroup>
  );
}
