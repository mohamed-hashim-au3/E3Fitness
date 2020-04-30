import React from "react";

function Footer() {
  return (
    <>
      <section className="footer-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <ul className="footer-links">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">What's New</a>
                </li>
                <li>
                  <a href="/">Help Center</a>
                </li>
                <li>
                  <a href="/">Jobs</a>
                </li>
                <li>
                  <a href="/">Become a Member</a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-facebook-square" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
