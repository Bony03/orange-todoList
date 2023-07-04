import styled from 'styled-components';
import { COLORS, SPACES } from '../../../theme';

export const PortalStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.black}8c;
  z-index: 1000;
`;
export const ModalContainer = styled.div`
  max-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${COLORS.lightGrey};
  padding: ${SPACES.l} ${SPACES.m} ${SPACES.m} ${SPACES.m};
  color: ${COLORS.white};
  position: relative;
  & > button {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background-color: transparent;
    padding: ${SPACES.s};
  }
`;
