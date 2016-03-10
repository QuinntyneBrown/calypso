import { LegalComponent } from "./legal.component";
import { LegalActionCreator } from "./legal.actions";
import { LegalService } from "./legal.service";
import *  as reducers from "./legal.reducers";


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

var app = (<any>angular.module("app.legal", [
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

app.service("legalActionCreator",["$location","dispatcher","legalService","guid",LegalActionCreator]);
app.service("legalService",["$q","apiEndpoint","fetch",LegalService]);
app.component((LegalComponent as any).config);

app.config(["reducersProvider", reducersProvider => {	
	reducersProvider.configure(reducers.addLegalReducer);
    reducersProvider.configure(reducers.allLegalsReducer);
    reducersProvider.configure(reducers.removeLegalReducer);
}]);
