import styled from 'styled-components';
import { COLORS, SPACES } from '../../../theme';

export const Header = styled.header`
  background-color: ${COLORS.white};
  color: ${COLORS.white};
  padding: ${SPACES.s} ${SPACES.l};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  & div {
    & div {
      display: flex;
      justify-content: space-between;
    }
  }
`;
