import styled from 'styled-components';
import { COLORS, SPACES } from '../../../theme';

type IProps = {
  value: string;
};

export const AddTodoStyled = styled.div`
  max-width: 500px;
  & h4 {
    color: ${COLORS.primary};
    text-align: center;
  }
  & form {
    width: 100%;
    display: flex;
    flex-direction: column;
    & div:nth-child(4) {
      margin-bottom: ${SPACES.m};
    }
  }
  & button {
    height: 45px;
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
`;

export const CheckBoxInput = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  & label {
    color: ${COLORS.black};
  }
  & span {
    display: block;
    position: absolute;
    top: 5.5px;
    right: 5px;
    width: 41px;
    height: 24px;
    background-color: ${COLORS.grey};
    box-shadow: inset 2px 0px 5px ${`${COLORS.black}4d`};
    border-radius: 80px;
    z-index: 2;
    pointer-events: none;
    &::before {
      content: '';
      position: absolute;
      top: 2px;
      right: calc(100% - 22px);
      width: 20px;
      height: 20px;
      background-color: ${COLORS.white};
      border-radius: 50%;
      z-index: 3;
      pointer-events: none;
      transition: all 0.4s ease;
    }
  }
  & input {
    display: block;
    padding: 0;
    width: 40px;
    height: 30px;
    opacity: 0;
    &:checked + span {
      background-color: ${COLORS.green};
      &::before {
        right: 2px;
      }
    }
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
  }
`;
