export type IAlert = {
  open: boolean;
  message: {
    message: string;
    success: boolean;
  };
  closeHandler: () => void;
  alertHandler: (message: string, success?: boolean) => void;
};
