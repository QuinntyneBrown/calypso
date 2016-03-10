import { NavigationComponent } from "./navigation.component";
import { NavigationActionCreator } from "./navigation.actions";
import { NavigationService } from "./navigation.service";
import *  as reducers from "./navigation.reducers";


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

var app = (<any>angular.module("app.navigation", [
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

app.service("navigationActionCreator",["$location","dispatcher","navigationService","guid",NavigationActionCreator]);
app.service("navigationService",["$q","apiEndpoint","fetch",NavigationService]);
app.component((NavigationComponent as any).config);

app.config(["reducersProvider", reducersProvider => {	
	reducersProvider.configure(reducers.addNavigationReducer);
    reducersProvider.configure(reducers.allNavigationsReducer);
    reducersProvider.configure(reducers.removeNavigationReducer);
}]);
