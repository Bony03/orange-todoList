// Local storage keys
export const STORAGE_KEYS = {
  TOKEN: 'token'
};

// React-query keys
export const QUERY_KEYS = {
  TODOS: 'todos',
  ALL: 'all',
  USER: 'user'
};

// Backend Routes
export const BACKEND_KEYS = {
  BASE_URL: 'http://localhost:4200',
  TODOS: 'todos',
  USER: 'user',
  USER_LOGIN: 'user/login',
  USER_REGISTER: 'user/register',
  USER_ACTIVATE: 'user/activate',
  USER_CHANGE_PASS: 'user',
  USER_REQUEST_LINK: 'user/request',
  USER_RESTORE_PASS: 'user/restore',
  USER_CHECK_TOKEN: 'user'
};

export const ROUTER_KEYS = {
  ROOT: '/',
  TODO: '/:id',
  AUTHORIZATION: '/authorization',
  LOGIN: 'login',
  REGISTER: 'register',
  REQUEST_RESTORE_PASS: 'request-reset',
  ACTIVATE: 'activate/:id',
  RESTORE_PASS: 'restore/:id',
  PROFILE: '/profile',
  NOT_FOUND: '/*'
};
