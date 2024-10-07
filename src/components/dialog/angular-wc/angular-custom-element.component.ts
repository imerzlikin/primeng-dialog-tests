import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'app-my-web',
    template: `
        <p>Это мой веб-компонент!</p>
        <button (click)="onClick()">Нажми меня</button>
    `,
    standalone: true
})
export class AngularCustomElement implements OnInit, OnDestroy {
    ngOnInit() {
        console.log('MyWebComponent добавлен в DOM');
    }

    ngOnDestroy() {
        console.log('MyWebComponent удален из DOM');
    }

    onClick() {
        console.log('Ты нажал меня')
    }
}
