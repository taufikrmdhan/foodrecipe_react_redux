import React, { useState } from "react";
import style from "../assets/style.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../redux/action/user";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [form, setForm] = useState({
    nama: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSuccess = (data) => {
    alert("Register Success");
    return navigate("/login");
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(form);
    if (
      form.nama === "" ||
      form.email === "" ||
      form.phone === "" ||
      form.password === ""
    ) {
      alert("Please fill all the field");
    } else {
      const body = {
        nama: form.nama,
        email: form.email,
        phone: form.phone,
        password: form.password,
      };
      dispatch(
        createUser(body, handleSuccess)
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
              <h3 className="text-center">Let's Get Started</h3>
              <p className="text-center text-muted">
                Create new account to access all features
              </p>
              <div className="form-group">
                <label htmlFor="inputUsername" className="form-label">
                  Username
                </label>
                <input
                  className="form-control"
                  id="inputUsername"
                  placeholder="Enter name"
                  onChange={handleChange}
                  name="nama"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter email address"
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPhone" className="form-label">
                  Phone Number
                </label>
                <input
                  className="form-control"
                  id="inputPhone"
                  placeholder="08xxxxxxxxx"
                  onChange={handleChange}
                  name="phone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Create New Password"
                  onChange={handleChange}
                  name="password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmInputPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmInputPassword"
                  placeholder="New Password"
                />
              </div>
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
              <div className="form-group d-grid gap-2">
                <button type="submit" className={`btn ${style.btnCustom}`}>
                  Register Accout
                </button>
              </div>
              <div className="text-center">
                <p className="text-muted">
                  Already have an account?
                  <Link className={style.ap} to="/login">
                    Log in Here
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
export default Register;
