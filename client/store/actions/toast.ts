import { ToastTypes } from "../action-types";

interface ShowToast {
    type: ToastTypes.Toast.TOAST;
    payload: string;
}

interface ResetToast {
    type: ToastTypes.Toast.RESET_TOAST;
    payload: string;
}

export type Toast = ShowToast | ResetToast;
