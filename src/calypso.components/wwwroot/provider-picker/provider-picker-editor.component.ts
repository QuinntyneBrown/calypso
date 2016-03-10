import { CanActivate, Component } from "../core/component-decorators";
import { ProviderPickerActionCreator } from "./provider-picker.actions";

@Component({
    route: "/provider-picker/edit/:id",
    templateUrl: "wwwroot/provider-picker/provider-picker-editor.component.html",
    selector: "provider-picker-editor",
    providers: ["$location","providerPickerActionCreator","invokeAsync"]
})
@CanActivate(["$route", "invokeAsync", "providerPickerActionCreator", ($route, invokeAsync, providerPickerActionCreator: ProviderPickerActionCreator) => {
    var id = $route.current.params.id;
    return invokeAsync({
        action: providerPickerActionCreator.getById,
        params: { id: id }
    });
}])
export class ProviderPickerEditorComponent {
    constructor(private $location: angular.ILocationService, private providerPickerActionCreator: ProviderPickerActionCreator, private invokeAsync) { }

    storeOnChange = state => { }

    addOrUpdate = () => {
        this.invokeAsync({
            action: this.providerPickerActionCreator.addOrUpdate,
            params: {
                data: {
                    id: this.id,
                }
            }
        }).then(() => {
            if (!this.id && this.entities.filter(entity => entity.name === this.name).length > 0) {

            }
            else {

            }
        });
    } 
    
    create = () => {
        this.providerPickerActionCreator.create();
    }

    remove = () => this.providerPickerActionCreator.remove({ id: this.id });
         
    id;
	name;
	entities;
    baseUrl;
}
