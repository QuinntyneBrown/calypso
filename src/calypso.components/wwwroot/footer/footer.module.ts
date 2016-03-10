require("../core/core.module");
require("../links-list/links-list.module");
require("../legal/legal.module");
require("../navigation/navigation.module");

import { FooterComponent } from "./footer.component";
import { FooterActionCreator } from "./footer.actions";
import { FooterService } from "./footer.service";
import * as reducers from "./footer.reducers";

var app = (<any>angular.module("app.footer", [
    "app.core",    
    "app.linksList",
    "app.navigation",
    "app.legal"          
]));

app.service("footerActionCreator",["$location","dispatcher","footerService","guid",FooterActionCreator]);
app.service("footerService",["$q","apiEndpoint","fetch",FooterService]);
app.component((FooterComponent as any).config);

app.config(["reducersProvider", reducersProvider => {	
	reducersProvider.configure(reducers.addFooterReducer);
    reducersProvider.configure(reducers.allFootersReducer);
    reducersProvider.configure(reducers.removeFooterReducer);
}]);
