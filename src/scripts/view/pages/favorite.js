/* eslint-disable array-callback-return */
/* eslint-disable no-trailing-spaces */
import FavoriteRestaurantIdb from '../../data/favrestaurant-db';
import { createEmptyFavorite, createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div class="restaurant">
        <h2 class="section-title">Favorite Restaurant</h2>
        <div id="restaurant-list" class="restaurant-list">
 
        </div>
      </div>
      `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('.restaurant-list');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants.length > 0) {
      restaurants.map((restaurant) => {
        console.log(restaurant.name);
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
    } else {
      restaurantContainer.innerHTML += createEmptyFavorite();
    }

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  },
};

export default Favorite;
