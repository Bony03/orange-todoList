import { QueryClient } from '@tanstack/react-query';
import { IAlert } from './alert.type';
import { ITodo } from './todo.type';

export type IDataClientAlert = {
  data: ITodo;
  client: QueryClient;
  alert: IAlert;
  index?: number;
};
export interface IDataArrayClientAlert {
  data: ITodo[];
  client: QueryClient;
  alert: IAlert;
}
