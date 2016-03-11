require("../core/core.module");

import { ProductPageComponent } from "./product-page.component";
import { ProductPageActionCreator } from "./product-page.actions";
import { ProductPageService } from "./product-page.service";
import *  as reducers from "./product-page.reducers";

var app = (<any>angular.module("app.productPage", [
    "app.core"    
]));

app.service("productPageActionCreator",["$location","dispatcher","productPageService","guid",ProductPageActionCreator]);
app.service("productPageService",["$q","apiEndpoint","fetch",ProductPageService]);

app.component(ProductPageComponent);

app.config(["reducersProvider", reducersProvider => {	
    for (var reducer in reducers) { reducersProvider.configure(reducers[reducer]); }
}]);
