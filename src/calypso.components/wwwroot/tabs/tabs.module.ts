require("./core/core.module");

import { TabContentComponent } from "./tab-content.component";
import { TabTitleComponent } from "./tab-title.component";
import { TabsComponent } from "./tabs.component";
import { TabsActionCreator } from "./tabs.actions";
import { TabsService } from "./tabs.service";
import *  as reducers from "./tabs.reducers";

var app = (<any>angular.module("app.tabs", [
    "app.core"
]));

app.service("tabsActionCreator",["$location","dispatcher","tabsService","guid",TabsActionCreator]);
app.service("tabsService",["$q","apiEndpoint","fetch",TabsService]);
app.component((TabContentComponent as any).config);
app.component((TabTitleComponent as any).config);
app.component((TabsComponent as any).config);

app.config(["reducersProvider", reducersProvider => {	
	reducersProvider.configure(reducers.setCurrentTabReducer);
    reducersProvider.configure(reducers.tabChildLoadedReducer);
}]);
