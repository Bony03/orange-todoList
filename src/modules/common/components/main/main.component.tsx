import React, { useEffect, useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { BubleComponent } from '../buble';
import { MobListContainer } from '../mobListContainer';
import { Main } from './main.styled';
import { TabListContainer } from '../tabListContainer';
import { DeskListContainer } from '../deskListContainer';
import { IMainProps } from '../../types/component.type';
import { ITodo } from '../../types/todo.type';

export const MainComponent = ({
  data,
  isLoading,
  isSuccess,
  isError,
  client,
  alert,
  openModal,
  page,
  count,
  setOpenModal,
  setPage,
  replaceState,
  setReplaceState
}: IMainProps) => {
  const mobile = useMediaQuery('(max-width:425.02px)');
  const tablet = useMediaQuery('(min-width:425.02px) and (max-width:768px)');
  const desktop = useMediaQuery('(min-width:768.02px)');
  let filteredData: ITodo[] = [];
  if (data) {
    filteredData = data.sort((a, b) => a.created - b.created);
  }
  const [mobList, setMobList] = useState(filteredData);

  useEffect(() => {
    const isEqual = JSON.stringify(filteredData) === JSON.stringify(mobList);
    if (replaceState && isEqual) {
      setMobList(filteredData);
      setReplaceState(false);
      return;
    }
    if (replaceState && !isEqual) {
      setMobList(filteredData);
      setReplaceState(false);
      return;
    }
    if (!replaceState && !isEqual) {
      const isEqualExistArray =
        JSON.stringify(filteredData) ===
        JSON.stringify(
          mobList
            .map((item) => filteredData.find((itemData) => itemData._id === item._id))
            .filter((item) => item !== undefined)
        );
      if (isEqualExistArray) {
        return;
      }
      setMobList([...mobList, ...filteredData]);
    }
  }, [data]);
  return (
    <Main>
      <BubleComponent />
      {mobile && (
        <MobListContainer
          setReplaceState={setReplaceState}
          openModal={openModal}
          data={mobList}
          isLoading={isLoading}
          isError={isError}
          client={client}
          alert={alert}
          setPage={setPage}
          page={page}
        />
      )}
      {tablet && (
        <TabListContainer
          setReplaceState={setReplaceState}
          openModal={openModal}
          data={mobList}
          isLoading={isLoading}
          isError={isError}
          client={client}
          alert={alert}
          setPage={setPage}
          page={page}
        />
      )}
      {desktop && (
        <DeskListContainer
          openModal={openModal}
          setOpenModal={setOpenModal}
          data={filteredData}
          isLoading={isLoading}
          isSuccess={isSuccess}
          isError={isError}
          client={client}
          alert={alert}
          setPage={setPage}
          page={page}
          count={count}
        />
      )}
    </Main>
  );
};
