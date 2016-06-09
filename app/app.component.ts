import {Component} from "@angular/core";
import {CustomComponent} from "./custom.component"

@Component({
    selector: "my-app",
    directives:[CustomComponent],
    template: `
<StackLayout style="background-color: green;" >
        <Label text="Label in first StackLayout"></Label>
        <Custom></Custom>
    </StackLayout>
`,
})
export class AppComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }
}
