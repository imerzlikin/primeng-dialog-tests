import {Component, ViewChild} from '@angular/core';
import {DynamicDialogComponent} from './dynamic-dialog.component';
import {DynamicDialogConfig} from 'primeng/dynamicdialog';

@Component({
    selector: 'app-example',
    template: `
        <button (click)="openDialog()">Открыть диалог</button>
        <app-dynamic-dialog #lookupDialog>
            <!-- контент, который будет отображен внутри диалогового окна -->
            <p>Привет, мир!</p>
        </app-dynamic-dialog>
    `,
    imports: [
        DynamicDialogComponent
    ],
    standalone: true
})
export class ExampleComponent {
    @ViewChild('lookupDialog') lookupDialog!: DynamicDialogComponent;

    constructor() {
    }

    openDialog(): void {
        const config: DynamicDialogConfig<any> = {
            header: 'Заголовок диалога',
            width: '50vw',
            // Другие настройки конфигурации
        };
        this.lookupDialog.open(config);
    }
}
