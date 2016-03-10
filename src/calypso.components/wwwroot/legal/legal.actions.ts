import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class LegalActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, legalService, guid) {
        super($location,legalService,dispatcher,guid,AddOrUpdateLegalAction,AllLegalsAction,RemoveLegalAction,SetCurrentLegalAction)
    }    
}


export class AddOrUpdateLegalAction { constructor(public id, public entity) { } }

export class AllLegalsAction { constructor(public id, public entities) { } }

export class RemoveLegalAction { constructor(public id, public entity) { } }

export class LegalsFilterAction { constructor(public id, public term) { } }

export class SetCurrentLegalAction { constructor(public entity) { } }
