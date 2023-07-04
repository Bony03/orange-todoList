import { useState } from 'react';

export function useAlert() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({
    message: '',
    success: true
  });
  const closeHandler = () => {
    setOpen(false);
  };

  const alertHandler = (alertMessage: string, success = false) => {
    setOpen(true);
    setMessage({
      message: alertMessage,
      success
    });
  };
  return {
    open,
    message,
    closeHandler,
    alertHandler
  };
}
