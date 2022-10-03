import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import cartUIReducer from "./cartUIReducer";
import filtersReducer from "./filtersReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    filters: filtersReducer,
    cartUI: cartUIReducer,
    user: userReducer,
    cart: cartReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
