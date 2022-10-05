import { Dispatch } from "redux";
import { ToastTypes } from "../action-types";
import { ToastAction } from "../actions";

export function toast(toastMessage: string) {
    return (dispatch: Dispatch<ToastAction>) => {
        dispatch({
            type: ToastTypes.Toast.TOAST,
            payload: toastMessage,
        });
    };
}

export function resetToast() {
    return (dispatch: Dispatch<ToastAction>) => {
        dispatch({
            type: ToastTypes.Toast.TOAST,
            payload: "",
        });
    };
}
