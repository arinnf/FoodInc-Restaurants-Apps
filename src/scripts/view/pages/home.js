import { createRestaurantItemTemplate } from '../templates/template-creator';
import RestaurantSource from '../../data/restaurant-source';

const Home = {
  async render() {
    return `
        <div class="restaurant">
        <h2 class="section-title">Explore Restaurant</h2>
        <div id="restaurant-list" class="restaurant-list">
 
        </div>
      </div>
      `;
  },

  async afterRender() {
    const { restaurants } = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurant-list');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
