import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { userService } from '../services/user.service';
import { IAlert } from '../types/alert.type';
import { QUERY_KEYS, ROUTER_KEYS, STORAGE_KEYS } from '../consts/app-keys.const';

interface IErrorResponse extends AxiosError<{ error: string }> {}

interface IChangePass {
  oldPassword: string;
  newPassword: string;
}
interface IEmail {
  email: string;
}
interface IPassword {
  password: string;
}
interface ILogin extends IEmail, IPassword {}
interface IRegister extends ILogin {
  name: string;
}
export const useActivateUser = (id: string) =>
  useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: () => userService.activateUser(id),
    onError: (error: IErrorResponse) => {
      if (error.response?.data) {
        if (error.response.data.error) {
          return error.response.data;
        }
      }
    }
  });

export const useChangePass = (alert: IAlert) =>
  useMutation({
    mutationFn: (credentials: IChangePass) => userService.changePass(credentials),
    onError: (error: IErrorResponse) => {
      if (error.response?.data) {
        if (error.response.data.error) {
          alert.alertHandler(error.response.data.error);
        }
      }
    },
    onSuccess: (data) => {
      alert.alertHandler(data.message, true);
    }
  });
export const useLogin = (alert: IAlert) => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (credentials: ILogin) => userService.loginUser(credentials),
    onError: (error: IErrorResponse) => {
      if (error.response?.data) {
        if (error.response.data.error) {
          alert.alertHandler(error.response.data.error);
        }
      }
    },
    onSuccess: (data) => {
      localStorage.setItem(STORAGE_KEYS.TOKEN, `Bearer ${data.token}`);
      navigate(`..${ROUTER_KEYS.ROOT}..${ROUTER_KEYS.ROOT}`);
    }
  });
};
export const useRegister = (alert: IAlert) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (credentials: IRegister) => userService.registerUser(credentials),
    onError: (error: IErrorResponse) => {
      if (error.response?.data) {
        if (error.response.data.error) {
          alert.alertHandler(error.response.data.error);
        }
      }
    },
    onSuccess: (data) => {
      localStorage.setItem(STORAGE_KEYS.TOKEN, `Bearer ${data.token}`);
      navigate(ROUTER_KEYS.ROOT);
    }
  });
};
export const useRequestPassLink = (alert: IAlert) =>
  useMutation({
    mutationFn: (credentials: IEmail) => userService.requestLink(credentials),
    onError: (error: IErrorResponse) => {
      if (error.response?.data) {
        if (error.response.data.error) {
          alert.alertHandler(error.response.data.error);
        }
      }
    },
    onSuccess: (data) => {
      alert.alertHandler(data.message, true);
    }
  });
export const useRestorePass = (alert: IAlert) =>
  useMutation({
    mutationFn: (credentials: IPassword) => userService.restorePass(credentials),
    onError: (error: IErrorResponse) => {
      if (error.response?.data) {
        if (error.response.data.error) {
          alert.alertHandler(error.response.data.error);
        }
      }
    },
    onSuccess: (data) => {
      alert.alertHandler(data.message, true);
    }
  });

export const useCheckToken = () => {
  const navigate = useNavigate();
  return useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: () => userService.getUserData(),
    onSuccess: (data) => {
      localStorage.setItem(STORAGE_KEYS.TOKEN, `Bearer ${data.token}`);
    },
    onError: () => {
      navigate(ROUTER_KEYS.AUTHORIZATION);
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

export const useGetUserData = (alert: IAlert) =>
  useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: () => userService.getUserData(),
    onError: (error: IErrorResponse) => {
      if (error.response?.data) {
        if (error.response.data.error) {
          alert.alertHandler(error.response.data.error);
        }
      }
    },
    onSuccess: (data) => {
      localStorage.setItem(STORAGE_KEYS.TOKEN, `Bearer ${data.token}`);
    }
  });
