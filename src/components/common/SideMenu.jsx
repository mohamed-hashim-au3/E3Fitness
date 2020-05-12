import React from "react";
import profile from "../../assets/images/profile.jpg";
import { ReactComponent as CreateCC } from "../../assets/images/create-course-icon.svg";
import { ReactComponent as Courses } from "../../assets/images/course-icon.svg";
import { ReactComponent as Profile } from "../../assets/images/profile-icon.svg";
import { ReactComponent as SbUsers } from "../../assets/images/subscribed-user-icon.svg";
import { ReactComponent as Logout } from "../../assets/images/logout-icon.svg";
function SideMenu() {
  return (
    <>
      <div class="col-md-3 col-sm-6 col-xs-12 left-content p-0">
        <div class="profile-section text-center">
          <h1>
            E3 <span>Fitness</span>
          </h1>
          <br />
          <img src={profile} alt="" class="img-fluid" />
          <p>Elmer Davis</p>
        </div>
        <ul class="side-link-desktop">
          <li>
            <a href="#">
              <CreateCC /> <span className="ml-3">Create Course</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Courses /> <span className="ml-3">Courses </span>
            </a>
          </li>
          <li>
            <a href="#">
              <Profile />
              <span className="ml-3">Profile </span>
            </a>
          </li>
          <li>
            <a href="#">
              <SbUsers /> <span className="ml-3">Subscribed Users </span>
            </a>
          </li>
          <li>
            <a href="#">
              <Logout />
              <span className="ml-3">Logout </span>
            </a>
          </li>
        </ul>
        <ul class="side-link-mobile">
          <li>
            <a href="#">
              <CreateCC />
            </a>
          </li>
          <li>
            <a href="#">
              <Courses />
            </a>
          </li>
          <li>
            <a href="#">
              <Profile />
            </a>
          </li>
          <li>
            <a href="#">
              <SbUsers />
            </a>
          </li>
          <li>
            <a href="#">
              <Logout />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideMenu;
