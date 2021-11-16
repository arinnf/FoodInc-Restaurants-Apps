import API_ENDPOINT from '../../globals/api-endpoint';
import * as func from './fraction-creator';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="restaurant-detail__card" tabindex="0" data-id="${restaurant.id}>
        <div class="card-body">
            <img class="card-image" src="${API_ENDPOINT.IMG_MEDIUM(restaurant.pictureId)}" alt="Gambar Restaurant ${restaurant.name}"/>
            <h2 class="card-title">${restaurant.name}</h2>
            <div class="card-info">
                <h3>Information</h3>
                    <h4 tabindex="0">Name</h4>
                    <p tabindex="0">${restaurant.name}</p>
                    <h4 tabindex="0">Address</h4>
                    <p tabindex="0">${restaurant.address}</p>
                    <h4 tabindex="0">City</h4>
                    <p tabindex="0">${restaurant.city}</p>
                    <h4 tabindex="0">Rating</h4>
                    <p tabindex="0">${restaurant.rating}</p>
                    <div class="card-menu__food">
                        <h4 tabindex="0">Foods</h4>
                        <ul>
                            ${func.createRestaurantDetailMenus(restaurant, 'foods')}
                        </ul>
                    </div>
                    <div class="card-menu__drink">
                        <h4 tabindex="0">Drinks</h4>
                        <ul>
                            ${func.createRestaurantDetailMenus(restaurant, 'drinks')}
                        </ul>
                    </div>
                </div>
                <div class="card-description">
                    <h3 tabindex="0">Description</h3>
                    <p>${restaurant.description}</p>
                </div>
            </div>
                <div class="restaurant-review__card">
                    <h2 class="section-title" tabindex="0">Review</h2>
                    <div>
                        ${func.createRestaurantDetailReviews(restaurant)}
                    </div>
                </div>
                <h2 class="section-title" tabindex="0">Input Customer Review</h2>
                <div class="restaurant-review__form">
                    ${func.createRestaurantDetailForm(restaurant)}
                </div>
    </div>
    <div id="likeButtonContainer"></div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="restaurant-item__card" tabindex="0" data-id="${restaurant.id}">
    <img src="${API_ENDPOINT.IMG_MEDIUM(restaurant.pictureId)}" class="card-image" alt="">
    <div class="card-body">
        <div class="icon">
            <div class="rating" aria-label="${restaurant.rating} stars."><i class="rating-icon fas fa-star fa-fw"></i>${restaurant.rating}</div>
            <div class="location" aria-label="Location at ${restaurant.city} city."><i class="location-icon fas fa-map-marker-alt fa-fw"></i>${restaurant.city}</div>
        </div>
        <h3 class="card-title">${restaurant.name}</h3>
        <p class="card-description">${restaurant.description}</p>
    </div>
    <a href="#/detail/${restaurant.id}" aria-label="Detail of ${restaurant.name}" class="btn-detail">Detail</a>
    </div>
  `;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
};
