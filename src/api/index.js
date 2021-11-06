import axios from 'axios';
import API_KEY from '../../config';


const baseUrl = axios.create({
  baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-nyc',
  headers: { authorization: API_KEY },
});

/*

    Product API calls

*/
const getAllProducts = () => baseUrl.get('/products');

const getProductById = (productId) => baseUrl.get(`/products/${productId}`);

export const getProductStyleById = (productId) =>
  baseUrl.get(`/products/${productId}/styles`);


export const getRelatedProductsById = (productId) => baseUrl.get(`/products/${productId}/related`);

/*

  Review API calls by product ID

*/

const getProductReviews = (productId) =>
  baseUrl.get(`/reviews?product_id=${productId}`);

const getProductReviewMetaData = (productId) =>
  baseUrl.get(`/reviews/meta?product_id=${productId}`);

// const addProductReview = (productId) =>
//   baseUrl.get(`/reviews?product_id=${productId}`);

/*

  Q&A API calls

*/

// const getProductReviewMetaData = (productId) =>
//   baseUrl.get(`/reviews/meta?product_id=${productId}`);

export { getAllProducts, getProductReviews, getProductById};
