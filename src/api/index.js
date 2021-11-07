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

export const getQuestionsByProductId = (id, page, count) =>
  baseUrl.get(`/qa/questions?product_id=${id}`);

export const getAnswersBuQuestionId = (question_id, page, count) =>
  baseUrl.get(`/qa/questions/${question_id}/answers`);

export const markQuestionAsHelpful = (question_id) =>
  baseUrl.put(`/qa/questions/${question_id}/helpful`);

export const reportQuestion = (question_id) =>
  baseUrl.put(`/qa/questions/${question_id}/report`);

export const markAnswerAsHelpful = (answer_id) =>
  baseUrl.put(`/qa/answers/${answer_id}/helpful`);

export const createQuestion = ({ body, name, email }, product_id) => {
  return baseUrl({
    method: 'post',
    url: '/qa/questions',
    data: {
      body,
      name,
      email,
      product_id: Number(product_id),
    },
  });
};
export const createAnswer = ({ body, name, email, photos }, question_id) => {
  return baseUrl({
    method: 'post',
    url: `/qa/questions/${question_id}/answers`,
    data: {
      body,
      name,
      email,
      photos,
    },
  });
};

export const reportAnswer = (answer_id) =>
  baseUrl.put(`/qa/answers/${answer_id}/report`);

// const getProductReviewMetaData = (productId) =>
//   baseUrl.get(`/reviews/meta?product_id=${productId}`);

export {
  getAllProducts,
  getProductReviews,
  getProductById,
  getProductStyleById,
};
