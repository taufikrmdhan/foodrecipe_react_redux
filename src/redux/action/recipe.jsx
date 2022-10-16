import axios from "axios";

export const getRecipe = () => {
  return {
    type: "GET_LIST_RECIPE",
    payload: axios({
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}/recipe/list/asc`,
    }),
  };
};

