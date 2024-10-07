import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import {DialogModule} from "primeng/dialog";

@Component({
  selector: 'app-dynamic-dialog',
  template: `
    <p-dialog [(visible)]="display" [modal]="true" [style]="{width: '50vw'}">
      <ng-content></ng-content>
    </p-dialog>
  `,
  imports: [
    DialogModule
  ],
  standalone: true
})
export class DynamicDialogComponent implements OnInit {
  display = false;

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  open(config: DynamicDialogConfig<any>): void {
    this.display = true;
    this.dialogService.open(DynamicDialogComponent, config);
  }

  close(): void {
    this.display = false;
  }
}
