import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import landing from "../assets/landingpage.module.css";
import { ReactComponent as User } from "../assets/image/Userpanel.svg";
import Footers from "../Component/footer";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getRecipe } from "../redux/action/recipe";

const LandingPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => {
    return state.recipe
  });

  useEffect(() => {
    dispatch(getRecipe());
  }, []);

  const [title, setTitle] = useState("");
  // const [recipe, setRecipe] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [iserror, setIserror] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(title);
    if (title != "") {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/recipe/list/${title}`)
        .then((res) => {
          // console.log(res.data);
          if(res.data.length > 0){
            navigate(`/detail?title=${title}`);
          } else {
            alert("Recipe not found");
          }
        });
    }
  };

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/recipe/list`)
  //     .then((res) => {
  //       setTimeout(() => {
  //         console.log(res);
  //         setRecipe(res.data);
  //         setLoading(false);
  //       }, 100);
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  const logout = () => {
    localStorage.clear();
    return navigate("/login");
  };

  return (
    <div className={landing.body}>
      <header className={landing.customHeader}>
        <nav className="navbar navbar-expand-lg bg-transparent fixed-top top-navbar">
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
                <li className={`nav-item ${landing.customNav}`}>
                  <Link
                    className={`nav-link active ${landing.aList} ${landing.activeCustom}`}
                    aria-current="page"
                    to=""
                  >
                    Home
                  </Link>
                </li>
                <li className={`nav-item ${landing.customNav}`}>
                  <Link
                    className={`nav-link active ${landing.aList}`}
                    to="/add"
                  >
                    Add Recipe
                  </Link>
                </li>
                <li className={`nav-item ${landing.customNav}`}>
                  <Link
                    className={`nav-link active ${landing.aList}`}
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <button type="button" className="btn d-flex flex-row" onClick={logout}>
                <img src={require("../assets/image/iconUser.jpeg")} className="rounded-circle" alt="" />
                <p className="text-white mt-3">logout</p>
              </button>
            </div>
          </div>
        </nav>
        <section className={landing.customSectionHead}>
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex align-items-start d-flex flex-column justify-content-center">
                <h1 className={landing.h1}>Discover Recipe & Delicious Food</h1>
                <form action="" onSubmit={(e) => onSubmitHandler(e)}>
                  <div
                    className={`position-relative w-100 ${landing.customButtonHeader}`}
                  >
                    <div className={landing.customIconSearch}>
                      <i
                        className={`fa fa-search ${landing.searchCustom}`}
                        aria-hidden="true"
                      ></i>
                      {/* <img
                      src={require("../assets/image/search.svg")}
                      className=
                      alt="icon search"
                    /> */}
                    </div>
                    <input
                      type="search"
                      placeholder="Search restaurant,food"
                      className={landing.inputSearchCustom}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className={`col-md-6 ${landing.imgWrapper}`}>
                <div className={landing.imgHeader}>
                  <img
                    src={require("../assets/image/makanan1.png")}
                    className="img-fluid"
                    alt="img icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <main>
        <section className="container py-5">
          <div className={landing.customRectangle}>
            <h3 className={landing.h3}>Popular For You</h3>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className={landing.imgMainPopular}>
                <img
                  src={require("../assets/image/makanan2.png")}
                  className="img-fluid"
                  alt="image2"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center flex-column p-5">
              <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
              <hr className="w-25" />
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <div>
                <button type="button" className={`btn ${landing.btnCustom}`}>
                  <Link className={landing.aBtn} to="/detail">
                    Learn more
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-5">
          <div className={`mb-5 ${landing.customRectangle}`}>
            <h3 className={landing.h3}>New Recipe</h3>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className={landing.imgMainNewRecipe}>
                <img
                  src={require("../assets/image/makanan9.png")}
                  className="img-fluid"
                  alt="image3"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-center flex-column p-5">
              <h2>Healthy Bone Broth Ramen (Quick & Easy)</h2>
              <hr className="w-25" />
              <p>
                Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in
                a hurry? That’s right!
              </p>
              <div>
                <button type="button" className={`btn ${landing.btnCustom}`}>
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="container">
          <div className={`mb-5 ${landing.customRectangle}`}>
            <h3 className={landing.h3}>Popular Recipe</h3>
          </div>
          <div className={`${landing.grid12} ${landing.gapMedium}`}>
            {
               recipe.isLoading ? (
              <p>Loading...</p>
            ) : recipe.isError ? (
              <p>failed to get</p>
            ) : (
              recipe.data.map((data, i) => {
                // {
                //     "id_recipe": 14,
                //     "title": "Nikmat",
                //     "image": "1663827497930.jpg",
                //     "ingredient": "masukkan bumbu, siapkan air panas , dan masak",
                //     "videostep": "dsdsdsd",
                //     "createdat": "2022-09-08T17:00:00.000Z"
                // },
                return (
                  <div
                    key={data.id_recipe}
                    className={`${landing.cusGridMd4} position-relative p-0`}
                  >
                    <img
                      src={`${process.env.REACT_APP_BACKEND_URL}/${data.image}`}
                      className="img-fluid"
                      alt={data.title}
                    />
                    <span className={`position-absolute ${landing.titleImage}`}>
                      {data.title}
                    </span>
                  </div>
                );
              })
            )}
            {/* <div className={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan4.png")}
                className="img-fluid"
                alt="makan4"
              />
              <span className={`position-absolute ${landing.titleImage}`}>
                Bomb Chicken
              </span>
            </div>
            <div className={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan5.png")}
                className="img-fluid"
                alt="makan5"
              />
              <span className={`position-absolute ${landing.titleImage}`}>
                Banana Smooth
              </span>
            </div>
            <div className={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan6.png")}
                className="img-fluid"
                alt="makan6"
              />
              <span className={`position-absolute ${landing.titleImage}`}>
                Coffe Lava Cake
              </span>
            </div>
            <div className={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan7.png")}
                className="img-fluid"
                alt="makan7"
              />
              <span className={`position-absolute ${landing.titleImage}`}>
                Sugar Salmon
              </span>
            </div>
            <div className={`${landing.cusGridMd4} position-relative p-0`}>
              <img
                src={require("../assets/image/makanan8.png")}
                className="img-fluid"
                alt="makan8"
              />
              <span className={`position-absolute ${landing.titleImage}`}>
                Indian Salad
              </span>
            </div> */}
          </div>
        </section>
      </main>
      <Footers />
      {/* {JSON.stringify(recipe)} */}
    </div>
  );
};
export default LandingPage;
