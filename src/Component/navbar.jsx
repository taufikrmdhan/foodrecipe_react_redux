import React from "react";
import style from "../assets/addrecipe.module.css"
import { Link } from "react-router-dom";

const navbar = () => {
    return(
        <header className={style.customHeader}>
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
                    className={`nav-link active ${style.customNav}`}
                    aria-current="page"
                    to="/landing"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link className={`nav-link active ${style.customNav} ${style.activeCustom}`} href="/add">
                    Add Recipe
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link className={`nav-link active ${style.customNav}`} to="/profile">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}
export default navbar;