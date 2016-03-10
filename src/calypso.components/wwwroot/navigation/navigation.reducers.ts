import { AddOrUpdateNavigationAction, AllNavigationsAction, RemoveNavigationAction } from "./navigation.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeNavigationReducer = (state, action) => {
    if (action instanceof RemoveNavigationAction)
        pluckOut({ items: state.navigations, value: action.entity.id });
    return state;
}

export const addNavigationReducer = (state, action) => {
    if (action instanceof AddOrUpdateNavigationAction) {
        addOrUpdate({ items: state.navigations, item: action.entity });
    }
    return state;
}

export const allNavigationsReducer = (state, action) => {
    if (action instanceof AllNavigationsAction) {
        state.navigations = action.entities;
    }
    return state;
}
