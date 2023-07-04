import { QueryClient } from '@tanstack/react-query';
import { ITodo } from './todo.type';
import { IAlert } from './alert.type';
import { IDataArrayClientAlert, IDataClientAlert } from './dataClientAlert.type';

export type IButtonProps = {
  text: string;
  type?: string;
  outline?: boolean;
  color?: string;
  margin?: boolean;
  clickHandler?: () => void;
};

export type IMainProps = {
  data: ITodo[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  openModal: boolean;
  client: QueryClient;
  alert: IAlert;
  page: number;
  count?: number;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  replaceState: boolean;
  setReplaceState: React.Dispatch<React.SetStateAction<boolean>>;
};
export type IDeskProps = {
  data: ITodo[];
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  openModal: boolean;
  client: QueryClient;
  alert: IAlert;
  page: number;
  count?: number;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};
export interface IMobProps {
  data: ITodo[];
  isLoading: boolean;
  isError: boolean;
  client: QueryClient;
  openModal: boolean;
  alert: IAlert;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  setReplaceState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IMobItemProps extends IDataClientAlert {
  setReplaceState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITabItemProps extends IDataArrayClientAlert {
  setReplaceState: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IAddTodoProps {
  client: QueryClient;
  alert: IAlert;
  closeHandler: () => void;
}
