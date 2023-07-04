import React from 'react';
import { motion } from 'framer-motion';
import { Skeleton } from '@mui/material';
import { TodoListSkeleton, TodoItemSkeleton } from './todoSkeleton.styled';

type IProps = {
  height?: number;
};

export const TodoSkeletonComponent = ({ height }: IProps) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <TodoListSkeleton>
      <TodoItemSkeleton>
        <Skeleton variant="rounded" height={40} />
        <Skeleton variant="rounded" height={height || 24} />
        <Skeleton variant="rounded" height={37} width={80} />
        <Skeleton variant="rounded" height={37} width={100} />
      </TodoItemSkeleton>
      <TodoItemSkeleton>
        <Skeleton variant="rounded" height={40} />
        <Skeleton variant="rounded" height={height || 24} />
        <Skeleton variant="rounded" height={37} width={80} />
        <Skeleton variant="rounded" height={37} width={100} />
      </TodoItemSkeleton>
      <TodoItemSkeleton>
        <Skeleton variant="rounded" height={40} />
        <Skeleton variant="rounded" height={height || 24} />
        <Skeleton variant="rounded" height={37} width={80} />
        <Skeleton variant="rounded" height={37} width={100} />
      </TodoItemSkeleton>
      <TodoItemSkeleton>
        <Skeleton variant="rounded" height={40} />
        <Skeleton variant="rounded" height={height || 24} />
        <Skeleton variant="rounded" height={37} width={80} />
        <Skeleton variant="rounded" height={37} width={100} />
      </TodoItemSkeleton>
    </TodoListSkeleton>
  </motion.div>
);
