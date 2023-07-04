import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';

export const Brand = styled.div`
  font-size: ${FONTS.SIZES.l};
  color: ${COLORS.primary};
  font-weight: ${FONTS.WEIGHTS.bold};
  display: flex;
  align-items: center;
  & span {
    color: ${COLORS.secondary};
  }
  &:active {
    transform: scale(0.98);
  }
`;
