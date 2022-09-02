import { combineReducers } from "redux";
import cartUIReducer from "./cartUIReducer";
import filtersReducer from "./filtersReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
  filters: filtersReducer,
  cartUI: cartUIReducer,
  user: userReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
