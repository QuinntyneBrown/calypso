import { LinksListComponent } from "./links-list.component";
import { LinksListActionCreator } from "./links-list.actions";
import { LinksListService } from "./links-list.service";
import *  as reducers from "./links-list.reducers";


require("../libs/angular");
require("../libs/angular-route");
require("../libs/jQuery");

require("../libs/rx.all.compat.min")
require("../libs/angular");

require("./core/add-or-update");
require("./core/api-endpoint");
require("./core/auth-interceptor");
require("./core/fetch");
require("./core/form-encode");
require("./core/invoke-async");
require("./core/login-redirect-provider");
require("./core/safe-digest");
require("./core/store");
require("./core/local-storage-manager-provider");
require("./core/component-extension");
require("./core/route-resolver");
require("./core/route-when-extension");

var app = (<any>angular.module("app.linksList", [
    "addOrUpdate",
    "apiEndpoint",
    "authInterceptor",
    "fetch",
    "formEncode",
    "invokeAsync",
    "localStorageManager",
    "loginRedirect",
    "routeResolver",
    "routeWhenExtension",
    "safeDigest",
    "store"    
]));

app.service("linksListActionCreator",["$location","dispatcher","linksListService","guid",LinksListActionCreator]);
app.service("linksListService",["$q","apiEndpoint","fetch",LinksListService]);
app.component((LinksListComponent as any).config);

app.config(["reducersProvider", reducersProvider => {	
	reducersProvider.configure(reducers.addLinksListReducer);
    reducersProvider.configure(reducers.allLinksListsReducer);
    reducersProvider.configure(reducers.removeLinksListReducer);
}]);
