import React, { useRef } from "react";
import recipestyle from "../assets/addrecipe.module.css";
import { useNavigate } from "react-router-dom";
import Footers from "../Component/footer";
import Navbar from "../Component/navbar";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, resetImage, createRecipe } from "../redux/action/addrecipe";

const AddRecipe = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.addRecipe;
  });
  const hiddenFileInput = useRef(null);
  const handleClick = (event) => {
    console.log(event);
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    console.log(event);
    const fileUploaded = event.target.files[0];
    console.log(fileUploaded)
    dispatch(uploadImage(fileUploaded));
  };
  const handleSuccess = (event) => {
    console.log(event);
    alert("Recipe added");
    return navigate("/profile");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    formData.append("image", state.fileImage);
    dispatch(resetImage());
    dispatch(
      createRecipe(formData, handleSuccess)
    )
  };

  return (
    <div className={recipestyle.customBody}>
      <Navbar />
      <main>
        <section>
          <div className="container mt-5">
            <form onSubmit={handleSubmit} className="mx-5">
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
                    {state.pathImage}
                  </h5>
                </div>
                <input
                  className={recipestyle.input}
                  type="file"
                  ref={hiddenFileInput}
                  id="formFile"
                  onChange={handleChange}
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
                />
              </div>
              <div className="mb-3">
                <textarea
                  className={`form-control ${recipestyle.textArea}`}
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Ingredients"
                  name="ingredient"
                ></textarea>
              </div>
              <div className="mb-3">
                <textarea
                  className={`form-control ${recipestyle.textArea}`}
                  id="exampleFormControlTextarea1"
                  rows="1"
                  placeholder="Video"
                  name="videostep"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className={`btn ${recipestyle.btnCustomArea}`}
                >
                  Post
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
export default AddRecipe;
