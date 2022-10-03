import { CartActionTypes } from "../action-types";

interface ADD_ITEM {
    type: CartActionTypes.CART.ADD_ITEM;
    payload: string;
}

interface EDIT_ITEM {
    type: CartActionTypes.CART.EDIT_ITEM;
    payload: {
        productID: string;
        quantity: number;
    };
}

interface DELETE_ITEM {
    type: CartActionTypes.CART.DELETE_ITEM;
    payload: string;
}

export type CartAction = ADD_ITEM | EDIT_ITEM | DELETE_ITEM;
