import { useNavigate } from 'react-router-dom';
import React from 'react';
import { BrandComponent } from '../brand';
import { ButtonComponent } from '../button';
import { Container } from '../container/container.component';
import { Header } from './header.styled';
import { ROUTER_KEYS } from '../../consts/app-keys.const';

export const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <Header>
      <Container>
        <BrandComponent />
        <ButtonComponent
          type="button"
          text="My Profile"
          outline
          clickHandler={() => {
            navigate(ROUTER_KEYS.PROFILE);
          }}
        />
      </Container>
    </Header>
  );
};
