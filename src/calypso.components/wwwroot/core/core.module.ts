﻿/// <reference path="../../typings/tsd.d.ts" />

require("../../libs/jquery");
require("../../libs/rx.all.compat.min")

require("./local-storage-manager-provider");
require("./store");

require("./add-or-update");
require("./api-endpoint-provider");
require("./fetch");
require("./form-encode");
require("./invoke-async");
require("./login-redirect-provider");
require("./safe-digest");
require("./component-extension");
require("./route-resolver");
require("./route-when-extension");

var app = (<any>angular.module("app.core", [
    "addOrUpdate",
    "apiEndpoint",
    "fetch",
    "formEncode",
    "invokeAsync",
    "localStorageManager",
    "loginRedirect",
    "routeResolver",
    "routeWhenExtension",
    "safeDigest",
    "store",   
]));
