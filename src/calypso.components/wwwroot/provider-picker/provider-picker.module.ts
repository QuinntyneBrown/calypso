require("../core/core.module");

import { ProviderPickerEditorComponent } from "./provider-picker-editor.component";
import { ProviderPickerListComponent } from "./provider-picker-list.component";
import { ProviderPickerComponent } from "./provider-picker.component";
import { ProviderPickerActionCreator } from "./provider-picker.actions";
import { ProviderPickerService } from "./provider-picker.service";
import *  as reducers from "./provider-picker.reducers";

var app = (<any>angular.module("app.providerPicker", [
    "app.core"    
]));

app.service("providerPickerActionCreator",["$location","dispatcher","providerPickerService","guid",ProviderPickerActionCreator]);
app.service("providerPickerService",["$q","apiEndpoint","fetch",ProviderPickerService]);
app.component((ProviderPickerEditorComponent as any).config);
app.component((ProviderPickerListComponent as any).config);
app.component((ProviderPickerComponent as any).config);

app.config(["reducersProvider", reducersProvider => {	
	reducersProvider.configure(reducers.addProviderPickerReducer);
    reducersProvider.configure(reducers.allProviderPickersReducer);
    reducersProvider.configure(reducers.removeProviderPickerReducer);
}]);
