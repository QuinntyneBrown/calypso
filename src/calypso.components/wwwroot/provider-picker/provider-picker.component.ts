import { CanActivate, Component } from "../core/component-decorators";
import { ProviderPickerActionCreator } from "./provider-picker.actions";

@Component({
    templateUrl: "wwwroot/provider-picker/provider-picker.component.html",
    selector: "provider-picker",
    providers: ["providerPickerActionCreator"]
})
export class ProviderPickerComponent {
    constructor(private providerPickerActionCreator: ProviderPickerActionCreator) { }
  
}
