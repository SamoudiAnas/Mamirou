import toast from "react-hot-toast";
import { Reducer } from "redux";
import { Product } from "../../types/product";
import { CartActionTypes } from "../action-types";
import { CartAction } from "../actions";

interface CartItem {
    product: Product;
    quantity: number;
}

const cartReducer: Reducer<CartItem[], CartAction> = (state = [], action) => {
    switch (action.type) {
        case CartActionTypes.CART.ADD_ITEM:
            if (
                state.filter(
                    (product) =>
                        product.product._id == action.payload.product._id
                ).length !== 0
            ) {
                return state;
            }
            return [
                ...state,
                {
                    product: action.payload.product,
                    quantity: action.payload.quantity,
                },
            ];

        case CartActionTypes.CART.EDIT_ITEM:
            //get the products without the edited one
            const newProducts = state.filter(
                (product) => product.product._id !== action.payload.product._id
            );
            //get the edited product
            const product = state.filter(
                (product) => product.product._id === action.payload.product._id
            );
            //mix into an new array with the new data
            return [
                ...newProducts,
                { ...product[0], quantity: action.payload.quantity },
            ];

        case CartActionTypes.CART.DELETE_ITEM:
            const newState = state.filter(
                (product) => product.product._id !== action.payload.product._id
            );
            return newState;

        default:
            return state;
    }
};

export default cartReducer;
