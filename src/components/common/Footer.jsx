import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <>
      <section class="footer-section">
        <div class="container-fluid">
          <div class="row">
            <div class="col text-center">
              <ul class="footer-links">
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
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faFacebook} />
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
