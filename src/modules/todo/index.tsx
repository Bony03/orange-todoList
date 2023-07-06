import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { HeaderComponent } from '../common/components/header';
import { useGetTodo } from '../common/hooks/useTodosQuery';
import { AlertComponent } from '../common/components/alert';
import { useAlert } from '../common/hooks/useAlert';
import { TodoErrorComponent } from '../common/components/todoError';
import { Container } from '../common/components/container/container.component';
import { TodoItemPageComponent } from '../common/components/todoItemPageComponent';

export default function TodoPageContainer() {
  const client = useQueryClient();
  const location = useLocation();
  const alert = useAlert();
  const objectId = /^[0-9a-fA-F]{24}$/i;
  const id = location.pathname.split('/')[1].match(objectId)
    ? location.pathname.split('/')[1]
    : false;
  if (!id) {
    return (
      <>
        <HeaderComponent />
        <TodoErrorComponent alert={alert} />
      </>
    );
  }
  const { data, isSuccess, isError } = useGetTodo(location.pathname.split('/')[1], alert);

  if (isError) {
    return (
      <>
        <HeaderComponent />
        <TodoErrorComponent alert={alert} />
      </>
    );
  }
  if (isSuccess) {
    return (
      <>
        <HeaderComponent />
        <AlertComponent
          open={alert.open}
          success={alert.message.success}
          message={alert.message.message}
          closeHandler={() => alert.closeHandler()}
        />
        <Container>
          <TodoItemPageComponent data={data} alert={alert} client={client} />
        </Container>
      </>
    );
  }
  return null;
}
