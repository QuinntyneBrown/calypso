import { HeaderComponent } from "./header.component";
import { HeaderActionCreator } from "./header.actions";
import { HeaderService } from "./header.service";
import *  as reducers from "./header.reducers";


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

var app = (<any>angular.module("app.header", [
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

app.service("headerActionCreator",["$location","dispatcher","headerService","guid",HeaderActionCreator]);
app.service("headerService",["$q","apiEndpoint","fetch",HeaderService]);
app.component((HeaderComponent as any).config);

app.config(["reducersProvider", reducersProvider => {	
	reducersProvider.configure(reducers.addHeaderReducer);
    reducersProvider.configure(reducers.allHeadersReducer);
    reducersProvider.configure(reducers.removeHeaderReducer);
}]);
