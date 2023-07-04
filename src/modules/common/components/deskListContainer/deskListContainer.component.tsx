import React from 'react';
import { Container } from '../container/container.component';
import { TodoErrorComponent } from '../todoError';
import { TodoSkeletonComponent } from '../todoSkeleton';
import { AlertComponent } from '../alert';
import { DeskList } from './deskListContainer.styled';
import { TableComponent } from '../table/table.component';
import { Portal } from '../portal';
import { AddTodoComponent } from '../addtodo';
import { IDeskProps } from '../../types/component.type';
import { PaginationComponent } from '../pagination';

export const DeskListContainer = ({
  data,
  isLoading,
  isError,
  client,
  alert,
  openModal,
  count,
  setOpenModal,
  setPage
}: IDeskProps) => {
  if (isLoading) {
    return (
      <Container>
        <TodoSkeletonComponent />
      </Container>
    );
  }

  if (isError) {
    return <TodoErrorComponent alert={alert} />;
  }

  return (
    <>
      <AlertComponent
        open={alert.open}
        closeHandler={alert.closeHandler}
        message={alert.message.message}
        success={alert.message.success}
      />
      <DeskList>
        <Container>
          <PaginationComponent setPage={setPage} count={count} />

          <TableComponent data={data} client={client} alert={alert} />
        </Container>
      </DeskList>
      {openModal && (
        <Portal
          onClose={() => {
            setOpenModal(false);
          }}
        >
          <AddTodoComponent
            closeHandler={() => {
              setOpenModal(false);
            }}
            client={client}
            alert={alert}
          />
        </Portal>
      )}
    </>
  );
};
