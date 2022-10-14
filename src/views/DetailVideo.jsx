import React from "react";
import videostyle from "../assets/detailvideo.module.css";
import { Link } from "react-router-dom";
import Footers from "../Component/footer";

const DetailVideo = () => {
  return (
    <div className={videostyle.customBody}>
      <header class={videostyle.customHeader}>
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
                    class={`nav-link active ${videostyle.customNav}`}
                    aria-current="page"
                    to="/landing"
                  >
                    Home
                  </Link>
                </li>
                <li class="nav-item px-3">
                  <Link class={`nav-link active ${videostyle.customNav}`} to="/add">
                    Add Recipe
                  </Link>
                </li>
                <li class="nav-item px-3">
                  <Link class={`nav-link active ${videostyle.customNav}`} to="/profile">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <section class="container">
          <div class={`${videostyle.grid12} ${videostyle.gapMedium}`}>
            <div class={`${videostyle.cusGridLg8} mx-5`}>
              <div class={videostyle.aspectLock}>
                <iframe
                  class={videostyle.embedVideo}
                  src="https://www.youtube.com/embed/G4fSaPigWeQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <h3 class={`${videostyle.titleVideo} ${videostyle.h3} my-2`}>
                  Beef Steak with Curry Sauce - [Step 4] <br /> Cut the
                  condiment and then mix it
                </h3>
                <p class={`${videostyle.customDate} text-muted`}>3 month ago</p>
              </div>
            </div>
            <div class={`${videostyle.cusGridLg4} ${videostyle.flexCol} ${videostyle.gapMedium}`}>
              <h3 className={videostyle.h3}>Next</h3>
              <div class={videostyle.aspectLock}>
                <iframe
                  class={videostyle.embedVideo}
                  src="https://www.youtube.com/embed/Iu8pRHf5_Fg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <h5 class="my-2">
                  Beef Steak with Curry Sauce - [Step 5] <br />
                  Saute condiments together until turn brown
                </h5>
                <p class="text-muted">3 month ago</p>
              </div>
              <div>
                <div class={videostyle.aspectLock}>
                  <iframe
                    class={videostyle.embedVideo}
                    src="https://www.youtube.com/embed/GRnjSSH6IAA"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <h5 class="my-2">
                  Beef Steak with Curry Sauce - [Step 6] <br />
                  Roast beef until it’s medium rare
                </h5>
                <p class="text-muted">3 month ago</p>
              </div>
              <div class={videostyle.aspectLock}>
                <iframe
                  class={videostyle.embedVideo}
                  src="https://www.youtube.com/embed/9aNxuytikIM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div>
                <h5 class="my-2">
                  Beef Steak with Curry Sauce - [Step 7] <br />
                  Roast beef until it’s medium rare
                </h5>
                <p class="text-muted">3 month ago</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footers />
    </div>
  );
};
export default DetailVideo;
