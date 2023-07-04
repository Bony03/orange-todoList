import styled from 'styled-components';
import { COLORS, SPACES } from '../../../theme';

export const TodoListSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media (min-width: 425.02px) and (max-width: 768px) {
    flex-direction: row;
    position: relative;
    width: 70%;
  }
`;
export const TodoItemSkeleton = styled.div`
  margin: ${SPACES.l} 0;
  padding: ${SPACES.s};
  background-color: ${COLORS.white}8c;
  backdrop-filter: blur(10px);
  & span {
    &:nth-child(1) {
      margin-bottom: ${SPACES.s};
    }
    &:nth-child(2) {
      margin-bottom: ${SPACES.m};
    }
    &:nth-child(3) {
      display: inline-block;
      margin-right: ${SPACES.s};
    }
    &:nth-child(4) {
      display: inline-block;
    }
  }
  @media (min-width: 425.02px) and (max-width: 768px) {
    width: 100%;
    position: absolute;
    top: calc(50vh - 60px);
    left: 50vw;
    transform: translate(-50%, -50%);
    &:nth-child(1) {
      transform: translate(-120%, -50%) scale(0.8);
    }
    &:nth-child(2) {
      transform: translate(20%, -50%) scale(0.8);
    }
    &:nth-child(3) {
      display: none;
    }
  }
`;
