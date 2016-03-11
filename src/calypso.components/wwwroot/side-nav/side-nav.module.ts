require("../core/core.module");

import { SideNavComponent } from "./side-nav.component";
import { SideNavActionCreator } from "./side-nav.actions";
import { SideNavService } from "./side-nav.service";
import *  as reducers from "./side-nav.reducers";

var app = (<any>angular.module("app.sideNav", [
    "app.core"    
]));

app.service("sideNavActionCreator",["$location","dispatcher","sideNavService","guid",SideNavActionCreator]);
app.service("sideNavService",["$q","apiEndpoint","fetch",SideNavService]);
app.component(SideNavComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
