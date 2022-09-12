import { toast } from 'react-toastify';

type ToastType = 'info' | 'error' | 'warning' | 'success';
type AutoClose = number | false;

function showToast(type: ToastType, message: string, autoClose: AutoClose) {
  toast(message, {
    type,
    position: "top-right",
    autoClose,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    progress: undefined,
  });
}

export { showToast };
