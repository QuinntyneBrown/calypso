import { AddOrUpdateLegalAction, AllLegalsAction, RemoveLegalAction } from "./legal.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeLegalReducer = (state, action) => {
    if (action instanceof RemoveLegalAction)
        pluckOut({ items: state.legals, value: action.entity.id });
    return state;
}

export const addLegalReducer = (state, action) => {
    if (action instanceof AddOrUpdateLegalAction) {
        addOrUpdate({ items: state.legals, item: action.entity });
    }
    return state;
}

export const allLegalsReducer = (state, action) => {
    if (action instanceof AllLegalsAction) {
        state.legals = action.entities;
    }
    return state;
}
