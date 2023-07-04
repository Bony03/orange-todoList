import React from 'react';
import { useInView } from 'react-intersection-observer';
import Typography from '@mui/material/Typography';
import { TodoItem } from './mobTodoitem.styled';
import { IDataClientAlert } from '../../types/dataClientAlert.type';
import { ButtonGroupComponent } from '../buttonGroup';

interface IProps extends IDataClientAlert {
  setReplaceState: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}

export const MobTodoItemComponent = ({
  data,
  client,
  alert,
  index,
  setPage,
  page,
  setReplaceState
}: IProps) => {
  const { ref, inView } = useInView();
  if (index === page * 10 - 1 && inView) {
    setPage((page += 1));
  }
  return (
    <TodoItem ref={ref}>
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
};
