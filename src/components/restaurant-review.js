class RestaurantReview extends HTMLElement {
  static observedAttributes = ["name", "review", "date"];

  constructor() {
    super();
    this._name = "";
    this._review = "";
    this._date = "";
  }

  connectedCallback() {
    this._name = this.getAttribute("name");
    this._review = this.getAttribute("review");
    this._date = this.getAttribute("date");

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card-review" id="card-review">
        <div class="review-content">
          <div class="review-content-item">
            <p tabindex="0" class="review-label">Name</p>
            <p class="review-colon">:</p>
            <p tabindex="0" class="review-name">${this._name}</p>
          </div>
          <div class="review-content-item">
            <p tabindex="0" class="review-label">Review</p>
            <p class="review-colon">:</p>
            <p tabindex="0" class="review">${this._review}</p>
          </div>
          <div class="review-content-item">
            <p tabindex="0" class="review-label">Tanggal</p>
            <p class="review-colon">:</p>
            <p tabindex="0" class="review-date">${this._date}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("restaurant-review", RestaurantReview);
