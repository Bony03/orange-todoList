import styled from 'styled-components';
import { COLORS } from '../../../theme';

export const TabList = styled.div`
  width: 100vw;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  overflow: hidden;
  height: 250px;
  & .swiper {
    height: calc(100% - 20px);
    left: 0;
    position: relative;
    z-index: 3;
    & .swiper-slide {
      transition: all 0.3s ease-out;
      position: relative;
      & > div {
        box-shadow: 6px 9px 9px ${COLORS.black}1a;
      }
    }
    & .swiper-slide-prev {
      transform: translate(250px, 0) scale(0.8);
    }
    & .swiper-slide-next {
      transform: translate(-250px, 0) scale(0.8);
    }
    & .swiper-slide-active {
      transform: translate(0, 0) scale(1);
      z-index: 2;
      & > div {
        box-shadow: 9px 12px 12px ${COLORS.black}2a;
      }
    }
  }
`;
