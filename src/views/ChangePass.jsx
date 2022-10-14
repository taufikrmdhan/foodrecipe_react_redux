import React from "react";
import changestyle from "../assets/style.module.css";

const ChangePass = () => {
  return (
    <div className={changestyle.body}>
      <div class="container-fluid">
        <div class="row">
          <div class={`col-md-6 ${changestyle.bgImage}`}>
            <img src={require("../assets/image/icon.png")} alt="img icon" />
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <form class="row g-3 m-5">
              <div>
                <label for="inputPass" class="form-label">
                  Create New Password
                </label>
                <input class="form-control" id="inputPass" />
                <label for="inputPass" class="form-label my-2">
                  New Password
                </label>
                <input class="form-control" id="inputPass" />
              </div>
              <div>
                <div class="form-check">
                  <input
                    id="gridCheck"
                    type="checkbox"
                    class={changestyle.accent}
                  />
                  <label class="form-check-label" for="gridCheck">
                    I agree of term conditions
                  </label>
                </div>
              </div>
              <div class="d-grid gap-2">
                <button type="submit" class={`btn ${changestyle.btnCustom}`}>
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
export default ChangePass;
