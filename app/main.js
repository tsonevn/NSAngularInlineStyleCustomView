// this import should be first in order to load some required settings (like globals and reflect-metadata)
// import {nativeScriptBootstrap} from "nativescript-angular/application";
// import {AppComponent} from "./app.component";
"use strict";
// nativeScriptBootstrap(AppComponent);
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var custom_component_1 = require("./custom.component");
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    AppComponentModule = __decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent, custom_component_1.CustomComponent],
            bootstrap: [app_component_1.AppComponent],
            imports: [platform_1.NativeScriptModule],
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponentModule);
    return AppComponentModule;
}());
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=main.js.map