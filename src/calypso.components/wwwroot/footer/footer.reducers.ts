import { AddOrUpdateFooterAction, AllFootersAction, RemoveFooterAction } from "./footer.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeFooterReducer = (state, action) => {
    if (action instanceof RemoveFooterAction)
        pluckOut({ items: state.footers, value: action.entity.id });
    return state;
}

export const addFooterReducer = (state, action) => {
    if (action instanceof AddOrUpdateFooterAction) {
        addOrUpdate({ items: state.footers, item: action.entity });
    }
    return state;
}

export const allFootersReducer = (state, action) => {
    if (action instanceof AllFootersAction) {
        state.footers = action.entities;
    }
    return state;
}
