import React from "react";
import { ReactComponent as Moree } from "../../assets/images/moree.svg";
import img1 from "../../assets/images/power-zone-1.jpg";
import img2 from "../../assets/images/power-zone-2.jpg";
import img3 from "../../assets/images/power-zone-3.jpg";
import { ReactComponent as Gym } from "../../assets/images/gym.svg";
import { ReactComponent as Fitness } from "../../assets/images/fitness.svg";
import { ReactComponent as People } from "../../assets/images/people.svg";
import { ReactComponent as Sports } from "../../assets/images/sports.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
function ContentSection() {
  return (
    <>
      <section className="power-zone-card-section">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-3 col-sm-12 col-lg-3 col-xs-12 wow fadeInLeft"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              <img src={img1} alt="" className="img-fluid" />
            </div>
            <div
              className="col-md-9 col-sm-12 col-lg-9 col-xs-12 power-zone-innercontent relative wow fadeInRight"
              data-wow-duration=".5s"
              data-wow-delay=".6s"
            >
              <h2>GETTING STARTED</h2>
              <p>
                Iorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat.{" "}
              </p>
              <h3>INTENSITY</h3>
              <p>
                <span>
                  <FontAwesomeIcon icon={faChartBar} />
                </span>
                Low
              </p>
              <h3>EPISODES</h3>
              <p>12</p>
              <h3>EQUIPMENT</h3>
              <ul className="equipment">
                <li>
                  <span>
                    <span className="img-fluid">
                      <Gym />
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    <span className="img-fluid">
                      <Fitness />
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    <span className="img-fluid">
                      <People />
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    <span className="img-fluid">
                      <Sports />
                    </span>
                  </span>
                </li>
              </ul>
              <a href="/">
                <div className="card-section-additem">
                  <span className="img-fluid more-item">
                    <Moree />
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="row">
            <div
              className="col-md-3 col-sm-12 col-lg-3 col-xs-12 wow fadeInLeft"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              <img src={img2} alt="" className="img-fluid" />
            </div>
            <div
              className="col-md-9 col-sm-12 col-lg-9 col-xs-12 power-zone-innercontent relative wow fadeInRight"
              data-wow-duration=".5s"
              data-wow-delay=".6s"
            >
              <h2>GETTING STARTED</h2>
              <p>
                Iorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat.{" "}
              </p>
              <h3>INTENSITY</h3>
              <p>
                <span>
                  <FontAwesomeIcon icon={faChartBar} />
                </span>
                Low
              </p>
              <h3>EPISODES</h3>
              <p>12</p>
              <h3>EQUIPMENT</h3>
              <ul className="equipment">
                <li>
                  <span>
                    <span className="img-fluid">
                      <Gym />
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    <span className="img-fluid">
                      <Fitness />
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    <span className="img-fluid">
                      <People />
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    <span className="img-fluid">
                      <Sports />
                    </span>
                  </span>
                </li>
              </ul>
              <a href="/">
                <div className="card-section-additem">
                  <span className="img-fluid more-item">
                    <Moree />
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="row">
            <div
              className="col-md-3 col-sm-12 col-lg-3 col-xs-12 wow fadeInLeft"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              <img src={img3} alt="" className="img-fluid" />
            </div>
            <div
              className="col-md-9 col-sm-12 col-lg-9 col-xs-12 power-zone-innercontent relative wow fadeInRight"
              data-wow-duration=".5s"
              data-wow-delay=".6s"
            >
              <h2>GETTING STARTED</h2>
              <p>
                Iorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat.{" "}
              </p>
              <h3>INTENSITY</h3>
              <p>
                <span>
                  <FontAwesomeIcon icon={faChartBar} />
                </span>
                Low
              </p>
              <h3>EPISODES</h3>
              <p>12</p>
              <h3>EQUIPMENT</h3>
              <ul className="equipment">
                <li>
                  <span>
                    <span className="img-fluid">
                      <Gym />
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    <span className="img-fluid">
                      <Fitness />
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    <span className="img-fluid">
                      <People />
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    <span className="img-fluid">
                      <Sports />
                    </span>
                  </span>
                </li>
              </ul>
              <a href="/">
                <div className="card-section-additem">
                  <span className="img-fluid more-item">
                    <Moree />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContentSection;
