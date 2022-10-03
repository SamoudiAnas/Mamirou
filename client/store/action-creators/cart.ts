import { Dispatch } from "redux";
import { CART } from "../action-types/cart";
import { CartAction } from "../actions";

export function addItemToCart(productID: string, quantity: number) {
    return (dispatch: Dispatch<CartAction>) => {
        dispatch({
            type: CART.ADD_ITEM,
            payload: { productID: productID, quantity: quantity },
        });
    };
}

export function editItemFromCart(productID: string, quantity: number) {
    return (dispatch: Dispatch<CartAction>) => {
        dispatch({
            type: CART.EDIT_ITEM,
            payload: { productID: productID, quantity: quantity },
        });
    };
}

export function deleteItemFromCart(productID: string, quantity: number) {
    return (dispatch: Dispatch<CartAction>) => {
        dispatch({
            type: CART.DELETE_ITEM,
            payload: { productID: productID, quantity: quantity },
        });
    };
}
