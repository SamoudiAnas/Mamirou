import { FILTER_CATEGORIES } from "../action-types/filters-types";

interface UpdateBrandAction {
  type: FILTER_CATEGORIES.UPDATE_BRAND;
  payload: string;
}
interface UpdatePriceAction {
  type: FILTER_CATEGORIES.UPDATE_PRICE;
  payload: string;
}
interface UpdateCategoryAction {
  type: FILTER_CATEGORIES.UPDATE_CATEGORY;
  payload: string;
}
interface UpdateSortAction {
  type: FILTER_CATEGORIES.UPDATE_SORT;
  payload: string;
}

export type FilterAction =
  | UpdateBrandAction
  | UpdateCategoryAction
  | UpdatePriceAction
  | UpdateSortAction;
