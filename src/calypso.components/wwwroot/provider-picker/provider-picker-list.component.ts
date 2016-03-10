import { CanActivate, Component } from "../core/component-decorators";
import { ProviderPickerActionCreator } from "./provider-picker.actions";

@Component({
    route: "/providerPicker/list",
    templateUrl: "wwwroot/provider-picker/provider-picker-list.component.html",
    selector: "provider-picker-list",
    providers: ["$location","providerPickerActionCreator"]
})
@CanActivate([
    "providerPickerActionCreator", "invokeAsync",
    (providerPickerActionCreator: ProviderPickerActionCreator, invokeAsync) => invokeAsync(providerPickerActionCreator.all)
])
export class ProviderPickerListComponent {
    constructor(private $location: angular.ILocationService,private providerPickerActionCreator: ProviderPickerActionCreator) { }
    storeOnChange = state =>  this.entities = state.providerPickers;   
    entities;
    remove = providerPicker => this.providerPickerActionCreator.remove({ entity: providerPicker });
    edit = providerPicker => this.providerPickerActionCreator.edit({ entity: providerPicker });    
}
