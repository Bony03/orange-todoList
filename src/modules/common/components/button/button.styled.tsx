/* eslint-disable no-confusing-arrow */
import styled, { keyframes } from 'styled-components';
import { COLORS, SPACES } from '../../../theme';

type IButton = {
  type: 'button' | 'submit' | 'reset' | undefined;
  outline?: boolean;
  color?: string;
  margin?: boolean;
  onClick?: () => void;
};

const rotatingBg = keyframes`
0% {
  background-position:left center;
}

100% {
  background-position: right center;
}
`;

export const Button = styled.button`
  background: ${(props: IButton) =>
    props.color
      ? props.color
      : `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary} 80%)`};
  background-size: 200%;
  animation: ${rotatingBg} 2.5s linear infinite alternate;
  border: none;
  color: transparent;
  padding: 2px ${SPACES.l};
  position: relative;
  z-index: 1;
  cursor: pointer;
  margin: ${(props: IButton) => (props.margin ? `0 ${SPACES.s} 0 0` : '0')};
  &:before {
    content: '';
    display: ;
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    background-color: ${(props: IButton) => (props.color ? 'transparent' : COLORS.white)};
    z-index: 1;
    pointer-events: none;
  }
  & span {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: ${(props: IButton) => (props.outline ? 'transparent' : COLORS.white)};
    background: ${(props: IButton) =>
      props.color
        ? 'transparent'
        : `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary} 80%)`};
    background-size: 200%;
    background-clip: text;
    -webkit-background-clip: text;
    animation: ${rotatingBg} 2.5s linear infinite alternate;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.5;
    z-index: 2;
    pointer-events: none;
  }
  &:active {
    transform: scale(0.98);
  }
`;
