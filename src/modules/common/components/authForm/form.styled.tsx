import styled, { keyframes } from 'styled-components';
import { COLORS, FONTS, SPACES } from '../../../theme';

type IProps = {
  value?: string;
  success?: boolean;
};

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

export const AuthContainer = styled.div`
  margin-top: 52px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100% - 52px);
  display: flex;
  justify-content: center;
  align-items: center;
  & form {
    width: 100%;
  }
`;
export const AuthForm = styled.div`
  width: 100%;
  max-width: 450px;
  padding: ${SPACES.m};
  background-color: ${`${COLORS.white}8c`};
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${SPACES.s};
  position: relative;
  & button {
    height: 30px;
    width: 150px;
  }
  & h4 {
    color: ${COLORS.primary};
    margin-bottom: calc(2 * ${SPACES.m});
    font-weight: ${FONTS.WEIGHTS.bold};
    & span {
      color: ${COLORS.secondary};
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: calc(2 * ${SPACES.m}) 0;
`;

export const AuthLink = styled.button`
  color: ${COLORS.blue};
  text-decoration: underline;
  margin: calc(2 * ${SPACES.m}) 0;
  font-size: ${FONTS.SIZES.m};
  background-color: transparent;
  border: none;
  &:active {
    text-decoration: none;
  }
`;

export const BackLink = styled.button`
  width: 70px !important;
  background-color: transparent;
  border: none;
  & svg {
    width: 90%;
    height: 100%;
    stroke-width: 1px;
    stroke: ${COLORS.black};
    filter: drop-shadow(6px 5px 2px ${COLORS.secondary}2a);
  }
`;

export const Success = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${`${COLORS.white}a8`};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: ${COLORS.green};
  & img {
    width: 10%;
    object-fit: cover;
    margin-bottom: ${SPACES.m};
  }
  & h5 {
    text-align: center;
    max-width: 80%;
  }
`;
export const Activation = styled.div`
  width: 100%;
  margin-bottom: ${SPACES.l};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & img {
    width: 20%;
    object-fit: cover;
    margin-bottom: ${SPACES.m};
  }
  & h5 {
    text-align: center;
    max-width: 80%;
    color: ${(props: IProps) => (props.success ? COLORS.green : COLORS.red)};
  }
  & + button {
    margin-bottom: ${SPACES.l};
  }
`;
export const Loading = styled.div`
  width: 100%;
  height: 250px;
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

export const FloatInput = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;
  color: ${COLORS.red};
  & label {
    position: absolute;
    top: ${(props: IProps) => (props.value ? '-2px' : '15px')};
    left: 20px;
    color: ${(props: IProps) => (props.value ? COLORS.secondary : COLORS.grey)};
    transition: all 0.3s ease;
    pointer-events: none;
    transform: ${(props: IProps) => (props.value ? 'translateX(-10%) scale(0.8)' : 'none')};
  }
  & input {
    min-width: 280px;
    width: 100%;
    height: 54px;
    outline: none;
    border: none;
    padding: 0 20px;
    color: ${COLORS.black};
    border: ${(props: IProps) => (props.value ? `2px solid ${COLORS.secondary}` : 'none')};
    &:focus {
      border: 2px solid ${COLORS.secondary};
    }
    &:focus + label {
      top: -2px;
      transform: translateX(-10%) scale(0.8);
      color: ${COLORS.secondary};
    }
  }
  & button {
    position: absolute;
    top: 12px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px !important;
    height: 30px;
    background-color: transparent;
    border: none;
    border-radius: 50%;
    padding: 7px;
    & img {
      width: 100%;
      object-fit: cover;
    }
    &:hover {
      background-color: ${COLORS.lightGrey}de;
    }
    &:active {
      background-color: ${COLORS.lightGrey}de;
    }
  }
`;
