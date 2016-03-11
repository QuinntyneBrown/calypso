import { AddOrUpdateSideNavAction, AllSideNavsAction, RemoveSideNavAction, SideNavClickAction } from "./side-nav.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeSideNavReducer = (state, action) => {
    if (action instanceof RemoveSideNavAction)
        pluckOut({ items: state.sideNavs, value: action.entity.id });
    return state;
}

export const addSideNavReducer = (state, action) => {
    if (action instanceof AddOrUpdateSideNavAction) {
        addOrUpdate({ items: state.sideNavs, item: action.entity });
    }
    return state;
}

export const allSideNavsReducer = (state, action) => {
    if (action instanceof AllSideNavsAction) {
        state.sideNavs = action.entities;
    }
    return state;
}

export const sideNavClickReducer = (state, action) => {
    if (action instanceof SideNavClickAction) {
        console.log("works");
    }
    return state;
}

