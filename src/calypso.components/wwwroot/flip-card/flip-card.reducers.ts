import * as actions from "./flip-card.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeFlipCardReducer = (state, action) => {
    if (action instanceof actions.RemoveFlipCardAction)
        pluckOut({ items: state.flipCards, value: action.entity.id });
    return state;
}

export const addFlipCardReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateFlipCardAction) {
        addOrUpdate({ items: state.flipCards, item: action.entity });
    }
    return state;
}

export const allFlipCardsReducer = (state, action) => {
    if (action instanceof actions.AllFlipCardsAction) {
        state.flipCards = action.entities;
    }
    return state;
}

export const setCurrentFlipCardReducer = (state, action) => {
    if (action instanceof actions.SetCurrentFlipCardAction) {
        state.currentFlipCardId = action.id;
    }
    return state;
}
