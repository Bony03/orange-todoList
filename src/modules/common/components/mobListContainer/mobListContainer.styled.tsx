import styled from 'styled-components';
import { SPACES } from '../../../theme';

type IProps = {
  modal: boolean;
};

export const MobList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props: IProps) => (props.modal ? '' : 'center')};
  margin: ${(props: IProps) => (props.modal ? `${SPACES.l} 0 0 0` : `${SPACES.l} 0`)};
  max-height: ${(props: IProps) => (props.modal ? 'calc(100vh - 230px)' : 'auto')};
  overflow: ${(props: IProps) => (props.modal ? 'hidden' : 'auto')};
  & > div {
    margin-bottom: ${SPACES.l};
  }
`;
