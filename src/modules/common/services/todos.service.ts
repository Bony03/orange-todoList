import { AxiosResponse } from 'axios';
import { BACKEND_KEYS } from '../consts/app-keys.const';
import { IInitialTodo, ITodo } from '../types/todo.type';
import { HttpService } from './http.service';

interface ITodosResponse
  extends AxiosResponse<{ todos: ITodo[]; perPage: number; page: number; count: number }> {}
interface ITodoResponse extends AxiosResponse<ITodo> {}
interface IMessageResponse extends AxiosResponse<{ message: string }> {}
class TodosService extends HttpService {
  constructor() {
    super(process.env.REACT_APP_BASE_URL);
  }

  async getTodos(query: string) {
    const { data } = await this.get<ITodosResponse>(
      {
        url: `${BACKEND_KEYS.TODOS}/${query}`
      },
      true
    );
    return data;
  }

  async getTodo(id: string) {
    const { data } = await this.get<ITodoResponse>({
      url: `${BACKEND_KEYS.TODOS}/${id}`
    });
    return data;
  }

  async createTodo(todoData: IInitialTodo) {
    const { data } = await this.post<ITodoResponse>({
      url: BACKEND_KEYS.TODOS,
      data: {
        data: {
          ...todoData
        }
      }
    });
    return data;
  }

  async updateTodo(todoData: ITodo) {
    const { data } = await this.put<ITodoResponse>({
      url: `${BACKEND_KEYS.TODOS}/${todoData._id}`,
      data: {
        data: {
          ...todoData
        }
      }
    });
    return data;
  }

  async deleteTodo(id: string) {
    const { data } = await this.delete<IMessageResponse>({
      url: `${BACKEND_KEYS.TODOS}/${id}`
    });
    return data;
  }
}

export const todoService = new TodosService();
