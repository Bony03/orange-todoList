import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { ModalContainer, PortalStyled } from './portal.styled';
import cross from '../../../../assets/image/cross.svg';

type IPortal = {
  children: ReactNode;
  onClose?: () => void;
};
const portal = document.getElementById('portal');
export const Portal = ({ children, onClose }: IPortal) => {
  if (portal) {
    return ReactDOM.createPortal(
      <PortalStyled>
        <ModalContainer>
          <button type="button" onClick={onClose}>
            <img src={cross} alt="close" />
          </button>
          {children}
        </ModalContainer>
      </PortalStyled>,
      portal
    );
  }
};
