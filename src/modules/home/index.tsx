import React, { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { useAlert } from '../common/hooks/useAlert';
import { useGetTodos } from '../common/hooks/useTodosQuery';

import { HeaderComponent } from '../common/components/header';
import { MainComponent } from '../common/components/main/main.component';
import { Portal } from '../common/components/portal';
import { AddTodoComponent } from '../common/components/addtodo';
import { ButtonContainerComponent } from '../common/components/buttonsContainer';

export default function HomePageContainer() {
  const [page, setPage] = useState(1);
  const [replaceState, setReplaceState] = useState(false);
  const [activeFilter, setActiveFilter] = useState({
    all: true,
    private: false,
    public: false,
    completed: false
  });
  const [openModal, setOpenModal] = useState(false);
  const alert = useAlert();
  const client = useQueryClient();
  const query = {
    ...activeFilter,
    page,
    perPage: 10
  };
  const { data, isLoading, isSuccess, isError } = useGetTodos(query, alert);
  return (
    <>
      <HeaderComponent />
      <ButtonContainerComponent
        setOpenModal={setOpenModal}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        setReplaceState={setReplaceState}
        setPage={setPage}
      />
      <MainComponent
        openModal={openModal}
        setOpenModal={setOpenModal}
        data={data?.todos || []}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        client={client}
        alert={alert}
        setPage={setPage}
        page={page}
        count={data?.count}
        replaceState={replaceState}
        setReplaceState={setReplaceState}
      />

      {openModal && (
        <React.Fragment>
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
        </React.Fragment>
      )}
    </>
  );
}
