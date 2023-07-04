/* eslint-disable max-len */
import React, { useState } from 'react';
import { PaginationStyled } from './pagination.styled';
import { countButtonsHandler } from './countButtonsHandler';

type IProps = {
  count: number | undefined;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const PaginationComponent = ({ setPage, count }: IProps) => {
  const [value, setValue] = useState(0);

  return (
    <PaginationStyled value={value}>
      {countButtonsHandler(count || 1, setPage, setValue)}
      <svg viewBox="0 0 100 100">
        <path d="m 7.1428558,49.999998 c -1e-7,-23.669348 19.1877962,-42.8571447 42.8571442,-42.8571446 23.669347,0 42.857144,19.1877966 42.857144,42.8571446" />
      </svg>
      <svg viewBox="0 0 100 100">
        <path d="m 7.1428558,49.999998 c -1e-7,23.669347 19.1877962,42.857144 42.8571442,42.857144 23.669347,0 42.857144,-19.187797 42.857144,-42.857144" />
      </svg>
    </PaginationStyled>
  );
};
