import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useDeleteTodo, useUpdateTodo } from '../../hooks/useTodosQuery';
import { IMobItemProps } from '../../types/component.type';

import { SwitchComponent } from '../switch';
import { ButtonComponent } from '../button';
import { ButtonGroup } from './buttonGroup.styled';
import { COLORS } from '../../../theme';

export function ButtonGroupComponent({ data, client, alert, setReplaceState }: IMobItemProps) {
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
            navigate(`/${data._id}`);
          }}
        />
        <ButtonComponent
          type="button"
          text="Delete"
          color={COLORS.secondary}
          margin
          clickHandler={() => {
            setReplaceState(true);
            deleteTodo(data._id);
          }}
        />
      </div>
      <SwitchComponent
        checked={data.completed}
        clickHandler={() => {
          setReplaceState(true);
          toggleTodo({ ...data, completed: !data.completed });
        }}
      />
    </ButtonGroup>
  );
}
