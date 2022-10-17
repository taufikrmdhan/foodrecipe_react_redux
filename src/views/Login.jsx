import React, { useState } from "react";
import style from "../assets/style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/action/user";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (form.email === "" || form.password === "") {
      alert("Data tidak boleh kosong");
    } else {
      const body = {
        email: form.email,
        password: form.password,
      };
      dispatch(
        loginUser(body)
          .then((res) => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token.token);
            localStorage.setItem("data", JSON.stringify(res.data.token.data));
            navigate("/landing");
          })
          .catch((err) => {
            alert("Email or password is wrong");
          })
      );
    }
  };
  return (
    <div className={style.body}>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-md-6 ${style.bgImage}`}>
            <img src={require("../assets/image/icon.png")} alt="img icon" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <form className="row g-3 m-5" onSubmit={(e) => onSubmitHandler(e)}>
              <h3 className="text-center">Welcome</h3>
              <p className="text-center text-muted">
                Log in into your exiting account
              </p>
              <div>
                <label for="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="email@gmail.com"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div>
                <label for="inputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>
              <div>
                <div className="form-check">
                  <input
                    id="gridCheck"
                    type="checkbox"
                    className={style.accent}
                  />
                  <label className="form-check-label" for="gridCheck">
                    I agree of term conditions
                  </label>
                </div>
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className={`btn ${style.btnCustom}`}>
                  Login
                </button>
              </div>
              <div className="text-end">
                <Link className={style.adiv} to="/forgot">
                  Forgot Password ?
                </Link>
              </div>
              <div className="text-center">
                <p className="text-muted">
                  Don't have a account?{" "}
                  <Link className={style.ap} to="/">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
