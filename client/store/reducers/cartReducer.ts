import { Reducer } from "redux";
import { CartActionTypes } from "../action-types";
import { CartAction } from "../actions";

interface Products {
    productID: string;
    quantity: number;
}

const cartReducer: Reducer<Products[], CartAction> = (state = [], action) => {
    switch (action.type) {
        case CartActionTypes.CART.ADD_ITEM:
            return [
                ...state,
                {
                    productID: action.payload.productID,
                    quantity: action.payload.quantity,
                },
            ];

        case CartActionTypes.CART.EDIT_ITEM:
            //get the products without the edited one
            const newProducts = state.filter(
                (product) => product.productID !== action.payload.productID
            );
            //get the edited product
            const product = state.filter(
                (product) => product.productID === action.payload.productID
            );
            //mix into an new array with the new data
            return [
                ...newProducts,
                { ...product[0], quantity: action.payload.quantity },
            ];

        case CartActionTypes.CART.DELETE_ITEM:
            const newState = state.filter(
                (product) => product.productID !== action.payload.productID
            );
            return newState;

        default:
            return state;
    }
};

export default cartReducer;
