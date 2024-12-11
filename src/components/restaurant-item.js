import CONFIG from "../scripts/globals/config";

class RestaurantItem extends HTMLElement {
  static observedAttributes = [
    "id",
    "pictureid",
    "name",
    "city",
    "rating",
    "description",
  ];

  constructor() {
    super();
    this._id = "";
    this._pictureId = "";
    this._name = "";
    this._city = "";
    this._rating = "";
    this._description = "";
    this._full = "";
  }

  connectedCallback() {
    this._id = this.getAttribute("id");
    this._pictureId = this.getAttribute("pictureId");
    this._name = this.getAttribute("name");
    this._city = this.getAttribute("city");
    this._rating = this.getAttribute("rating");
    this._description = this.getAttribute("description");

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card-home">
        <div class="card-item">
          <img tabindex="0" class="lazyload" id="card-img" data-src="${CONFIG.BASE_IMAGE_URL + this._pictureId}" alt='Gambar dari restoran ${this._name}'>
          <h3 tabindex="0" class="card-name">${this._name}</h3>
          <p tabindex="0" class="card-city">${this._city}</p>
          <div class="card-item-bottom">
          <div class="rate_widget">
            <img tabindex="0" src="./images/star_full.png" alt="Gambar rating star" />
            <p tabindex="0">${this._rating}</p>
          </div>
          <a href="/#/detail/${this._id}" class="card-name-link">Lihat Detail &#x27a4;</a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("restaurant-item", RestaurantItem);
