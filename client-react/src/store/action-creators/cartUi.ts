import { Dispatch } from "redux";
import { CARTUI } from "../action-types/cartUI-types";
import { CartUIAction } from "../actions/cartUi-actions";

export const openCartUI = () => {
  return (dispatch: Dispatch<CartUIAction>) => {
    dispatch({
      type: CARTUI.OPEN,
    });
  };
};

export const closeCartUI = () => {
  return (dispatch: Dispatch<CartUIAction>) => {
    dispatch({
      type: CARTUI.CLOSE,
    });
  };
};
