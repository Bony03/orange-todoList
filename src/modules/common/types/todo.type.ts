export type ITodo = {
  _id: string;
  title: string;
  discription: string;
  isPrivate: boolean;
  completed: boolean;
  created: number;
};

export type IInitialTodo = {
  title: string;
  discription: string;
  isPrivate: boolean;
  completed: boolean;
};
