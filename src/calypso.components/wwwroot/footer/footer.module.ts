require("../core/core.module");

import { FooterComponent } from "./footer.component";
import { FooterActionCreator } from "./footer.actions";
import { FooterService } from "./footer.service";
import * as reducers from "./footer.reducers";

var app = (<any>angular.module("app.footer", [
    "app.core"            
]));

app.service("footerActionCreator",["$location","dispatcher","footerService","guid",FooterActionCreator]);
app.service("footerService",["$q","apiEndpoint","fetch",FooterService]);
app.component(FooterComponent);

app.config(["reducersProvider", reducersProvider => {	
	reducersProvider.configure(reducers.addFooterReducer);
    reducersProvider.configure(reducers.allFootersReducer);
    reducersProvider.configure(reducers.removeFooterReducer);
}]);
