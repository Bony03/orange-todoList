import { AxiosResponse } from 'axios';
import { BACKEND_KEYS } from '../consts/app-keys.const';
import { HttpService } from './http.service';

interface IMessageResponse extends AxiosResponse<{ message: string }> {}
interface ITokenResponse extends AxiosResponse<{ token: string; message: string }> {}
interface IUserData
  extends AxiosResponse<{
    data: {
      email: string;
      name: string;
      isActivated: boolean;
      id: string;
    };
    token: string;
    message: string;
  }> {}

export class UserService extends HttpService {
  constructor() {
    super(process.env.REACT_APP_BASE_URL);
  }

  async activateUser(id: string) {
    const { data } = await this.get<IMessageResponse>({
      url: `${BACKEND_KEYS.USER_ACTIVATE}/${id}`
    });
    return data;
  }

  async changePass(credentials: { oldPassword: string; newPassword: string }) {
    const { data } = await this.put<IMessageResponse>(
      {
        url: BACKEND_KEYS.USER_CHANGE_PASS,
        data: {
          data: {
            ...credentials
          }
        }
      },
      true
    );
    return data;
  }

  async loginUser(credentials: { email: string; password: string }) {
    const { data } = await this.post<ITokenResponse>({
      url: BACKEND_KEYS.USER_LOGIN,
      data: {
        data: {
          ...credentials
        }
      }
    });
    return data;
  }

  async registerUser(credentials: { email: string; name: string; password: string }) {
    const { data } = await this.post<ITokenResponse>({
      url: BACKEND_KEYS.USER_REGISTER,
      data: {
        data: {
          ...credentials
        }
      }
    });
    return data;
  }

  async requestLink(credentials: { email: string }) {
    const { data } = await this.post<IMessageResponse>({
      url: BACKEND_KEYS.USER_REQUEST_LINK,
      data: {
        data: {
          ...credentials
        }
      }
    });
    return data;
  }

  async restorePass(credentials: { password: string }) {
    const { data } = await this.post<IMessageResponse>(
      {
        url: BACKEND_KEYS.USER_RESTORE_PASS,
        data: {
          data: {
            ...credentials
          }
        }
      },
      true
    );
    return data;
  }

  async getUserData() {
    const { data } = await this.get<IUserData>(
      {
        url: BACKEND_KEYS.USER_CHECK_TOKEN
      },
      true
    );
    return data;
  }
}

export const userService = new UserService();
