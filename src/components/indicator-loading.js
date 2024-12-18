class IndicatorLoading extends HTMLElement {
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
                #loader {
                    font-size: 20px;
                    margin: 100px auto;
                    width: 1em;
                    height: 1em;
                    border-radius: 50%;
                    position: relative;
                    text-indent: -9999em;
                    -webkit-animation: load 1.3s infinite linear;
                    animation: load 1.3s infinite linear;
                    -webkit-transform: translateZ(0);
                    -ms-transform: translateZ(0);
                    transform: translateZ(0);
                }
                @-webkit-keyframes load {
                    0%,
                    100% {
                        box-shadow: 0 -3em 0 0.2em #ffffff, 2em -2em 0 0em #ffffff, 3em 0 0 -1em #ffffff, 2em 2em 0 -1em #ffffff, 0 3em 0 -1em #ffffff, -2em 2em 0 -1em #ffffff, -3em 0 0 -1em #ffffff, -2em -2em 0 0 #ffffff;
                    }
                    12.5% {
                        box-shadow: 0 -3em 0 0 #ffffff, 2em -2em 0 0.2em #ffffff, 3em 0 0 0 #ffffff, 2em 2em 0 -1em #ffffff, 0 3em 0 -1em #ffffff, -2em 2em 0 -1em #ffffff, -3em 0 0 -1em #ffffff, -2em -2em 0 -1em #ffffff;
                    }
                    25% {
                        box-shadow: 0 -3em 0 -0.5em #ffffff, 2em -2em 0 0 #ffffff, 3em 0 0 0.2em #ffffff, 2em 2em 0 0 #ffffff, 0 3em 0 -1em #ffffff, -2em 2em 0 -1em #ffffff, -3em 0 0 -1em #ffffff, -2em -2em 0 -1em #ffffff;
                    }
                    37.5% {
                        box-shadow: 0 -3em 0 -1em #ffffff, 2em -2em 0 -1em #ffffff, 3em 0em 0 0 #ffffff, 2em 2em 0 0.2em #ffffff, 0 3em 0 0em #ffffff, -2em 2em 0 -1em #ffffff, -3em 0em 0 -1em #ffffff, -2em -2em 0 -1em #ffffff;
                    }
                    50% {
                        box-shadow: 0 -3em 0 -1em #ffffff, 2em -2em 0 -1em #ffffff, 3em 0 0 -1em #ffffff, 2em 2em 0 0em #ffffff, 0 3em 0 0.2em #ffffff, -2em 2em 0 0 #ffffff, -3em 0em 0 -1em #ffffff, -2em -2em 0 -1em #ffffff;
                    }
                    62.5% {
                        box-shadow: 0 -3em 0 -1em #ffffff, 2em -2em 0 -1em #ffffff, 3em 0 0 -1em #ffffff, 2em 2em 0 -1em #ffffff, 0 3em 0 0 #ffffff, -2em 2em 0 0.2em #ffffff, -3em 0 0 0 #ffffff, -2em -2em 0 -1em #ffffff;
                    }
                    75% {
                        box-shadow: 0em -3em 0 -1em #ffffff, 2em -2em 0 -1em #ffffff, 3em 0em 0 -1em #ffffff, 2em 2em 0 -1em #ffffff, 0 3em 0 -1em #ffffff, -2em 2em 0 0 #ffffff, -3em 0em 0 0.2em #ffffff, -2em -2em 0 0 #ffffff;
                    }
                    87.5% {
                        box-shadow: 0em -3em 0 0 #ffffff, 2em -2em 0 -1em #ffffff, 3em 0 0 -1em #ffffff, 2em 2em 0 -1em #ffffff, 0 3em 0 -1em #ffffff, -2em 2em 0 0 #ffffff, -3em 0em 0 0 #ffffff, -2em -2em 0 0.2em #ffffff;
                    }
                }
                @keyframes load {
                    0%,
                    100% {
                        box-shadow: 0 -3em 0 0.2em #ffffff, 2em -2em 0 0em #ffffff, 3em 0 0 -1em #ffffff, 2em 2em 0 -1em #ffffff, 0 3em 0 -1em #ffffff, -2em 2em 0 -1em #ffffff, -3em 0 0 -1em #ffffff, -2em -2em 0 0 #ffffff;
                    }
                    12.5% {
                        box-shadow: 0 -3em 0 0 #ffffff, 2em -2em 0 0.2em #ffffff, 3em 0 0 0 #ffffff, 2em 2em 0 -1em #ffffff, 0 3em 0 -1em #ffffff, -2em 2em 0 -1em #ffffff, -3em 0 0 -1em #ffffff, -2em -2em 0 -1em #ffffff;
                    }
                    25% {
                        box-shadow: 0 -3em 0 -0.5em #ffffff, 2em -2em 0 0 #ffffff, 3em 0 0 0.2em #ffffff, 2em 2em 0 0 #ffffff, 0 3em 0 -1em #ffffff, -2em 2em 0 -1em #ffffff, -3em 0 0 -1em #ffffff, -2em -2em 0 -1em #ffffff;
                    }
                    37.5% {
                        box-shadow: 0 -3em 0 -1em #ffffff, 2em -2em 0 -1em #ffffff, 3em 0em 0 0 #ffffff, 2em 2em 0 0.2em #ffffff, 0 3em 0 0em #ffffff, -2em 2em 0 -1em #ffffff, -3em 0em 0 -1em #ffffff, -2em -2em 0 -1em #ffffff;
                    }
                    50% {
                        box-shadow: 0 -3em 0 -1em #ffffff, 2em -2em 0 -1em #ffffff, 3em 0 0 -1em #ffffff, 2em 2em 0 0em #ffffff, 0 3em 0 0.2em #ffffff, -2em 2em 0 0 #ffffff, -3em 0em 0 -1em #ffffff, -2em -2em 0 -1em #ffffff;
                    }
                    62.5% {
                        box-shadow: 0 -3em 0 -1em #ffffff, 2em -2em 0 -1em #ffffff, 3em 0 0 -1em #ffffff, 2em 2em 0 -1em #ffffff, 0 3em 0 0 #ffffff, -2em 2em 0 0.2em #ffffff, -3em 0 0 0 #ffffff, -2em -2em 0 -1em #ffffff;
                    }
                    75% {
                        box-shadow: 0em -3em 0 -1em #ffffff, 2em -2em 0 -1em #ffffff, 3em 0em 0 -1em #ffffff, 2em 2em 0 -1em #ffffff, 0 3em 0 -1em #ffffff, -2em 2em 0 0 #ffffff, -3em 0em 0 0.2em #ffffff, -2em -2em 0 0 #ffffff;
                    }
                    87.5% {
                        box-shadow: 0em -3em 0 0 #ffffff, 2em -2em 0 -1em #ffffff, 3em 0 0 -1em #ffffff, 2em 2em 0 -1em #ffffff, 0 3em 0 -1em #ffffff, -2em 2em 0 0 #ffffff, -3em 0em 0 0 #ffffff, -2em -2em 0 0.2em #ffffff;
                    }
                }
            </style>
            <div id="loader"></div>
        `;
  }
}

customElements.define("indicator-loading", IndicatorLoading);
