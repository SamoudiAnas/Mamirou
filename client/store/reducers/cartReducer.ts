import { Reducer } from "redux";
import { CartAction } from "../actions";

const cartReducer: Reducer<number, CartAction> = (state = 0, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            return state + 1;
        case "EDIT_ITEM":
            return state + 1;
        case "DELETE_ITEM":
            return state + 1;
        default:
            return state;
    }
};

export default cartReducer;
