import React, { useState, useRef, useEffect } from "react";
import recipestyle from "../assets/addrecipe.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Footers from "../Component/footer";
import { useSelector, useDispatch } from "react-redux";
import { uploadImage, resetImage, updateRecipe } from "../redux/action/addrecipe";

const UpdateRecipe = () => {
  let { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const stateRedux = useSelector((state) => {
    return state.addRecipe;
  });
  const hiddenFileInput = useRef(null);
  
  const [idRecipe, setIdRecipe] = useState("");
  const [form, setForm] = useState({
    title: "",
    ingredient: "",
    videostep: "",
  });

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded);
    dispatch(uploadImage(fileUploaded));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    formData.append("image", stateRedux.fileImage);
    dispatch(resetImage());
    dispatch(
      updateRecipe(formData, state.id)
      .then((res) => {
        // console.log(res);
        alert("Recipe updated");
        navigate("/profile");
      }).catch((err) => {
        alert("Failed to update recipe");
      })
    )
  };
  useEffect(() => {
    if (state) {
      setIdRecipe(state.id);
      setForm({
        title: state.title,
        ingredient: state.ingredient,
        videostep: state.videostep,
      });
    } else {
      return navigate("/profile", { replace: true });
    }
  }, []);

  return (
    <div className={recipestyle.customBody}>
      <header className={recipestyle.customHeader}>
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
                    className={`nav-link active ${recipestyle.customNav}`}
                    aria-current="page"
                    to="/landing"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link
                    className={`nav-link active ${recipestyle.customNav}`}
                    to="/add"
                  >
                    Add Recipe
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link
                    className={`nav-link active ${recipestyle.customNav}`}
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
        <section>
          <div className="container mt-5">
            <form className="mx-5" onSubmit={handleSubmit}>
              <div className="mb-3">
                <div className={recipestyle.rectangle}>
                  <div>
                    <img
                      src={require("../assets/image/image.png")}
                      alt=""
                      className={recipestyle.imageAdd}
                      id="customBtn"
                    />
                  </div>

                  <h5
                    className="text-muted"
                    id="customBtn"
                    onClick={handleClick}
                  >
                    {stateRedux.pathImage}
                  </h5>
                </div>
                <input
                  className={recipestyle.input}
                  type="file"
                  ref={hiddenFileInput}
                  id="formFile"
                  onChange={(e) => handleChange(e)}
                  style={{ display: "none" }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${recipestyle.input}`}
                  id="exampleInputEmail1"
                  placeholder="Title"
                  aria-describedby="emailHelp"
                  name="title"
                  value={form.title}
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <textarea
                  className={`form-control ${recipestyle.textArea}`}
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Ingredients"
                  name="ingredient"
                  value={form.ingredient}
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="mb-3">
                <textarea
                  className={`form-control ${recipestyle.textArea}`}
                  id="exampleFormControlTextarea1"
                  rows="1"
                  placeholder="Video"
                  name="videostep"
                  value={form.videostep}
                  onChange={(e) =>
                    setForm({ ...form, [e.target.name]: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className={`btn ${recipestyle.btnCustomArea}`}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footers />
    </div>
  );
};
export default UpdateRecipe;
