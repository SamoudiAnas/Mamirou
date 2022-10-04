import { Dispatch } from "redux";
import { Product } from "../../types/product";
import { WishlistActionTypes } from "../action-types";
import { WishlistAction } from "../actions";

export function addItemToWishlist(product: Product) {
    return (dispatch: Dispatch<WishlistAction>) => {
        dispatch({
            type: WishlistActionTypes.WISHLIST.ADD_ITEM,
            payload: product,
        });
    };
}

export function deleteItemFromWishlist(product: Product) {
    return (dispatch: Dispatch<WishlistAction>) => {
        dispatch({
            type: WishlistActionTypes.WISHLIST.DELETE_ITEM,
            payload: product,
        });
    };
}
