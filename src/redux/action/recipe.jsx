import axios from "axios";

export const getRecipe = (limit = 6, page) => {
  return {
    type: "GET_LIST_RECIPE",
    payload: axios({
      method: "POST",
      url: `${
        process.env.REACT_APP_BACKEND_URL
      }/recipe/list/desc?limit=${limit}${page ? `&page=${page}` : ""}`,
    }),
  };
};
