import styled from 'styled-components';
import { COLORS } from '../../../theme';

type IProps = {
  value: number;
};

export const PaginationStyled = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  margin: 16px 32px;
  & button {
    cursor: pointer;
    display: inline;
    margin-right: 29.5px;
    padding: 5px;
    user-select: none;
    -moz-user-select: none;
    background-color: transparent;
    border: none;
  }
  & svg {
    left: -14px;
    position: absolute;
    top: -8px;
    transition: transform 500ms;
    width: 46px;
    transform: translateX(${(props: IProps) => props.value * 48.66667}px);
  }
  & path {
    fill: none;
    stroke: ${COLORS.primary};
    stroke-dasharray: 150 150;
    stroke-width: 15;
  }
`;
