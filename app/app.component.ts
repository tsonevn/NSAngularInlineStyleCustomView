import {Component} from "@angular/core";
import {CustomComponent} from "./custom.component"

@Component({
    selector: "my-app",
    directives:[CustomComponent],
    template: `
<StackLayout style="background-color: green;" width="100%">

        <Label  [text]="time + 'minutes'"></Label>
        <Label  text="Label in first StackLayout"></Label>
        <Custom></Custom>
        <Slider  #sl minValue=1  maxValue=120 [value]="time" (valueChange)="onchange(sl.value)"></Slider>
    </StackLayout>
`,
})
export class AppComponent {
    public counter: number = 16;
    public time:number=30;
    // public get message(): string {
    //     if (this.counter > 0) {
    //         return this.counter + " taps left";
    //     } else {
    //         return "Hoorraaay! \nYou are ready to start building!";
    //     }
    // }
    
    public onTap() {
        this.counter--;
    }
    public onchange(newtime){
        this.time=newtime;
    }
}
