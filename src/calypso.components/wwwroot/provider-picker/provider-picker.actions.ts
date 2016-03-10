import { IDispatcher } from "../core/store";
import { BaseActionCreator } from "../core/action-creator";

export class ProviderPickerActionCreator extends BaseActionCreator {
    constructor($location: angular.ILocationService, dispatcher: IDispatcher, providerPickerService, guid) {
        super($location,providerPickerService,dispatcher,guid,AddOrUpdateProviderPickerAction,AllProviderPickersAction,RemoveProviderPickerAction,SetCurrentProviderPickerAction)
    }    
}


export class AddOrUpdateProviderPickerAction { constructor(public id, public entity) { } }

export class AllProviderPickersAction { constructor(public id, public entities) { } }

export class RemoveProviderPickerAction { constructor(public id, public entity) { } }

export class ProviderPickersFilterAction { constructor(public id, public term) { } }

export class SetCurrentProviderPickerAction { constructor(public entity) { } }
