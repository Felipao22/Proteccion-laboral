import { toast } from 'react-toastify';

export const NotificationSuccess = (text) => {
  return toast.success(text, {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored'
  });
};
export const NotificationFailure = (text) => {
  return toast.error(text, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored'
  });
};
export const NotificationInfo = (text) => {
  return toast.info(text, {
    position: 'top-center',
    autoClose: false,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored'
  });
};
export const NotificationWarning = (text) => {
  return toast.warning(text, {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored'
  });
};
