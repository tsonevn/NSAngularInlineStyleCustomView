"use strict";
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
        this.time = 30;
    }
    // public get message(): string {
    //     if (this.counter > 0) {
    //         return this.counter + " taps left";
    //     } else {
    //         return "Hoorraaay! \nYou are ready to start building!";
    //     }
    // }
    AppComponent.prototype.onTap = function () {
        this.counter--;
    };
    AppComponent.prototype.onchange = function (newtime) {
        this.time = newtime;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n<StackLayout style=\"background-color: green;\" width=\"100%\">\n\n        <Label  [text]=\"time + 'minutes'\"></Label>\n        <Label  text=\"Label in first StackLayout\"></Label>\n        <Custom></Custom>\n        <Slider  #sl minValue=1  maxValue=120 [value]=\"time\" (valueChange)=\"onchange(sl.value)\"></Slider>\n    </StackLayout>\n",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map