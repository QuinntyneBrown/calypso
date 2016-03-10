import { FooterComponent } from "./footer.component";
import { FooterActionCreator } from "./footer.actions";
import { FooterService } from "./footer.service";
import *  as reducers from "./footer.reducers";

require("../links-list/links-list.module");
require("../legal/legal.module");
require("../navigation/navigation.module");

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

var app = (<any>angular.module("app.footer", [
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
    "store",
    
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
