/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import './templates/components/error-message';

// components
import './templates/components/app-bar';
import './templates/components/hero-element';
import './templates/components/footer-copyright';
import './templates/components/page-loader';

class App {
  constructor({
    button, drawer, content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  // eslint-disable-next-line no-underscore-dangle
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    try {
      const url = UrlParser.parseActiveUrlWithCombiner();
      const page = routes[url];
      this._content.innerHTML = await page.render();
      await page.afterRender();
    } catch {
      this._content.innerHTML = '<error-message></error-message>';
    }
  }
}

export default App;
