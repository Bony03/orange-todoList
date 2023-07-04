import React from 'react';
import { motion } from 'framer-motion';

import { TodoError } from './todoError.styled';
import { AlertComponent } from '../alert';
import { IAlert } from '../../types/alert.type';
import { Eror404Component } from '../404';

type IProps = {
  alert: IAlert;
};

export const TodoErrorComponent = ({ alert }: IProps) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <TodoError>
      <AlertComponent
        open={alert.open}
        closeHandler={alert.closeHandler}
        message={alert.message.message}
        success={alert.message.success}
      />
      <Eror404Component />
    </TodoError>
  </motion.div>
);
