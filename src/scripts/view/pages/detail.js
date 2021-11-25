/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favrestaurant-db';

const Detail = {
  async render() {
    return `
      <div class="restaurant">
        <h2 class="section-title">Detail Restaurant</h2>
        <div id="restaurant-detail" class="restaurant-detail">
 
        </div>
      </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant-detail');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        city: restaurant.city,
        address: restaurant.address,
        pictureId: restaurant.pictureId,
        categories: restaurant.categories,
        menus: restaurant.menus,
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews,
      },
    });

    const formReview = document.querySelector('#reviewForm');
    formReview.addEventListener('submit', (event) => {
      event.preventDefault();

      const InputName = document.querySelector('#InputName').value;
      const InputReview = document.querySelector('#InputReview').value;
      const dataInput = {
        id: url.id,
        name: InputName,
        review: InputReview,
      };
      RestaurantSource.postCostumerReview(dataInput);
    });

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  },
};

export default Detail;
