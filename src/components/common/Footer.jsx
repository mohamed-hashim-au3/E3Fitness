import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import InstructorAuth from "../InstructorAuth";
import BecameInstructor from "../InstructorAuthSection/BecameInstructor";
import InstructorRegister from "../InstructorAuthSection/InstructorRegister";
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
                  <InstructorRegister />
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
