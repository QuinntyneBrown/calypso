import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class NavigationActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, navigationService, guid) {
        super($location,navigationService,dispatcher,guid,AddOrUpdateNavigationAction,AllNavigationsAction,RemoveNavigationAction,SetCurrentNavigationAction)
    }    
}


export class AddOrUpdateNavigationAction { constructor(public id, public entity) { } }

export class AllNavigationsAction { constructor(public id, public entities) { } }

export class RemoveNavigationAction { constructor(public id, public entity) { } }

export class NavigationsFilterAction { constructor(public id, public term) { } }

export class SetCurrentNavigationAction { constructor(public entity) { } }
