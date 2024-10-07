export class CustomElement extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `<p>Это мой веб-компонент!</p>`;
        shadow.appendChild(wrapper);
    }

    connectedCallback() {
        console.log('MyWebComponent добавлен в DOM');
        // Дополнительная логика инициализации
    }

    disconnectedCallback() {
        console.log('MyWebComponent удален из DOM');
        // Дополнительная логика очистки
    }
}
