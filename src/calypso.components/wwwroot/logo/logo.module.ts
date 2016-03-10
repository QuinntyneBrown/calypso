import { LogoComponent } from "./logo.component";
import { LogoActionCreator } from "./logo.actions";
import { LogoService } from "./logo.service";
import *  as reducers from "./logo.reducers";


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

var app = (<any>angular.module("app.logo", [
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

app.service("logoActionCreator",["$location","dispatcher","logoService","guid",LogoActionCreator]);
app.service("logoService",["$q","apiEndpoint","fetch",LogoService]);
app.component((LogoComponent as any).config);

app.config(["reducersProvider", reducersProvider => {	
	reducersProvider.configure(reducers.addLogoReducer);
    reducersProvider.configure(reducers.allLogosReducer);
    reducersProvider.configure(reducers.removeLogoReducer);
}]);
