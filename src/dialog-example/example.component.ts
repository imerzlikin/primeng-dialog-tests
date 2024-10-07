import { Component, ViewChild } from '@angular/core';
import { LookupDialogComponent } from './lookup-dialog.component';

@Component({
  selector: 'app-example',
  template: `
    <button (click)="openDialog()">Открыть диалог</button>
    <app-lookup-dialog #lookupDialog>
      <!-- контент, который будет отображен внутри диалогового окна -->
      <p>Привет, мир!</p>
    </app-lookup-dialog>
  `,
})
export class ExampleComponent {
  @ViewChild('lookupDialog') lookupDialog: LookupDialogComponent;

  openDialog(): void {
    this.lookupDialog.open(null);
  }
}
