class LikedButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <button aria-label="unlike this restaurant" id="likedButton" class="like">
              <i class="fa fa-heart" aria-hidden="true"></i>
            </button>
          `;
  }
}

customElements.define("liked-button", LikedButton);
