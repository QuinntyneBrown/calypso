import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class LogoActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, logoService, guid) {
        super($location,logoService,dispatcher,guid,AddOrUpdateLogoAction,AllLogosAction,RemoveLogoAction,SetCurrentLogoAction)
    }    
}


export class AddOrUpdateLogoAction { constructor(public id, public entity) { } }

export class AllLogosAction { constructor(public id, public entities) { } }

export class RemoveLogoAction { constructor(public id, public entity) { } }

export class LogosFilterAction { constructor(public id, public term) { } }

export class SetCurrentLogoAction { constructor(public entity) { } }
