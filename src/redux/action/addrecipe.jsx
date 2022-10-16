import axios from "axios";
export const uploadImage = (fileImage) => {
  return {
    type: "UPLOAD_IMAGE",
    payload: fileImage
  };
};

export const resetImage = () => {
  return {
    type: "RESET_IMAGE",
  };
}

export const createRecipe = (form) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/recipe/add`, form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const deleteRecipe = (id_recipe) => {
  return new Promise((resolve, reject) => {
    axios
    .delete(`${process.env.REACT_APP_BACKEND_URL}/recipe/delete/${id_recipe}`)
    .then((res) => {
      resolve(res.data);
    })
    .catch((err) => {
      reject(err);
    });
  });
}
// export const createRecipe = (form) => {
//   return {
//     type: "CREATE_RECIPE",
//     payload: axios({
//       method: "POST",
//       url: `${process.env.REACT_APP_BACKEND_URL}/recipe/add`,form,
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       },
//     })
//   }
// }
