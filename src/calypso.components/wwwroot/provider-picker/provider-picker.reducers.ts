import { AddOrUpdateProviderPickerAction, AllProviderPickersAction, RemoveProviderPickerAction } from "./provider-picker.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removeProviderPickerReducer = (state, action) => {
    if (action instanceof RemoveProviderPickerAction)
        pluckOut({ items: state.providerPickers, value: action.entity.id });
    return state;
}

export const addProviderPickerReducer = (state, action) => {
    if (action instanceof AddOrUpdateProviderPickerAction) {
        addOrUpdate({ items: state.providerPickers, item: action.entity });
    }
    return state;
}

export const allProviderPickersReducer = (state, action) => {
    if (action instanceof AllProviderPickersAction) {
        state.providerPickers = action.entities;
    }
    return state;
}
