import styled from 'styled-components';
import { COLORS, SPACES } from '../../../theme';

export const ButtonContainer = styled.div`
  margin: 60px 0 0 0;
  padding: ${SPACES.m};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 599.98px) {
    flex-direction: column;
    align-items: start;
    & > button {
      margin-bottom: ${SPACES.m};
    }
  }
`;
export const FiltersContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  & button {
    margin: 0 ${SPACES.s} 0 0;
    background-color: ${COLORS.grey};
    border: none;
    padding: 2px ${SPACES.m};
    color: ${COLORS.white};
    &:active {
      transform: scale(0.9);
    }
  }
  & .active {
    background-color: ${COLORS.secondary};
  }
  @media (max-width: 599.98px) {
    justify-content: flex-start;
    & button {
      margin: 0 ${SPACES.s} ${SPACES.s} 0;
    }
  }
`;
