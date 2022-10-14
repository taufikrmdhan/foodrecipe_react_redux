import React from "react";
import style from "../assets/style.module.css";

const confirmPass = () => {
  return (
    <div className={style.body}>
      <div class="container-fluid">
        <div class="row">
          <div class={`col-md-6 ${style.bgImage}`}>
            <img src={require("../assets/image/icon.png")} alt="img icon" />
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <form class="row g-3 m-5">
              <div>
                <label for="inputPass" class="form-label">
                  Code 6 Digit
                </label>
                <input class="form-control" id="inputPass" />
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class={`btn ${style.btnCustom}`}>
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default confirmPass;
