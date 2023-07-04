import styled from 'styled-components';
import { COLORS } from '../../../theme';

export const AlertStyles = styled.div`
  & .MuiAlert-root.MuiAlert-standardSuccess {
    box-shadow: 5px 10px 30px ${COLORS.black}2a;
    color: ${COLORS.black};
    background-color: ${COLORS.white};
    & .MuiAlert-icon {
      color: ${COLORS.green};
    }
  }
  & .MuiAlert-root.MuiAlert-standardError {
    box-shadow: 5px 10px 30px ${COLORS.black}2a;
    color: ${COLORS.black};
    background-color: ${COLORS.white};
    & .MuiAlert-icon {
      color: ${COLORS.red};
    }
  }
`;
