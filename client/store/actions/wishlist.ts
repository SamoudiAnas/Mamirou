import { Product } from "../../types/product";
import { WishlistActionTypes } from "../action-types";

interface ADD_ITEM {
    type: WishlistActionTypes.WISHLIST.ADD_ITEM;
    payload: Product;
}

interface DELETE_ITEM {
    type: WishlistActionTypes.WISHLIST.DELETE_ITEM;
    payload: Product;
}

export type WishlistAction = ADD_ITEM | DELETE_ITEM;
