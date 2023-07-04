import styled from 'styled-components';
import { COLORS, FONTS, SPACES } from '../../../theme';

export const ProfileForm = styled.div`
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
  & > button {
    position: absolute;
    bottom: 10px;
    left: -20px;
    & span {
      color: ${COLORS.red};
    }
  }
  & button {
    height: 30px;
    width: 150px;
  }
  & h4 {
    color: ${COLORS.black};
    margin-bottom: calc(2 * ${SPACES.m});

    & span {
      color: ${COLORS.secondary};
      font-weight: ${FONTS.WEIGHTS.bold};
    }
  }
  & p {
    & span {
      color: ${COLORS.secondary};
      font-weight: ${FONTS.WEIGHTS.bold};
    }
  }
  & h6 {
    color: ${COLORS.black};
  }
`;
