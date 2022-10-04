import { combineReducers } from "redux";

//reducers
import filtersReducer from "./filtersReducer";
import cartUIReducer from "./cartUIReducer";
import wishlistReducer from "./wishlistReducer";
import userReducer from "./userReducer";
import cartReducer from "./cartReducer";

const reducers = combineReducers({
    wishlist: wishlistReducer,
    filters: filtersReducer,
    cartUI: cartUIReducer,
    user: userReducer,
    cart: cartReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
