import { Filters } from "../types/filter";

export const updateFilters = (
    initialState: Filters,
    param: keyof Filters,
    option: string
) => {
    const newState: string[] = [];
    if (initialState[param].includes(option)) {
        for (let i = 0; i < initialState[param].length; i++) {
            if (initialState[param][i] !== option) {
                newState.push(initialState[param][i]);
            }
        }
        return {
            ...initialState,
            [param]: newState,
        };
        //else add it
    } else {
        for (let i = 0; i < initialState[param].length; i++) {
            if (initialState[param][i] !== option) {
                newState.push(initialState[param][i]);
            }
        }
        newState.push(option);
        return {
            ...initialState,
            [param]: newState,
        };
    }
};
