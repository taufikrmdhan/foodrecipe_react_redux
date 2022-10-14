import React, { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import detailstyle from "../assets/detailrecipe.module.css";
import Footers from "../Component/footer";
import axios from "axios";

const DetailRecipe = () => {
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState([]);
  const [loading, setLoading] = useState(true);
  const [iserror, setIserror] = useState(false);
  const [queryParam] = useSearchParams();

  const titleSearch = queryParam.get("title");
  const [title, setTitle] = useState("");
  const [ingredient, setIngredient] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/recipe/list/${titleSearch}`)
      .then((res) => {
        console.log(res.data[0]);
        setTitle(res.data[0].title);
        setIngredient(res.data[0].ingredient.split(","));
        setImage(`${process.env.REACT_APP_BACKEND_URL}/${res.data[0].image}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={detailstyle.customBody}>
      <header class={detailstyle.customHeader}>
        <nav class="navbar navbar-expand-lg bg-transparent fixed-top p-4">
          <div class="container">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item px-3">
                  <Link
                    class={`nav-link active ${detailstyle.customNav}`}
                    aria-current="page"
                    to="/landing"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item px-3">
                  <Link
                    class={`nav-link active ${detailstyle.customNav}`}
                    to="/add"
                  >
                    Add Recipe
                  </Link>
                </li>
                <li class="nav-item px-3">
                  <Link
                    class={`nav-link active ${detailstyle.customNav}`}
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section class="container mt-5">
          <div class={detailstyle.customDetail}>
            <h1 class={`${detailstyle.h1} mb-4`}>{title}</h1>
            <div class="position-relative">
              <img
                src={image}
                alt={title}
                class={`img-fluid ${detailstyle.customImageFood}`}
              />
              <button type="button" class={`btn ${detailstyle.btnSave}`}>
                <img src={require("../assets/image/Group 73.png")} alt="" />
              </button>
              <button type="button" class={`btn ${detailstyle.btnLike}`}>
                <img src={require("../assets/image/Vector (1).png")} alt="" />
              </button>
            </div>
          </div>
          <div class={`${detailstyle.customIngredient} my-5`}>
            <h2>Ingredients</h2>
            <ul>
              {/* <li>{ingredient.map((item, i) => {
                return `<li key={i}>{item}</li>`;
              })}</li> */}
              <li>{ingredient[0]}</li>
              <li>{ingredient[1]}</li>
              <li>{ingredient[2]}</li>
              <li>{ingredient[3]}</li>
            </ul>

            <h2 class="mt-5">Video Step</h2>
            <div class="d-grid gap-2">
              <div class={detailstyle.btnStyle}>
                <button type="submit" class={`btn ${detailstyle.btnCustom}`}>
                  <Link to="/video">
                    <img
                      src={require("../assets/image/Vector (2).png")}
                      alt=""
                      style={{ width: "20px" }}
                    />
                  </Link>
                </button>
              </div>
              <div class={detailstyle.btnStyle}>
                <button type="submit" class={`btn ${detailstyle.btnCustom}`}>
                  <Link to="/video">
                    <img
                      src={require("../assets/image/Vector (2).png")}
                      alt=""
                      style={{ width: "20px" }}
                    />
                  </Link>
                </button>
              </div>
              <div class={detailstyle.btnStyle}>
                <button type="submit" class={`btn ${detailstyle.btnCustom}`}>
                  <Link to="/video">
                    <img
                      src={require("../assets/image/Vector (2).png")}
                      alt=""
                      style={{ width: "20px" }}
                    />
                  </Link>
                </button>
              </div>
              <div class={detailstyle.btnStyle}>
                <button type="submit" class={`btn ${detailstyle.btnCustom}`}>
                  <Link to="/video">
                    <img
                      src={require("../assets/image/Vector (2).png")}
                      alt=""
                      style={{ width: "20px" }}
                    />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class={`container-fluid mb-3 ${detailstyle.customTextarea}`}>
            <textarea
              class={`${detailstyle.textArea} form-control`}
              placeholder="comment"
              rows="7"
              cols="30"
            ></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class={`btn ${detailstyle.btnCustomArea}`}>
              Send
            </button>
          </div>
          <div>
            <h2
              class={`col-md-6 my-5 text-center ${detailstyle.custH2Comment}`}
            >
              Comment
            </h2>
            <div
              class={`col-md-6 d-flex flex-row justify-content-end align-items-center ${detailstyle.spaceUserComment}`}
            >
              <img
                src={require("../assets/image/IMG_9001.jpg")}
                alt="profile"
                class={`img-fluid rounded-circle ${detailstyle.customImageUserComment}`}
              />
              <div class="d-flex flex-column mx-3 mt-2">
                <h5>Taufik Ramadhan</h5>
                <p>Makanannya enak sekali, saya jadi senang kesini.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footers />
    </div>
  );
};
export default DetailRecipe;
