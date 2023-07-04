import styled from 'styled-components';
import { COLORS, SPACES } from '../../../theme';

export const TodoItem = styled.div`
  padding: ${SPACES.s};
  width: calc(100vw - 32px);
  & h4 {
    margin-bottom: ${SPACES.s};
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  & p {
    margin-bottom: ${SPACES.m};
    text-align: justify;
    overflow: hidden;
    display: -webkit-box;
    line-clamp: 4;
    box-orient: vertical;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    word-break: break-word;
  }
  @media (min-width: 425.02px) and (max-width: 768px) {
    padding: ${SPACES.m};
    width: 70%;
    margin: 0 auto;
    height: 100%;
    backdrop-filter: blur(10px);
    background-color: ${COLORS.white}8c;
    height: 100%;
    display: flex;
    flex-direction: column;
    & h4 {
      flex: 1 1 auto;
    }
    & p {
      flex: 1 3 auto;
      height: 100%;
    }
  }
`;
