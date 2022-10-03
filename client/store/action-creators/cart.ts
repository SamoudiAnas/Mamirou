import { Dispatch } from "redux";
import { CART } from "../action-types/cart";

export function addItemToCart(productID: string) {
    return (dispatch: any) => {
        dispatch({
            type: CART.ADD_ITEM,
            payload: productID,
        });
    };
}

export function editItemFromCart(productID: string, quantity: number) {
    return (dispatch: any) => {
        dispatch({
            type: CART.EDIT_ITEM,
            payload: { productID: productID, quantity: quantity },
        });
    };
}

export function deleteItemFromCart(productID: string) {
    return (dispatch: any) => {
        dispatch({
            type: CART.DELETE_ITEM,
            payload: productID,
        });
    };
}
