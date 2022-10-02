import { Reducer } from "react";
import { CARTUI } from "../action-types/cartUI-types";
import { CartUIAction } from "../actions/cartUi-actions";

const cartUIReducer: Reducer<boolean, CartUIAction> = (
  state = false,
  action
) => {
  switch (action.type) {
    case CARTUI.OPEN:
      return true;
    case CARTUI.CLOSE:
      return false;
    default:
      return false;
  }
};

export default cartUIReducer;
