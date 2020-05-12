import React from "react";
import { Link } from "react-router-dom";
import UserSignIn from "../UserSignIn";
import InstructorAuth from "../InstructorAuth";
import img1 from "../../assets/images/blog-1.jpg";
import img2 from "../../assets/images/blog-2.jpg";
function Header(props) {
  React.useEffect(props => {
    console.log(props);
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light top-navigation">
        <div className="navbar-flex">
          <ul className="navbar-nav mr-lg-auto">
            <li className="nav-item active">
              <Link className="nav-link logo-link" to="/">
                <span>E3</span> <span className="logo-text">FITNESS</span>
              </Link>
            </li>
          </ul>

          <span className="navbar-text pt-3">
            {props.login === true ? (
              <>
                <div className="button-dropdown">
                  <button className="mr-3 navbar-text account-links">
                    MY CLASSES
                  </button>
                  <div className="button-dropdown-content">
                    <div className="content-wrapper">
                      <img src={img1} className="btn-dpd-img" />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="btn-dpd-info">Power CORE</div>
                        <div
                          className="btn-dpd-date"
                          style={{ fontSize: "1rem", color: "white" }}
                        >
                          20/05/20{" "}
                        </div>
                      </div>
                    </div>
                    <div className="content-wrapper">
                      <img src={img2} className="btn-dpd-img" />
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div className="btn-dpd-info">Power ZEN</div>
                        <div
                          className="btn-dpd-date"
                          style={{ fontSize: "1rem", color: "white" }}
                        >
                          20/05/20{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-dropdown-acc">
                  <button className="mr-3 navbar-text account-links">
                    MY ACCOUNT
                  </button>
                  <div className="btn-dpd-acc-content">
                    <div className="btn-acc-title">
                      <span style={{ color: "#fff" }}>E3 </span>FITNESS
                    </div>
                    <div
                      className="btn-acc-name"
                      style={{ color: "#00a99d", fontSize: "1.5rem" }}
                    >
                      Malek
                    </div>
                    <div>
                      <div className="btn-acc-info">Account</div>
                      {/* <div className="btn-acc-info">Trainer Account</div> */}
                      <InstructorAuth />
                      <div className="btn-acc-info">Help Center</div>
                      <div className="btn-acc-info" onClick={props.handleLogin}>
                        Logout
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </>
            ) : (
              <UserSignIn />
            )}
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
                    <div className="m-dropdown">
                      <Link className="m-dropbtn">CLASSES</Link>
                      <div className="m-dropdown-content">
                        <Link
                          to="/classes/power_class"
                          className="mdropdown-link"
                        >
                          POWER
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link
                          to="/classes/senior_class"
                          className="mdropdown-link"
                        >
                          SENIOR
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link
                          to="/classes/youth_class"
                          className="mdropdown-link"
                        >
                          YOUTH
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/blogs">BLOG</Link>
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
