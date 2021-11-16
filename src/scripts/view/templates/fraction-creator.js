/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
const createRestaurantDetailMenus = (restaurant, menu) => {
  const data = restaurant.menus;
  let result = '';
  switch (menu) {
    case 'foods':
      const dataFoods = data.foods;
      dataFoods.forEach((food) => {
        result += `<li tabindex="0">${food.name}</li>`;
      });
      break;
    case 'drinks':
      const dataDrinks = data.drinks;
      dataDrinks.forEach((drink) => {
        result += `<li tabindex="0">${drink.name}</li>`;
      });
      break;
    default:
      return;
  }
  return result;
};

const createRestaurantDetailReviews = (restaurant) => {
  const data = restaurant.customerReviews;
  let result = '';
  data.forEach((personReview) => {
    result += `
        <div class="card-review">
          <h4 tabindex="0">${personReview.review}</h4>
          <p tabindex="0"><i class="fa fa-user"></i> ${personReview.name}, ${personReview.date}</p>
        </div>
      `;
  });
  return result;
};

const createRestaurantDetailForm = () => `
      <form method="POST" id="reviewForm">
        <label for="inputName" class="form-name">Name</label>
        <input type="text" id="inputName" name="inputName" placeholder="Input Your Name" aria-label="Input Your Name" required>
        <label for="inputReview" class="form-review">Review</label>
        <textarea name="inputReview" id="inputReview" rows="5" placeholder="Input Your Review" aria-label="Input Your Review" required></textarea>
        <button type="submit" id="submitReview" class="btn-submit">Send Review</button>
      </form>
    `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailMenus,
  createRestaurantDetailReviews,
  createRestaurantDetailForm,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
