import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class SideNavActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, sideNavService, guid) {
        super($location,sideNavService,dispatcher,guid,AddOrUpdateSideNavAction,AllSideNavsAction,RemoveSideNavAction,SetCurrentSideNavAction)
    }    

    onclick = () => this.dispatcher.dispatch(new SideNavClickAction());
}


export class AddOrUpdateSideNavAction { constructor(public id, public entity) { } }

export class AllSideNavsAction { constructor(public id, public entities) { } }

export class RemoveSideNavAction { constructor(public id, public entity) { } }

export class SideNavsFilterAction { constructor(public id, public term) { } }

export class SetCurrentSideNavAction { constructor(public entity) { } }

export class SideNavClickAction { constructor() { } }
