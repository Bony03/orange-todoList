import { createContext, useContext } from 'react';

interface IContext {
  isAuth: boolean;
  setAuth: (c: boolean) => void;
}

export const AuthContext = createContext<IContext>({ isAuth: true, setAuth: () => {} });
export const useAuthContext = () => useContext(AuthContext);
