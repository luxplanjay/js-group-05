import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const getAllRecipes = () => {
  return axios
    .get(`${BASE_URL}/recipes`)
    .then(response => response.data)
    .catch(err => console.log(err));
};

export const addRecipe = recipe => {
  return axios
    .post(`${BASE_URL}/recipes`, recipe)
    .then(response => response.data)
    .catch(err => console.log(err));
};

export const deleteRecipe = id => {
  return axios
    .delete(`${BASE_URL}/recipes/${id}`)
    .catch(err => console.log(err));
};
