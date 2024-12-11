import UrlParser from "../../routes/url-parser.js";
import TheRestaurantDbSource from "../../data/therestaurantdb-source.js";
import LikeButtonPresenter from "../../utils/like-button-presenter.js";
import "../../../components/index.js";

const Detail = {
  async render() {
    return `
            <h2 tabindex="0" class="maincontent__title">Detail</h2>
            <section class="rest-detail-container" id="rest-detail-container">
              <div id="restaurant-detail-top"></div>
              <h3 tabindex="0" class="maincontent__review">Customer Reviews</h3>
              <div id="restaurant-detail-review"></div>
              <div id="likeButtonContainer"></div>
            </section>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const data = await TheRestaurantDbSource.detailRestaurant(url.id);

    document.querySelector("#idRest").value = url.id;

    const detailTopContainer = document.querySelector("#restaurant-detail-top");
    detailTopContainer.append(createRestDetailTopElement(data));
    const detailReviewContainer = document.querySelector(
      "#restaurant-detail-review",
    );
    data.customerReviews.forEach((review) => {
      detailReviewContainer.append(createRestDetailReviewElement(review));
    });

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      data: {
        id: data.id,
        name: data.name,
        city: data.city,
        rating: data.rating,
        pictureId: data.pictureId,
      },
    });
  },
};

function createRestDetailTopElement(data) {
  const restElement = document.createElement("restaurant-detail");
  restElement.setAttribute("id", data.id);
  restElement.setAttribute("pictureId", data.pictureId);
  restElement.setAttribute("name", data.name);
  restElement.setAttribute("city", data.city);
  restElement.setAttribute("rating", data.rating);
  restElement.setAttribute("description", data.description);
  let menu_foods = "";
  data.menus.foods.forEach((food) => {
    menu_foods += food.name + ".<br>";
  });
  restElement.setAttribute("menufoods", menu_foods);
  let menu_drinks = "";
  data.menus.drinks.forEach((drink) => {
    menu_drinks += drink.name + ".<br>";
  });
  restElement.setAttribute("menudrinks", menu_drinks);

  return restElement;
}

function createRestDetailReviewElement(data) {
  const restElement = document.createElement("restaurant-review");
  restElement.setAttribute("name", data.name);
  restElement.setAttribute("review", data.review);
  restElement.setAttribute("date", data.date);

  return restElement;
}

export default Detail;
