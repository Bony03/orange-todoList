import styled from 'styled-components';
import { COLORS, FONTS, SPACES } from '../../../theme';

export const TableStyled = styled.div`
  & table {
    background-color: ${COLORS.white}8c;
    backdrop-filter: blur(10px);
    & thead {
      background-color: ${COLORS.black};
      & th {
        color: ${COLORS.white};
        font-size: ${FONTS.SIZES.m};
        font-weight: ${FONTS.WEIGHTS.middle};
        text-align: center;
      }
    }
    & tbody {
      & tr {
        border-bottom: 1px solid ${COLORS.grey};
      }
      & td {
        border-bottom: none;
        padding: 0 ${SPACES.m};
        margin: 8px 0;
        &:nth-child(1) {
          max-width: 150px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        &:nth-child(2) {
          width: 100%;
          height: 100%;
          max-width: 100%;
          display: -webkit-box;
          line-clamp: 2;
          overflow: hidden;
          box-orient: vertical;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-word;
        }
        &:nth-child(3) {
          min-width: 312px;
        }
      }
    }
  }
`;
