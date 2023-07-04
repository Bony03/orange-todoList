import styled from 'styled-components';
import { COLORS } from '../../../theme';

export const SwitchStyles = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  & .MuiSwitch-root {
    width: 65px;
    height: 48px;
  }
  & .MuiButtonBase-root {
    top: 50%;
    left: 5px;
    transform: translate(0, -50%);
    &.Mui-checked {
      color: ${COLORS.white};
      -webkit-transform: translate(17px, -50%);
      -moz-transform: translate(17px, -50%);
      -ms-transform: translate(17px, -50%);
      transform: translate(17px, -50%);
      & + .MuiSwitch-track {
        background-color: ${COLORS.green};
        opacity: 1;
      }
    }
  }
  & .MuiSwitch-track {
    box-shadow: inset 2px 0px 5px ${COLORS.black}4d;
    background-color: ${COLORS.grey};
    opacity: 1;
    border-radius: 80px;
  }
`;
