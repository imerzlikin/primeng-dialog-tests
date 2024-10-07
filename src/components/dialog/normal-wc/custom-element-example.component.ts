import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {DialogModule} from "primeng/dialog";
import {CustomElement} from "./custom.element";

@Component({
    selector: 'app-custom-element-example',
    template: `
        <h2>Пример диалога с обычным веб-компонентом</h2>
        
        <button (click)="openDialog()">Открыть диалог</button>

        <p-dialog [(visible)]="display" [modal]="true" [style]="{width: '50vw'}" [header]="header">
            <custom-element></custom-element>
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
export class CustomElementExampleComponent {
    header = "Окно с веб-компонентом";
    display = false;

    constructor() {
        // Регистрируем веб-компонент
        customElements.define('custom-element', CustomElement);
    }

    openDialog(): void {
        this.display = true
    }
}
