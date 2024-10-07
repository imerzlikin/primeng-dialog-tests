import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <main>
      <h1>Playground</h1>
      <input pInputText type="text" [(ngModel)]="msg" />
      <p>{{ msg }}</p>
    </main>
  `,
  imports: [InputTextModule, FormsModule],
})
export class App {
  msg = '';
}

bootstrapApplication(App);
