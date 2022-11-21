import toast from "react-hot-toast";
import { Dispatch } from "redux";
import { Product } from "../../types/product";
import { CART } from "../action-types/cart";
import { CartAction } from "../actions";

export function addItemToCart(product: Product, quantity: number) {
    return (dispatch: Dispatch<CartAction>) => {
        dispatch({
            type: CART.ADD_ITEM,
            payload: { product: product, quantity: quantity },
        });
    };
}

export function editItemFromCart(product: Product, quantity: number) {
    return (dispatch: Dispatch<CartAction>) => {
        dispatch({
            type: CART.EDIT_ITEM,
            payload: { product: product, quantity: quantity },
        });
    };
}

export function deleteItemFromCart(product: Product, quantity: number) {
    return (dispatch: Dispatch<CartAction>) => {
        dispatch({
            type: CART.DELETE_ITEM,
            payload: { product: product, quantity: quantity },
        });
    };
}
