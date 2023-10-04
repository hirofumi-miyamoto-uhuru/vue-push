import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register';

registerSW();

createApp(App).mount('#app')

const isPWA = window.matchMedia("(display-mode: standalone)").matches;

isPWA
  ? addElement("div", "これは PWA です")
  : addElement("div", "これは PWA ではありません");

function addElement(el: string, inner: string) {
  const createdElement = document.createElement(el);
  createdElement.innerHTML = inner;
  document.body.append(createdElement);
}
