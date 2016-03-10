import { AddOrUpdateLogoAction, AllLogosAction, RemoveLogoAction } from "./logo.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeLogoReducer = (state, action) => {
    if (action instanceof RemoveLogoAction)
        pluckOut({ items: state.logos, value: action.entity.id });
    return state;
}

export const addLogoReducer = (state, action) => {
    if (action instanceof AddOrUpdateLogoAction) {
        addOrUpdate({ items: state.logos, item: action.entity });
    }
    return state;
}

export const allLogosReducer = (state, action) => {
    if (action instanceof AllLogosAction) {
        state.logos = action.entities;
    }
    return state;
}
