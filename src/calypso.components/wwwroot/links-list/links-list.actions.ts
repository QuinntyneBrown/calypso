import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class LinksListActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, linksListService, guid) {
        super($location,linksListService,dispatcher,guid,AddOrUpdateLinksListAction,AllLinksListsAction,RemoveLinksListAction,SetCurrentLinksListAction)
    }    
}


export class AddOrUpdateLinksListAction { constructor(public id, public entity) { } }

export class AllLinksListsAction { constructor(public id, public entities) { } }

export class RemoveLinksListAction { constructor(public id, public entity) { } }

export class LinksListsFilterAction { constructor(public id, public term) { } }

export class SetCurrentLinksListAction { constructor(public entity) { } }
