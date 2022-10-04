import { Product } from "../../types/product";
import { CartActionTypes } from "../action-types";

interface ADD_ITEM {
    type: CartActionTypes.CART.ADD_ITEM;
    payload: {
        product: Product;
        quantity: number;
    };
}

interface EDIT_ITEM {
    type: CartActionTypes.CART.EDIT_ITEM;
    payload: {
        product: Product;
        quantity: number;
    };
}

interface DELETE_ITEM {
    type: CartActionTypes.CART.DELETE_ITEM;
    payload: {
        product: Product;
        quantity: number;
    };
}

export type CartAction = ADD_ITEM | EDIT_ITEM | DELETE_ITEM;
