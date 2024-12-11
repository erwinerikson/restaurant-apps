import CONFIG from "../scripts/globals/config";

class RestaurantDetail extends HTMLElement {
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
    this._categories = this.getAttribute("categories");
    this._menufoods = this.getAttribute("menufoods");
    this._menudrinks = this.getAttribute("menudrinks");

    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card-detail">
        <div class="card-detail-top">
          <div class="card-detail-img">
            <img tabindex="0" id="card-img" src="${CONFIG.BASE_IMAGE_URL + this._pictureId}" alt='Gambar dari restoran ${this._name}'>
          </div>
          <div class="card-detail-item">
            <div class="card-detail-item-title">
              <div>
                <h3 tabindex="0" class="card-name">${this._name}</h3>
                <p tabindex="0" class="card-city">${this._city}</p>
              </div>
              <div class="rate_widget">
                <img tabindex="0" src="./images/star_full.png" alt="Gambar rating star" />
                <p tabindex="0">${this._rating}</p>
              </div>
            </div>
            <p tabindex="0" class="card-detail-desc">${this._description}</p>
          </div>
        </div>
        <div class="card-detail-bottom">
          <div class="detail-bottom-item-food">
            <p tabindex="0" class="bottom-title">Menu Foods:</p>
            <p tabindex="0" class="bottom-list">${this._menufoods}</p>
          </div>
          <div class="detail-bottom-item-drink">
            <p tabindex="0" class="bottom-title">Menu Drinks:</p>
            <p tabindex="0" class="bottom-list">${this._menudrinks}</p>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("restaurant-detail", RestaurantDetail);
