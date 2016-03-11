/// <reference path="../../wwwroot/core/component-extension.ts" />

function Component(config: any = {}) {
    return function (cls) {
        config.component = cls;
        cls.config = config;
    };
}

@Component({
    selector: "app",
    templateUrl: "app.html"
})
class AppComponent { }

@Component({
    selector: "home",
    templateUrl: "home.html"
})
class HomeComponent { }

@Component({
    selector: "product",
    templateUrl: "product.html"
})
class ProductComponent { }

@Component({
    selector: "about",
    template: "<h1>What?</h1>"
})
class AboutComponent { }

@Component({
    selector: "contact",
    templateUrl: "contact.html"
})
class ContactComponent { }


var app: any = angular.module("app", [
    "calypso"
]); 

app.component(AppComponent);
app.component(HomeComponent);
app.component(ProductComponent);
app.component(AboutComponent);
app.component(ContactComponent);

app.config(["$routeProvider", ($routeProvider) => {

    $routeProvider
        .when("/", { template: "<home-page></home-page>" })
        .when("/product", { template: "<product-page></product-page>" })
        .when("/about", { template: "<about></about>" })
        .when("/contact", { template: "<contact></contact>" })
        .otherwise("/");
}]);