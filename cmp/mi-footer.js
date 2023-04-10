class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2023
        Torres Hernandez Gabriel
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
