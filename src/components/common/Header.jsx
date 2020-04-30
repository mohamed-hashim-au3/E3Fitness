import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark top-navigation">
        <div className="navbar-flex">
          <ul className="navbar-nav mr-lg-auto">
            <li className="nav-item active">
              <Link className="nav-link logo-link" to="/">
                <span>E3</span> <span className="logo-text">FITNESS</span>
              </Link>
            </li>
          </ul>

          <span className="navbar-text signup-links pt-3">
            <button className="mr-3 navbar-text signup-links">
              log in/ sign up
            </button>
          </span>
        </div>
      </nav>
      <div className="main-menuadjust relative">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="main-menu">
                <ul className="main-menu-links">
                  <li>
                    <Link to="/">HOME</Link>
                  </li>
                  <li>
                    <Link to="/aboutus">ABOUT US</Link>
                  </li>
                  <li>
                    <Link to="/classes">CLASSES</Link>
                  </li>
                  <li>
                    <Link to="/blog">BLOG</Link>
                  </li>
                  <li>
                    <Link to="/trainers">TRAINERS</Link>
                  </li>
                  <li>
                    <Link to="/shop">SHOP</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
