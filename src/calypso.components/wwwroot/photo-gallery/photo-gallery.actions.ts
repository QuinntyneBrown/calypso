import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class PhotoGalleryActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, photoGalleryService, guid) {
        super($location,photoGalleryService,dispatcher,guid,AddOrUpdatePhotoGalleryAction,AllPhotoGallerysAction,RemovePhotoGalleryAction,SetCurrentPhotoGalleryAction)
    }    
}


export class AddOrUpdatePhotoGalleryAction { constructor(public id, public entity) { } }

export class AllPhotoGallerysAction { constructor(public id, public entities) { } }

export class RemovePhotoGalleryAction { constructor(public id, public entity) { } }

export class PhotoGallerysFilterAction { constructor(public id, public term) { } }

export class SetCurrentPhotoGalleryAction { constructor(public entity) { } }
