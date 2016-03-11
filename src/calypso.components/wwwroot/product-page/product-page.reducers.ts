import * as actions from "./product-page.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeProductPageReducer = (state, action) => {
    if (action instanceof actions.RemoveProductPageAction)
        pluckOut({ items: state.productPages, value: action.entity.id });
    return state;
}

export const addProductPageReducer = (state, action) => {
    if (action instanceof actions.AddOrUpdateProductPageAction) {
        addOrUpdate({ items: state.productPages, item: action.entity });
    }
    return state;
}

export const allProductPagesReducer = (state, action) => {
    if (action instanceof actions.AllProductPagesAction) {
        state.productPages = action.entities;
    }
    return state;
}
