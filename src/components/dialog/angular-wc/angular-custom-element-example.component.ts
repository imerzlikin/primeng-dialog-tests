import {Component, CUSTOM_ELEMENTS_SCHEMA, Injector} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {createCustomElement} from "@angular/elements";
import {AngularCustomElement} from "./angular-custom-element.component";

@Component({
    selector: 'app-angular-custom-element-example',
    template: `
        <h2>Пример диалога с веб-компонентом Angular</h2>
        
        <button (click)="openDialog()">Открыть диалог</button>

        <p-dialog [(visible)]="display" [modal]="true" [style]="{width: '50vw'}" [header]="header">
            <angular-custom-element></angular-custom-element>
        </p-dialog>
    `,
    imports: [
        DialogModule
    ],
    standalone: true,
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AngularCustomElementExampleComponent {
    header = "Окно с веб-компонентом";
    display = false;

    constructor(private injector: Injector) {
        const customElement = createCustomElement(AngularCustomElement, {injector});
        customElements.define('angular-custom-element', customElement);
    }

    openDialog(): void {
        this.display = true
    }
}
