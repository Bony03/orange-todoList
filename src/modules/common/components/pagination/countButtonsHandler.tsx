import React from 'react';

export const countButtonsHandler = (
  count: number,
  setPage: React.Dispatch<React.SetStateAction<number>>,
  setValue: React.Dispatch<React.SetStateAction<number>>
) => {
  const bottonsCount = Math.ceil(count / 10);
  const buttonsArray = [];
  for (let i = 0; i < bottonsCount; i += 1) {
    buttonsArray.push(
      <button
        type="button"
        onClick={() => {
          setValue(i);
          setPage(i + 1);
        }}
        key={i}
      >
        {i + 1}
      </button>
    );
  }
  return buttonsArray;
};
