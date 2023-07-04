import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Container } from '../container/container.component';
import { NotFound, NotFoundContent } from './notfound.styled';
import astronaut from '../../../../assets/image/astronaut.svg';

export const NotFoundComponent = () => (
  <NotFound>
    <Container>
      <NotFoundContent>
        <div>
          <motion.img
            initial={{ x: -300, y: 100 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 1.5, ease: 'linear' }}
            src={astronaut}
            alt="astronaut"
          />
        </div>
        <div>
          <Typography variant="h1"> Page not found</Typography>
          <Typography variant="subtitle1">
            The Page you are looking for doesn&apost exist. Would you like to{' '}
            <Link to="/">go home</Link>?
          </Typography>
        </div>
      </NotFoundContent>
    </Container>
  </NotFound>
);
