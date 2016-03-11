/// <reference path="../../wwwroot/core/component-extension.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Component(config) {
    if (config === void 0) { config = {}; }
    return function (cls) {
        config.component = cls;
        cls.config = config;
    };
}
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Component({
            selector: "app",
            templateUrl: "app.html"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        Component({
            selector: "home",
            templateUrl: "home.html"
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
})();
var ProductComponent = (function () {
    function ProductComponent() {
    }
    ProductComponent = __decorate([
        Component({
            selector: "product",
            templateUrl: "product.html"
        }), 
        __metadata('design:paramtypes', [])
    ], ProductComponent);
    return ProductComponent;
})();
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Component({
            selector: "about",
            template: "<h1>What?</h1>"
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
})();
var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent = __decorate([
        Component({
            selector: "contact",
            templateUrl: "contact.html"
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
})();
var app = angular.module("app", [
    "ngRoute",
    "calypso"
]);
app.component(AppComponent);
app.component(HomeComponent);
app.component(ProductComponent);
app.component(AboutComponent);
app.component(ContactComponent);
app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/", { template: "<h1>???</h1>" })
            .when("/product", { template: "<product></product>" })
            .when("/about", { template: "<about></about>" })
            .when("/contact", { template: "<contact></contact>" })
            .otherwise("/");
    }]);
//# sourceMappingURL=app.js.map