class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="footer-copyright" tabindex="0">
        Copyright &copy; 2021 - <strong>FoodInc</strong>
      </div>
        `;
  }
}
customElements.define('footer-copyright', Footer);
