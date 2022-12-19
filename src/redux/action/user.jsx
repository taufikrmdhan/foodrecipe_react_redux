import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

export const createUser = (form, handleSuccess) => ({
  type: "CREATE_USER",
  payload: new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/register`, form)
      .then((res) => {
        handleSuccess();
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  }),
});

export const loginUser = (form, handleSuccess) => ({
  type: "LOGIN_USER",
  payload: new Promise((resolve, reject) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, form)
      .then((res) => {
        console.log(res);
        handleSuccess(res.data.token);
        resolve(res);
      })
      .catch((err) => {
        reject(err);
        alert("email or password is wrong");
      });
  }),
});
