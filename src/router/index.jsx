import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Register from "../views/Register";
import Login from "../views/Login";
import Forgot from "../views/ForgotPass";
import Confirm from "../views/ConfirmPass";
import Landing from "../views/LandingPage";
import Add from "../views/AddRecipe";
import Profil from "../views/Profile";
import ChangePas from "../views/ChangePass";
import Detail from "../views/DetailRecipe";
import Video from "../views/DetailVideo";
import Update from "../views/UpdateRecipe";

const PrivateRoute = () => {
  const token = localStorage.getItem("token");
  const data = localStorage.getItem("data");
  if (token && data) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} />
                <Route path="/insert" element={<Insert />} />
                <Route path="/detail" element={<Detail />} /> */}
        <Route path="/">
          {/* <Route index element={<Home />} />
                    <Route path=":id" element={<Detail />} />
                    <Route path="new" element={<Insert />} /> */}
          <Route index element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="landing" element={<Landing />} /> */}
          <Route path="/landing" element={<PrivateRoute />}>
            <Route index element={<Landing />} />
          </Route>
          <Route path="forgot" element={<Forgot />} />
          <Route path="confirm" element={<Confirm />} />

          {/* <Route path="add" element={<Add />} /> */}
          <Route path="/add" element={<PrivateRoute />}>
            <Route index element={<Add />} />
          </Route>
          {/* <Route path="profile" element={<Profil />} /> */}
          <Route path="/profile" element={<PrivateRoute />}>
            <Route index element={<Profil />} />
          </Route>
          <Route path="change" element={<ChangePas />} />
          {/* <Route path="detail" element={<Detail />} /> */}
          <Route path="/detail" element={<PrivateRoute />}>
            <Route index element={<Detail />} />
          </Route>
          <Route path="video" element={<Video />} />
          {/* <Route path="update" element={<Update />} /> */}
          <Route path="/update" element={<PrivateRoute />}>
            <Route index element={<Update />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
