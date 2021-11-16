import CONFIG from './config';

const API_ENDPOINT = {
  HOME: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  IMG_MEDIUM: (id) => `${CONFIG.BASE_IMAGE_URL}medium/${id}`,
  POST_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
