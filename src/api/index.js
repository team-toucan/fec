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

const getProductStyleById = (productId) =>
  baseUrl.get(`/products/${productId}/styles`);

const getRelatedProductsById = (productId) =>
  baseUrl.get(`/products/${productId}/related`);

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

export const getQuestionsByProductId = (id, page, count) =>
  baseUrl.get(`/qa/questions?product_id=${id}`);

export const getAnswersBuQuestionId = (question_id, page, count) =>
  baseUrl.get(`/qa/questions/${question_id}/answers`);

export const createQuestion = (body, name, email, product_id) =>
  baseUrl({
    method: 'post',
    url: '/qa/questions',
    data: {
      body: 'hello how are you',
      name: 'hello there',
      email: 'mmmm@yahoo.com',
      product_id: 39337,
    },
  });

// const getProductReviewMetaData = (productId) =>
//   baseUrl.get(`/reviews/meta?product_id=${productId}`);

export { getAllProducts, getProductReviews };
