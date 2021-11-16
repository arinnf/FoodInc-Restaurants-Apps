import FavoriteRestaurantIdb from '../../data/favrestaurant-db';
import { createRestaurantItemTemplate } from '../templates/template-creator';

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
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
