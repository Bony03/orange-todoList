import styled from 'styled-components';
import { COLORS, SPACES } from '../../../theme';

export const TodoError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.lightGrey};
  padding: 0 ${SPACES.s};
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  margin-top: 52px;
  min-height: calc(100vh - 52px);
  height: calc(100% - 52px);
  z-index: 4;
`;
