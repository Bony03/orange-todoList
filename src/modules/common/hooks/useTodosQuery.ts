/* eslint-disable prefer-const */
/* eslint-disable wrap-iife */
import { useNavigate } from 'react-router-dom';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { todoService } from '../services/todos.service';
import { IInitialTodo, ITodo } from '../types/todo.type';
import { IAlert } from '../types/alert.type';
import { QUERY_KEYS, ROUTER_KEYS } from '../consts/app-keys.const';

export interface IObjectKeys {
  [key: string]: string | number | boolean | undefined;
}
interface IErrorResponse extends AxiosError<{ error: string }> {}
interface IQuery extends IObjectKeys {
  isPrivate?: boolean;
  completed?: boolean;
  page?: number;
  perPage?: number;
}
export const useGetTodos = (queries: IQuery, alert: IAlert) => {
  const navigate = useNavigate();
  let query: IQuery = {};
  // eslint-disable-next-line guard-for-in
  for (const key in queries) {
    if (key === 'all') {
      /* empty */
    }
    if (key === 'public') {
      if (queries[key] === true) {
        query.isPrivate = false;
      }
    }
    if (key === 'private') {
      if (queries[key] === true) {
        query.isPrivate = true;
      }
    }
    if (key === 'completed') {
      if (queries[key] === true) {
        query.completed = true;
      }
    }
    if (key === 'page') {
      query.page = queries[key];
    }
    if (key === 'perPage') {
      query.perPage = queries[key];
    }
  }
  // eslint-disable-next-line func-names
  const queryString = (function () {
    return Object.keys(query)
      .map((key) => `${key}=${query[key]}`)
      .join('&');
  })();
  return useQuery({
    queryKey: [QUERY_KEYS.TODOS, queries],
    queryFn: () => todoService.getTodos(`?${queryString}`),
    onError: (error: IErrorResponse) => {
      if (error.response?.data) {
        if (error.response.data.error === 'Authentification failed') {
          navigate(ROUTER_KEYS.AUTHORIZATION);
        }
        alert.alertHandler(error.response.data.error);
      }
    },
    retry: (failureCount, error: IErrorResponse) => {
      if (error.response?.data) {
        if (error.response.data.error === 'Authentification failed') {
          return false;
        }
      }
      if (failureCount === 3) {
        return false;
      }
      return true;
    }
  });
};

export const useGetTodo = (id: string, alert: IAlert) => {
  const navigate = useNavigate();
  return useQuery({
    queryKey: [QUERY_KEYS.TODOS, id],
    queryFn: () => todoService.getTodo(id),
    onError: (error: IErrorResponse) => {
      if (error.response?.data) {
        if (error.response.data.error) {
          alert.alertHandler(error.response.data.error);
          setTimeout(() => {
            navigate(ROUTER_KEYS.AUTHORIZATION);
          }, 1500);
        }
      }
    }
  });
};

export const useUpdateTodo = (client: QueryClient, alert: IAlert) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (todo: ITodo) => todoService.updateTodo(todo),
    onError: (error: IErrorResponse) => {
      if (error.response?.data) {
        if (error.response.data.error) {
          alert.alertHandler(error.response.data.error);
          setTimeout(() => {
            navigate(ROUTER_KEYS.AUTHORIZATION);
          }, 1500);
        }
      }
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
    }
  });
};

export const useCreateTodo = (client: QueryClient, alert: IAlert) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (todo: IInitialTodo) => todoService.createTodo(todo),
    onError: (error: IErrorResponse) => {
      if (error.response?.data) {
        if (error.response.data.error) {
          alert.alertHandler(error.response.data.error);
          setTimeout(() => {
            navigate(ROUTER_KEYS.AUTHORIZATION);
          }, 500);
        }
      }
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
    }
  });
};

export const useDeleteTodo = (client: QueryClient, alert: IAlert) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (id: string) => todoService.deleteTodo(id),
    onError: (error: IErrorResponse) => {
      if (error.response?.data) {
        if (error.response.data.error) {
          alert.alertHandler(error.response.data.error);
          setTimeout(() => {
            navigate(ROUTER_KEYS.AUTHORIZATION);
          }, 1500);
        }
      }
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [QUERY_KEYS.TODOS] });
    }
  });
};
