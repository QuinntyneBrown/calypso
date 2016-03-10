import { AddOrUpdatePhotoGalleryAction, AllPhotoGallerysAction, RemovePhotoGalleryAction } from "./photo-gallery.actions";
import { addOrUpdate, pluckOut } from "../core";

export const removePhotoGalleryReducer = (state, action) => {
    if (action instanceof RemovePhotoGalleryAction)
        pluckOut({ items: state.photoGallerys, value: action.entity.id });
    return state;
}

export const addPhotoGalleryReducer = (state, action) => {
    if (action instanceof AddOrUpdatePhotoGalleryAction) {
        addOrUpdate({ items: state.photoGallerys, item: action.entity });
    }
    return state;
}

export const allPhotoGallerysReducer = (state, action) => {
    if (action instanceof AllPhotoGallerysAction) {
        state.photoGallerys = action.entities;
    }
    return state;
}
