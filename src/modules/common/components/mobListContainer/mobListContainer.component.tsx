import React from 'react';
import { motion } from 'framer-motion';

import { ITodo } from '../../types/todo.type';

import { Container } from '../container/container.component';
import { TodoErrorComponent } from '../todoError';
import { TodoSkeletonComponent } from '../todoSkeleton';
import { AlertComponent } from '../alert';
import { MobList } from './mobListContainer.styled';
import { COLORS } from '../../../theme';
import { IMobProps } from '../../types/component.type';
import { MobTodoItemComponent } from '../mobTodoItem';

export const MobListContainer = ({
  setReplaceState,
  openModal,
  data,
  isLoading,
  isError,
  client,
  alert,
  setPage,
  page
}: IMobProps) => {
  if (isLoading) {
    return <TodoSkeletonComponent />;
  }

  if (isError) {
    return <TodoErrorComponent alert={alert} />;
  }

  return (
    <Container>
      <AlertComponent
        open={alert.open}
        closeHandler={alert.closeHandler}
        message={alert.message.message}
        success={alert.message.success}
      />
      <MobList modal={openModal}>
        {data.map((item: ITodo, index: number) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: 1,
              x: 0,
              backdropFilter: 'blur(10px)',
              backgroundColor: `${COLORS.white}8c`
            }}
            transition={{ duration: 1, delay: index * 0.05 }}
            key={item._id}
          >
            <MobTodoItemComponent
              data={item}
              client={client}
              alert={alert}
              index={index}
              setPage={setPage}
              page={page}
              setReplaceState={setReplaceState}
            />
          </motion.div>
        ))}
      </MobList>
    </Container>
  );
};
