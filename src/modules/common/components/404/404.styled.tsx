import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';

export const Error404 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & img {
      width: 100%;
      max-width: 300px;
      height: 100%;
      object-fit: cover;
    }
    & h1 {
      font-size: calc(${FONTS.SIZES.m} * 3);
      text-align: center;
      color: ${COLORS.grey};
    }
    & h6 {
      color: ${COLORS.darkGrey};
    }
    & a {
      color: ${COLORS.blue} !important;
      text-decoration: underline !important;
    }
    @media (min-width: 768.02px) {
        flex-direction: row;
        & h1 {
            font-size: calc(${FONTS.SIZES.m} * 6);
            text-align: left;
        }
    }
  }
`;
