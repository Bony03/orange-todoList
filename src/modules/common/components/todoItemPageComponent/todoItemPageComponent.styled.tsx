import styled from 'styled-components';
import { SPACES } from '../../../theme';

export const TodoItemPageStyled = styled.div`
  position: relative;
  top: 50vh;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${SPACES.m};
  max-width: 100vw;
  & h4 {
    margin-bottom: ${SPACES.s};
    word-wrap: break-word;
  }
  & p {
    margin-bottom: ${SPACES.m};
    text-align: justify;
    min-height: 80px;
    word-break: break-word;
  }
`;
export const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ButtonWrapper = styled.div`
  width: 200px;
  & button {
    width: 100%;
  }
`;
