import CONFIG from "../globals/config";
import TheRestaurantDbSource from "../data/therestaurantdb-source";
import formValidation from "../form-validation";
import Toast from "./alert";
import "../../components/index";

const CommentForm = {
  init({ form, loading }) {
    this._loading = loading;
    this._commentForm(form);
  },

  _commentForm(form) {
    formValidation(form);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      this._showLoading(true);

      const id = form.elements.id.value;
      const name = form.elements.nama.value;
      const review = form.elements.body.value;

      const newReview = {
        id,
        name,
        review,
      };

      await this._commentSend(newReview);

      form.reset();
      document.querySelector("#idRest").value = id;
      this._showLoading(false);
    });
  },

  async _commentSend(review) {
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      };
      const response = await fetch(`${CONFIG.BASE_URL}/review`, options);
      const responseJson = await response.json();
      await toast(responseJson);
      if (responseJson.message == "success") {
        await reloadReview(review.id);
      }
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error,
      });
    }
  },

  _showLoading(show) {
    this._loading.style.display = show ? "flex" : "none";
  },
};

async function toast(response) {
  let _icon = "info";
  let _title = "Terjadi kesalahan.";

  if (response.message == "success") {
    _icon = "success";
    _title = "Review berhasil di simpan.";
  } else if (response.status == "error") {
    _icon = "error";
    _title = "Gagal!, Silahkan ulangi!";
  }

  Toast.fire({
    icon: _icon,
    title: _title,
  });
}

async function reloadReview(id) {
  const data = await TheRestaurantDbSource.detailRestaurant(id);
  const detailReviewContainer = document.querySelector(
    "#restaurant-detail-review",
  );
  await removeData();
  data.customerReviews.forEach((review) => {
    detailReviewContainer.append(createRestDetailReviewElement(review));
  });
}

function createRestDetailReviewElement(data) {
  const restElement = document.createElement("restaurant-review");
  restElement.setAttribute("name", data.name);
  restElement.setAttribute("review", data.review);
  restElement.setAttribute("date", data.date);

  return restElement;
}

async function removeData() {
  const cardReviews = document.querySelectorAll("#card-review");
  cardReviews.forEach((cardReview) => {
    cardReview.remove();
  });
}

export default CommentForm;
