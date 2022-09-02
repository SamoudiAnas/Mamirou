import { Reducer } from "react";

//type
import { Filters } from "../../types/filter";
import { FILTER_CATEGORIES } from "../action-types/filters-types";
import { FilterAction } from "../actions/filters-action";

//utils
import { updateFilters } from "../../utils/updateFilters";

const filtersReducer: Reducer<Filters, FilterAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case FILTER_CATEGORIES.UPDATE_BRAND:
      return updateFilters(state, "brand", action.payload);
    case FILTER_CATEGORIES.UPDATE_CATEGORY:
      return updateFilters(state, "category", action.payload);
    case FILTER_CATEGORIES.UPDATE_PRICE:
      return updateFilters(state, "price", action.payload);
    case FILTER_CATEGORIES.UPDATE_SORT:
      return { ...state, sortBy: action.payload };

    default:
      return initialState;
  }
};

export default filtersReducer;

const initialState: Filters = {
  sortBy: "Latest",
  brand: ["Gucci"],
  price: ["100$ - 200$"],
  category: ["For Children"],
};
