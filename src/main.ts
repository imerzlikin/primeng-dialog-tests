import {Component, importProvidersFrom} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {bootstrapApplication} from '@angular/platform-browser';
import 'zone.js';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
    AngularCustomElementExampleComponent
} from "./components/dialog/angular-wc/angular-custom-element-example.component";
import {CustomElementExampleComponent} from "./components/dialog/normal-wc/custom-element-example.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
        <main>
            <app-angular-custom-element-example></app-angular-custom-element-example>
            <app-custom-element-example></app-custom-element-example>
        </main>
    `,
    imports: [InputTextModule, FormsModule, AngularCustomElementExampleComponent, CustomElementExampleComponent],
})
export class App {
    msg = '';
}

bootstrapApplication(App, {
    providers: [importProvidersFrom([BrowserAnimationsModule])]
});
