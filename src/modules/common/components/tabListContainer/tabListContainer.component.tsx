import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import { IMobProps } from '../../types/component.type';
import { ITodo } from '../../types/todo.type';

import { Container } from '../container/container.component';
import { TodoErrorComponent } from '../todoError';
import { TodoSkeletonComponent } from '../todoSkeleton';
import { AlertComponent } from '../alert';
import { TabList } from './tabListContainer.styled';
import { TodoItemComponent } from '../todoItem';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const TabListContainer = ({
  data,
  isLoading,
  isError,
  client,
  alert,
  setPage,
  page,
  setReplaceState
}: IMobProps) => {
  if (isLoading) {
    return <TodoSkeletonComponent height={96} />;
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
      <TabList>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          createElements
          initialSlide={1}
          autoplay={{ delay: 5000 }}
          onActiveIndexChange={(swiper) => {
            if (swiper.realIndex === page * 10 - 2) {
              setPage((page += 1));
            }
          }}
        >
          {data.map((item: ITodo) => (
            <SwiperSlide key={item._id}>
              <TodoItemComponent
                data={item}
                alert={alert}
                client={client}
                setReplaceState={setReplaceState}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </TabList>
    </Container>
  );
};
