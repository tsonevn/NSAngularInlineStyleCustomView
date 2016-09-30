// this import should be first in order to load some required settings (like globals and reflect-metadata)
// import {nativeScriptBootstrap} from "nativescript-angular/application";
// import {AppComponent} from "./app.component";

// nativeScriptBootstrap(AppComponent);

import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import {CustomComponent} from "./custom.component"

@NgModule({
    declarations: [AppComponent, CustomComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule],
})
class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);