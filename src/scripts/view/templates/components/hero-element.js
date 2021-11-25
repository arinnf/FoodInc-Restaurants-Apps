/* eslint-disable linebreak-style */
class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero" aria-label="jumbotron" style="background-image: url(./images/heros/hero-image_4.jpg);">
      <div class="hero-container">
          <div class="hero-detail">
              <h1 class="hero-title" tabindex="0">FoodInc</h1>
              <p class="hero-description" tabindex="0">Your favorite restaurant is all in here!</p>
          </div>
      </div>
  </div>
        `;
  }
}

customElements.define('hero-element', HeroElement);
