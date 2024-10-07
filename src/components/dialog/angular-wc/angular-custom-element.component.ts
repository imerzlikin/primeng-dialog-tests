import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
    selector: 'app-my-web',
    template: `<p>Это мой веб-компонент! Привет, {{ name }}!</p>`,
    standalone: true
})
export class AngularCustomElement implements OnInit, OnDestroy {
    @Input() name: string = 'мир';

    ngOnInit() {
        console.log('MyWebComponent добавлен в DOM');
    }

    ngOnDestroy() {
        console.log('MyWebComponent удален из DOM');
    }
}
