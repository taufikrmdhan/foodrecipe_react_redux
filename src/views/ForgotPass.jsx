import React from "react";
import style from "../assets/style.module.css";
import { Link } from "react-router-dom";

const forgotPass = () => {
  return (
    <div className={style.body}>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-md-6 ${style.bgImage}`}>
            <img src={require("../assets/image/icon.png")} alt="img icon" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <form className="row g-3 m-5">
              <h3 className="text-center">Welcome</h3>
              <p className="text-center text-muted">
                We just need your registered e-mail address to send your
                password resend
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
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className={`btn ${style.btnCustom}`}>
                  <Link className={style.a} to="/confirm">
                    Send Email
                  </Link>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default forgotPass;
