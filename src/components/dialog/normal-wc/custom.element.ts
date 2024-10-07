export class CustomElement extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
      <p>Это мой веб-компонент!</p>
      <button id="myButton">Нажми меня</button>
    `;
        shadow.appendChild(wrapper);

        const button = wrapper.querySelector('#myButton');
        button?.addEventListener('click', () => {
            console.log('Ты нажал меня CustomElement');
        });
    }

    connectedCallback() {
        console.log('MyWebComponent добавлен в DOM');
    }

    disconnectedCallback() {
        console.log('MyWebComponent удален из DOM');
    }
}
