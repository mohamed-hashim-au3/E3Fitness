import React from "react";
import WithBasicLayout from "../common/WithBasicLayout";
import SideMenu from "../common/SideMenu";
import { ReactComponent as UploadSVG } from "../../assets/images/upload.svg";
import { Link } from "react-router-dom";
function InstructorCreateCourse1() {
  return (
    <>
      <WithBasicLayout>
        <SideMenu />
        <div class="col-md-9 col-sm-6 col-xs-12  right-side-content Pricing-section">
          <div class="header-content">
            <h2>Create Course</h2>
            <Link to="/">
              <button class="btn btn-info">SWITCH TO NORMAL</button>
            </Link>
          </div>

          <div class="video-icon relative">
            <div class="text-center inner-icon-text">
              <UploadSVG />

              <br />
              <small>Create course and upload vdeos here</small>
            </div>
          </div>
        </div>
      </WithBasicLayout>
    </>
  );
}

export default InstructorCreateCourse1;
