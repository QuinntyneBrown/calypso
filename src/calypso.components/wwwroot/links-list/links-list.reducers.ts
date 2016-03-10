import { AddOrUpdateLinksListAction, AllLinksListsAction, RemoveLinksListAction } from "./links-list.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeLinksListReducer = (state, action) => {
    if (action instanceof RemoveLinksListAction)
        pluckOut({ items: state.linksLists, value: action.entity.id });
    return state;
}

export const addLinksListReducer = (state, action) => {
    if (action instanceof AddOrUpdateLinksListAction) {
        addOrUpdate({ items: state.linksLists, item: action.entity });
    }
    return state;
}

export const allLinksListsReducer = (state, action) => {
    if (action instanceof AllLinksListsAction) {
        state.linksLists = action.entities;
    }
    return state;
}
