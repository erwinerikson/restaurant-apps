import TheRestaurantDbSource from "../../data/therestaurantdb-source.js";
import "../../../components/index.js";

const Home = {
  async render() {
    return `
            <h2 tabindex="0" class="maincontent__title">Explore Restaurant</h2>
            <section class="rest-container" id="rest-container">
              <div id="restaurant-lists"></div>
            </section>
          `;
  },

  async afterRender() {
    const rest = await TheRestaurantDbSource.listRestaurants();
    const restContainer = document.querySelector("#restaurant-lists");
    for (const restItem of rest) {
      restContainer.append(createRestElement(restItem));
    }
  },
};

function createRestElement(restItem) {
  const restElement = document.createElement("restaurant-item");
  restElement.setAttribute("id", restItem.id);
  restElement.setAttribute("pictureId", restItem.pictureId);
  restElement.setAttribute("name", restItem.name);
  restElement.setAttribute("city", restItem.city);
  restElement.setAttribute("rating", restItem.rating);
  restElement.setAttribute("description", restItem.description);

  return restElement;
}

export default Home;
