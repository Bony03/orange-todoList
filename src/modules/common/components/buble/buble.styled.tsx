import styled from 'styled-components';
import { COLORS, FONTS } from '../../../theme';

export const Buble = styled.div`
  & div {
    position: fixed;
    top: -40px;
    left: 30%;
    width: 100%;
    height: calc(100vh - 60px);
    z-index: -2;
  }
  & img {
    overflow: visible;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.span`
  position: fixed;
  @media (max-width: 425px) {
    font-size: 150px;
  }
  font-size: 180px;
  font-family: ${FONTS.FAMILIES.secondary};
  font-weight: ${FONTS.WEIGHTS.bold};
  color: ${COLORS.lightGrey};
  text-shadow: 10px 20px 30px ${`${COLORS.secondary}1a`};
  text-transform: uppercase;
  width: 100%;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: -1;
`;
