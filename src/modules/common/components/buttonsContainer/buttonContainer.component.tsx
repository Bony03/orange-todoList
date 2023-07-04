import React from 'react';
import { COLORS } from '../../../theme';
import { ButtonComponent } from '../button';
import { Container } from '../container/container.component';
import { ButtonContainer, FiltersContainer } from './buttonContainer.styled';

type IButtonsContainerProps = {
  activeFilter: {
    all: boolean;
    private: boolean;
    public: boolean;
    completed: boolean;
  };
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveFilter: React.Dispatch<
    React.SetStateAction<{
      all: boolean;
      private: boolean;
      public: boolean;
      completed: boolean;
    }>
  >;
  setReplaceState: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const ButtonContainerComponent = ({
  setOpenModal,
  setActiveFilter,
  setReplaceState,
  activeFilter,
  setPage
}: IButtonsContainerProps) => (
  <Container>
    <ButtonContainer>
      <ButtonComponent
        type="button"
        text="Add todo"
        color={COLORS.primary}
        margin
        clickHandler={() => {
          setReplaceState(true);
          setOpenModal(true);
        }}
      />
      <FiltersContainer>
        <button
          type="button"
          className={activeFilter.all ? 'active' : ''}
          onClick={() => {
            setPage(1);
            setReplaceState(true);
            setActiveFilter({
              all: true,
              private: false,
              public: false,
              completed: false
            });
          }}
        >
          All
        </button>
        <button
          type="button"
          className={activeFilter.private ? 'active' : ''}
          onClick={() => {
            setPage(1);
            setReplaceState(true);
            setActiveFilter({
              ...activeFilter,
              all: false,
              private: true,
              public: false
            });
          }}
        >
          Private
        </button>
        <button
          type="button"
          className={activeFilter.public ? 'active' : ''}
          onClick={() => {
            setPage(1);
            setReplaceState(true);
            setActiveFilter({
              ...activeFilter,
              all: false,
              private: false,
              public: true
            });
          }}
        >
          Public
        </button>
        <button
          type="button"
          className={activeFilter.completed ? 'active' : ''}
          onClick={() => {
            setPage(1);
            setReplaceState(true);
            setActiveFilter({ ...activeFilter, completed: true });
          }}
        >
          Completed
        </button>
      </FiltersContainer>
    </ButtonContainer>
  </Container>
);
