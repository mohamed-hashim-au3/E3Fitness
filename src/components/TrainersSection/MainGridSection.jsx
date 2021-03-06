import React from "react";

import Team1 from "../../assets/images/team/team-1.jpg";
import Team2 from "../../assets/images/team/team-2.jpg";
import Team3 from "../../assets/images/team/team-3.jpg";
import Team4 from "../../assets/images/team/team-4.jpg";
import Team5 from "../../assets/images/team/team-5.jpg";
import Team6 from "../../assets/images/team/team-6.jpg";
import Team7 from "../../assets/images/team/team-7.jpg";
import Team8 from "../../assets/images/team/team-8.jpg";
import Team9 from "../../assets/images/team/team-9.jpg";
import Team10 from "../../assets/images/team/team-10.jpg";
import Team11 from "../../assets/images/team/team-11.jpg";
import Team12 from "../../assets/images/team/team-12.jpg";
import TrainerDetailSection from "./TrainerDetailSection";
function MainGridSection() {
  return (
    <>
      <section className="meet-team-members">
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-md-3 col-sm-6 col-lg-3 col-xs-12 text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              <img src={Team1} alt="" className="img-fluid" />
              <h3 className="blue-text">Robert Henz</h3>
              <TrainerDetailSection img={Team1} />
            </div>
            <div
              className="col-md-3 col-sm-6 col-lg-3 col-xs-12 text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              <img src={Team2} alt="" className="img-fluid" />
              <h3 className="blue-text">Robert Henz</h3>
              <TrainerDetailSection img={Team2} />
            </div>
            <div
              className="col-md-3 col-sm-6 col-lg-3 col-xs-12 text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".5s"
            >
              <img src={Team3} alt="" className="img-fluid" />
              <h3 className="blue-text">Robert Henz</h3>
              <TrainerDetailSection img={Team3} />
            </div>
            <div
              className="col-md-3 col-sm-6 col-lg-3 col-xs-12 text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay="0.5s"
            >
              <img src={Team4} alt="" className="img-fluid" />
              <h3 className="blue-text">Robert Henz</h3>
              <TrainerDetailSection img={Team4} />
            </div>
          </div>

          <div className="row">
            <div
              className="col-md-3 col-sm-6 col-lg-3 col-xs-12 text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay="0.5s"
            >
              <img src={Team5} alt="" className="img-fluid" />
              <h3 className="blue-text">Robert Henz</h3>
              <TrainerDetailSection img={Team5} />
            </div>
            <div
              className="col-md-3 col-sm-6 col-lg-3 col-xs-12 text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay="0.5s"
            >
              <img src={Team6} alt="" className="img-fluid" />
              <h3 className="blue-text">Robert Henz</h3>
              <TrainerDetailSection img={Team6} />
            </div>
            <div
              className="col-md-3 col-sm-6 col-lg-3 col-xs-12 text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay="0.5s"
            >
              <img src={Team7} alt="" className="img-fluid" />
              <h3 className="blue-text">Robert Henz</h3>
              <TrainerDetailSection img={Team7} />
            </div>
            <div
              className="col-md-3 col-sm-6 col-lg-3 col-xs-12 text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay="0.5s"
            >
              <img src={Team8} alt="" className="img-fluid" />
              <h3 className="blue-text">Robert Henz</h3>
              <TrainerDetailSection img={Team8} />
            </div>
          </div>

          <div className="row">
            <div
              className="col-md-3 col-sm-6 col-lg-3 col-xs-12 text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay="0.5s"
            >
              <img src={Team9} alt="" className="img-fluid" />
              <h3 className="blue-text">Robert Henz</h3>
              <TrainerDetailSection img={Team9} />
            </div>
            <div
              className="col-md-3 col-sm-6 col-lg-3 col-xs-12 text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay="0.6s"
            >
              <img src={Team10} alt="" className="img-fluid" />
              <h3 className="blue-text">Robert Henz</h3>
              <TrainerDetailSection img={Team10} />
            </div>
            <div
              className="col-md-3 col-sm-6 col-lg-3 col-xs-12 text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".7s"
            >
              <img src={Team11} alt="" className="img-fluid" />
              <h3 className="blue-text">Robert Henz</h3>
              <TrainerDetailSection img={Team11} />
            </div>
            <div
              className="col-md-3 col-sm-6 col-lg-3 col-xs-12 text-center wow fadeInUp"
              data-wow-duration=".5s"
              data-wow-delay=".8s"
            >
              <img src={Team12} alt="" className="img-fluid" />
              <h3 className="blue-text">Robert Henz</h3>
              <TrainerDetailSection img={Team12} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainGridSection;
