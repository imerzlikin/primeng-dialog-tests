import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-lookup-dialog',
  template: `
    <p-dialog [(visible)]="display" [modal]="true" [style]="{width: '50vw'}">
      <ng-content></ng-content>
    </p-dialog>
  `,
})
export class LookupDialogComponent implements OnInit {
  display = false;

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  open(content: any): void {
    this.display = true;
    this.dialogService.open(content, 'lookup-dialog');
  }

  close(): void {
    this.display = false;
  }
}
