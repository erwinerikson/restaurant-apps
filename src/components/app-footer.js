class Footer extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._shadowRoot.innerHTML = `
          <style>
            footer {
              margin-top: 10px;
              background-color: #f6eec9;
            }
            footer p {
              padding: 20px 0px;
              text-align: center;
              font-weight: bold;
              font-size: 1.2em;
              text-shadow: -1px 1px 1px rgba(0,0,0,.4), 1px -1px 0 rgba(255,255,255,1);
            }
          </style>
          <footer class="footer">
            <p tabindex="0">Copyright &copy; 2024 - Best Food</p>
          </footer>
        `;
  }
}

customElements.define("app-footer", Footer);
