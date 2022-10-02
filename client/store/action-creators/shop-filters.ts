import { Dispatch } from "redux";
import { FILTER_CATEGORIES } from "../action-types/filters-types";
import { FilterAction } from "../actions/filters-action";

export const updateFiltersSort = (param: string) => {
  return (dispatch: Dispatch<FilterAction>) => {
    dispatch({
      type: FILTER_CATEGORIES.UPDATE_SORT,
      payload: param,
    });
  };
};

export const updateFiltersPrice = (param: string) => {
  return (dispatch: Dispatch<FilterAction>) => {
    dispatch({
      type: FILTER_CATEGORIES.UPDATE_PRICE,
      payload: param,
    });
  };
};

export const updateFiltersCategory = (param: string) => {
  return (dispatch: Dispatch<FilterAction>) => {
    dispatch({
      type: FILTER_CATEGORIES.UPDATE_CATEGORY,
      payload: param,
    });
  };
};

export const updateFiltersBrand = (param: string) => {
  return (dispatch: Dispatch<FilterAction>) => {
    dispatch({
      type: FILTER_CATEGORIES.UPDATE_BRAND,
      payload: param,
    });
  };
};
