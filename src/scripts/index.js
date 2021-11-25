/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */
import 'regenerator-runtime'; /* for async await transpile */
import '@fortawesome/fontawesome-free/js/all';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// components
import './view/templates/components/app-bar';
import './view/templates/components/hero-element';
import './view/templates/components/error-message';
import './view/templates/components/footer-copyright';

// css file
import '../styles/main.css';
import '../styles/responsive.css';

import swRegister from './utils/sw-register';
import App from './view/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
