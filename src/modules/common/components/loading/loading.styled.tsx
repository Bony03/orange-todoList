import styled, { keyframes } from 'styled-components';
import { COLORS, SPACES } from '../../../theme';

const loading = keyframes`
  0% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
  40% {
    transform: scaleY(0.4);
  }
  100% {
    transform: scaleY(0.4);
  }
`;

export const Loading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin-bottom: ${SPACES.l};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & .rect {
    display: inline-block;
    height: 60px;
    width: 7px;
    margin: 0 2px;
    animation: ${loading} 1.3s infinite ease-in-out;
    background-color: ${COLORS.primary};
  }
  & .rect2 {
    animation-delay: -1.2s;
  }
  & .rect3 {
    animation-delay: -1.1s;
  }
  & .rect4 {
    animation-delay: -1s;
  }
  & .rect5 {
    animation-delay: -0.9s;
  }
  & + button {
    margin-bottom: ${SPACES.l};
  }
`;
