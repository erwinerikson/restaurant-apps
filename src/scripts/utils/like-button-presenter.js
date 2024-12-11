import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import '../../components/index';
import Toast from './alert';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, data }) {
    this._likeButtonContainer = likeButtonContainer;
    this._data = data;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._data;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    const likeElement = document.createElement("like-button");
    this._likeButtonContainer.append(likeElement);

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._data);
      this._renderButton();
      this._showToast('Restaurant berhasil di like.');
    });
  },

  _renderLiked() {
    const likedElement =  document.createElement("liked-button");
    this._likeButtonContainer.append(likedElement);

    const likeButton = document.querySelector('#likedButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._data.id);
      this._renderButton();
      this._showToast('Restaurant berhasil di unlike.');
    });
  },

  _showToast(title) {
    Toast.fire({
        icon: "success",
        title: title,
    });
  },
};

export default LikeButtonPresenter;