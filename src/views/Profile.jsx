import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import profilestyle from "../assets/profile.module.css";
import Footers from "../Component/footer";
import { useSelector, useDispatch } from "react-redux";
import { getRecipe } from "../redux/action/recipe";
import { deleteRecipe } from "../redux/action/addrecipe";

const Profile = () => {
  const data = JSON.parse(localStorage.getItem("data"));

  const dispatch = useDispatch();
  const recipe = useSelector((state) => {
    return state.recipe;
  });
  const state = useSelector((state) => {
    return state.addRecipe;
  });
 
  useEffect(() => {
    dispatch(getRecipe());
  }, []);

  const handleSuccess = (event) => {
    alert("Recipe deleted");
    dispatch(getRecipe());
  }

  const deleteRow = (id_recipe) => {
    dispatch(deleteRecipe(id_recipe, handleSuccess)
    );
  };

  return (
    <div className={profilestyle.customBody}>
      <header className={profilestyle.customHeader}>
        <nav className="navbar navbar-expand-lg bg-transparent fixed-top p-4">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item px-3">
                  <Link
                    className={`nav-link active ${profilestyle.customNav}`}
                    aria-current="page"
                    to="/landing"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link
                    className={`nav-link active ${profilestyle.customNav}`}
                    to="/add"
                  >
                    Add Recipe
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link
                    className={`nav-link active ${profilestyle.activeCustom} ${profilestyle.customNav}`}
                    to=""
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className={profilestyle.customMain}>
        <section className="my-5">
          <div className="container">
            <div className={`text-center ${profilestyle.customSpace}`}>
              <img
                src={require("../assets/image/Ellipse 127.png")}
                alt="photo profile"
              />
              <button type="button" className={`btn ${profilestyle.btnCustom}`}>
                <a href="#updateProfile" data-bs-toggle="collapse">
                  <img
                    src={require("../assets/image/Vector.png")}
                    className={profilestyle.customAwesome}
                  />
                </a>
              </button>
              <p className={profilestyle.customNameProfile}>{data.nama}</p>
              <div
                className={`collapse multi-collapse ${profilestyle.customSpaceUpdate}`}
                id="updateProfile"
              >
                <div className={`text-center ${profilestyle.customSpace}`}>
                  <div className="d-flex flex-column">
                    <div>
                      <button
                        type="button"
                        className={`btn ${profilestyle.btnCustomUpdate} my-1`}
                      >
                        Change Photo Profile
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className={`btn ${profilestyle.btnCustomUpdate} my-1`}
                      >
                        <Link className={profilestyle.aBtn} to="/change">
                          Change Password
                        </Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <Link
                className="btn mx-4"
                data-bs-toggle="collapse"
                to="#multiCollapseExample1"
              >
                My Recipe
              </Link>
              <Link
                className="btn mx-4"
                data-bs-toggle="collapse"
                to="#multiCollapseExample2"
              >
                Saved Recipe
              </Link>
              <Link
                className="btn mx-4"
                data-bs-toggle="collapse"
                to="#multiCollapseExample3"
              >
                Liked Recipe
              </Link>
            </p>

            <div className="collapse multi-collapse" id="multiCollapseExample1">
              <div className="container">
                <div
                  className={`${profilestyle.grid12} ${profilestyle.gapMedium}`}
                >
                   {
                  recipe.isLoading ? (
                    <p>Loading...</p>
                  ) : recipe.isError ? (
                    <p>failed to get</p>
                  ) : (
                    recipe.data?.map((data, i) => {
                      return (
                        <>
                          <div
                            key={data.id_recipe}
                            className={`${profilestyle.cusGridMd3} position-relative p-0`}
                          >
                            <img
                              src={`${process.env.REACT_APP_BACKEND_URL}/${data.image}`}
                              className="img-fluid"
                              alt={data.title}
                            />
                            <span
                              className={`position-absolute ${profilestyle.titleImage}`}
                            >
                              {data.title}
                            </span>
                          </div>
                          <div className="d-flex flex-column">
                            <div>
                              <button
                                onClick={(e) => deleteRow(data.id_recipe, e)}
                                type="button"
                                className="btn btn-danger my-1"
                              >
                                <i
                                  className="fa fa-trash"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                            <div>
                              <button
                                type="button"
                                className="btn btn-warning my-1"
                              >
                                <Link
                                  className={profilestyle.aBtn}
                                  to="/update"
                                  state={{ id: data.id_recipe, image: data.image, title: data.title, ingredient: data.ingredient, videostep: data.videostep}}
                                >
                                  <i
                                    className="fa fa-pencil-square-o"
                                    aria-hidden="true"
                                  ></i>
                                </Link>
                              </button>
                            </div>
                            <div>
                            <button
                                
                                type="button"
                                className="btn btn-success my-1"
                              >
                                <i class="fa fa-star" aria-hidden="true"></i>
                              </button>
                            </div>
                          </div>
                        </>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            <div className="collapse multi-collapse" id="multiCollapseExample2">
              <div className="container">
                <div
                  className={`${profilestyle.grid12} ${profilestyle.gapMedium}`}
                >
                  <div
                    className={`${profilestyle.cusGridMd3} position-relative p-0`}
                  >
                    <img
                      src={require("../assets/image/makanan4.png")}
                      className="img-fluid"
                      alt="makanan3"
                    />
                    <span
                      className={`position-absolute ${profilestyle.titleImage}`}
                    >
                      Chicken Kare
                    </span>
                  </div>
                  <div
                    className={`${profilestyle.cusGridMd3} position-relative p-0`}
                  >
                    <img
                      src={require("../assets/image/makanan3.png")}
                      className="img-fluid"
                      alt="makan4"
                    />
                    <span
                      className={`position-absolute ${profilestyle.titleImage}`}
                    >
                      Bomb Chicken
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="collapse multi-collapse" id="multiCollapseExample3">
              <div className="container">
                <div
                  className={`${profilestyle.grid12} ${profilestyle.gapMedium}`}
                >
                  <div
                    className={`${profilestyle.cusGridMd3} position-relative p-0`}
                  >
                    <img
                      src={require("../assets/image/makanan2.png")}
                      className="img-fluid"
                      alt="makanan3"
                    />
                    <span
                      className={`position-absolute ${profilestyle.titleImage}`}
                    >
                      Chicken Kare
                    </span>
                  </div>
                  <div
                    className={`${profilestyle.cusGridMd3} position-relative p-0`}
                  >
                    <img
                      src={require("../assets/image/makanan9.png")}
                      className="img-fluid"
                      alt="makan4"
                    />
                    <span
                      className={`position-absolute ${profilestyle.titleImage}`}
                    >
                      Bomb Chicken
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footers />
    </div>
  );
};
export default Profile;
