import axios from "axios";

export const createUser = (form) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/user/register`, form)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  export const loginUser = (form) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, form)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }