import { Reducer } from "redux";
import { Product } from "../../types/product";
import { WishlistActionTypes } from "../action-types";
import { WishlistAction } from "../actions/wishlist";

const wishlistReducer: Reducer<Product[], WishlistAction> = (
    state = [],
    action
) => {
    switch (action.type) {
        case WishlistActionTypes.WISHLIST.ADD_ITEM:
            if (
                state.filter((product) => product._id == action.payload._id)
                    .length !== 0
            ) {
                return state;
            }
            return [...state, action.payload];

        case WishlistActionTypes.WISHLIST.DELETE_ITEM:
            const newState = state.filter(
                (product) => product._id !== action.payload._id
            );
            return newState;

        default:
            return state;
    }
};

export default wishlistReducer;
