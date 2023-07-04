import React from 'react';
import { cubicBezier, motion } from 'framer-motion';

import { Buble, Title } from './buble.styled';
import blob from '../../../../assets/image/blob.svg';

export const BubleComponent = () => {
  const initial = {
    opacity: 0,
    x: -300,
    scale: 0.5
  };
  const show = {
    opacity: 1,
    x: 0,
    scale: 1
  };
  return (
    <Buble>
      <motion.div
        initial={initial}
        animate={show}
        transition={{ type: cubicBezier(0.05, 0.5, 0, 1), duration: 1.5 }}
        viewport={{ once: true }}
      >
        <img src={blob} alt="Buble" />
      </motion.div>
      <Title>just do it!</Title>
    </Buble>
  );
};
