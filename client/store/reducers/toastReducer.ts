import { Reducer } from "react";
import { ToastTypes } from "../action-types";
import { ToastAction } from "../actions";

const toastReducer: Reducer<string, ToastAction> = (state = "", action) => {
    switch (action.type) {
        case ToastTypes.Toast.TOAST:
            return action.payload;

        case ToastTypes.Toast.RESET_TOAST:
            return "";

        default:
            return state;
    }
};

export default toastReducer;
