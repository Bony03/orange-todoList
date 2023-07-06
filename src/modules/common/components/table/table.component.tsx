import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { QueryClient } from '@tanstack/react-query';

import { IDataArrayClientAlert } from '../../types/dataClientAlert.type';
import { ITodo } from '../../types/todo.type';
import { IAlert } from '../../types/alert.type';

import { DeskButtonGroupComponent } from '../buttonGroup/deskButtonGroup';
import { TableStyled } from './table.styled';

function pushNTimes(n: number, data: ITodo[], client: QueryClient, alert: IAlert) {
  const elemArray = data.map((item) => {
    console.log(item);
    return (
      <TableRow key={item._id}>
        <TableCell width={150}>{item.title}</TableCell>
        <TableCell>{item.discription}</TableCell>
        <TableCell width={312}>
          <DeskButtonGroupComponent data={item} client={client} alert={alert} />
        </TableCell>
      </TableRow>
    );
  });

  for (let i = 0; i < n; i += 1) {
    elemArray.push(
      <TableRow key={i}>
        <TableCell />
        <TableCell />
        <TableCell />
      </TableRow>
    );
  }
  return elemArray;
}

export const TableComponent = ({ data, client, alert }: IDataArrayClientAlert) => (
  <TableStyled>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Title</TableCell>
          <TableCell>Discription</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{pushNTimes(10 - data.length, data, client, alert)}</TableBody>
    </Table>
  </TableStyled>
);
