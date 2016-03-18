require("./core/core.module"); 
require("./header/header.module");
require("./footer/footer.module");
require("./side-nav/side-nav.module");
require("./flip-card/flip-card.module");

require("./home-page/home-page.module");
require("./product-page/product-page.module");

var app: any = angular.module("calypso", [
    "app.core",
    "app.header",
    "app.footer",
    "app.sideNav",
    "app.flipCard",
    "app.homePage",
    "app.productPage",
]);


app.config(["initialStateProvider", "localStorageManagerProvider", (initialStateProvider, localStorageManagerProvider) => {
    var localStorageInitialState = localStorageManagerProvider.get({ name: "initialState" });
    if (!localStorageInitialState)
        localStorageManagerProvider.put({
            name: "initialState", value: {
            }
        });

    initialStateProvider.configure(localStorageManagerProvider.get({ name: "initialState" }));
}]);