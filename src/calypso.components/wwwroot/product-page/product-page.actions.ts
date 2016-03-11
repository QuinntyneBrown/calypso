import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class ProductPageActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, productPageService, guid) {
        super($location,productPageService,dispatcher,guid,AddOrUpdateProductPageAction,AllProductPagesAction,RemoveProductPageAction,SetCurrentProductPageAction)
    }    
}


export class AddOrUpdateProductPageAction { constructor(public id, public entity) { } }

export class AllProductPagesAction { constructor(public id, public entities) { } }

export class RemoveProductPageAction { constructor(public id, public entity) { } }

export class ProductPagesFilterAction { constructor(public id, public term) { } }

export class SetCurrentProductPageAction { constructor(public entity) { } }
