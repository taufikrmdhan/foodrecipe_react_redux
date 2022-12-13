import React from "react";
import { Link } from "react-router-dom";
import style from "../assets/landingpage.module.css";

const Footer = () => {
    return(
        <footer className={`container-fluid mt-5 ${style.customFooter}`}>
        <div className="text-center m-5">
          <h4 className={style.h4}>Eat, Cook, Repeat</h4>
          <p className="text-muted">Share your best recipe by uploading here !</p>
        </div>
        <nav className=" d-flex justify-content-center">
          <div className={`container ${style.customInnerFooter}`}>
            <div className={`${style.footerLinks}`}>
              <ul className="navbar-nav d-flex flex-row">
                <li className={style.customListFooter}>
                  <Link className={style.aList} to="">
                    Product
                  </Link>
                </li>
                <li className={style.customListFooter}>
                  <Link className={style.aList} to="">
                    Company
                  </Link>
                </li>
                <li className={style.customListFooter}>
                  <Link className={style.aList} to="">
                    Learn More
                  </Link>
                </li>
                <li className={style.customListFooter}>
                  <Link className={style.aList} to="">
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>
            <div className={style.customArcademy}>
              <p>© pijar.camp</p>
            </div>
          </div>
        </nav>
      </footer>
    );
}
export default Footer;