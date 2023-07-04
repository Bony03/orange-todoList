import styled from 'styled-components';
import { COLORS, SPACES } from '../../../theme';

export const NotFound = styled.div`
  width: 100%;
  min-height: calc(100vh - 60px);
  height: 100%;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotFoundContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: ${SPACES.l};
  & div:first-child {
  }
  & h1 {
    @media (max-width: 600px) {
      font-size: 3rem;
    }
    text-align: center;
    font-size: 4rem;
    color: ${COLORS.grey};
  }
  & h6 {
    color: ${COLORS.darkGrey};
  }
  & a {
    color: ${COLORS.blue} !important;
    text-decoration: underline !important;
  }
`;
