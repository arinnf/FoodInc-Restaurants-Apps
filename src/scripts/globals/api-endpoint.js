import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  IMG_SMALL: (id) => `${CONFIG.BASE_IMAGE_URL}small/${id}`,
  IMG_MEDIUM: (id) => `${CONFIG.BASE_IMAGE_URL}medium/${id}`,
  IMG_LARGE: (id) => `${CONFIG.BASE_IMAGE_URL}large/${id}`,
  POST_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
