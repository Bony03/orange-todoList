import React from 'react';
import { Link } from 'react-router-dom';
import { Brand } from './brand.styled';
import { ROUTER_KEYS } from '../../consts/app-keys.const';

export const BrandComponent = () => (
  <Brand>
    <Link to={ROUTER_KEYS.ROOT}>
      Todo<span>List</span>
    </Link>
  </Brand>
);
