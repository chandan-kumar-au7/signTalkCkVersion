import React, { useState, useEffect } from "react";
import stopwatchicon from "../../../assets/images/stopwatchicon.png";
import usericon from "../../../assets/images/usericon.png";
import certifiedicon from "../../../assets/images/certifiedicon.png";
import Divider from "@material-ui/core/Divider";

function RatingSection() {
  const [div1per, setdiv1per] = useState(0);
  const [div2per, setdiv2per] = useState(0);
  const [div3per, setdiv3per] = useState(0);
  const [div4per, setdiv4per] = useState(0);
  const [Reviews, setReviews] = useState("");

  useEffect(() => {
    setdiv1per("4.8");
    setdiv2per("4.2");
    setdiv3per("3.2");
    setdiv4per("89");
    setReviews("72");
  }, []);

  return (
    <div className="col-12 ">
      <h4 style={{ marginLeft: "3rem" }}>Ratings</h4>
      <div
        className="row"
        style={{ marginLeft: "5.5rem", textAlign: "center" }}
      >
        <div
          className="col-2"
          style={{
            background: "#272727",
            height: "160px",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <div className="stopwatch">
            <div className="stopwatchimg">
              <img src={stopwatchicon} alt="stopwatch" />
            </div>
            <div className="">On-Time</div>
            <div className="">
              <span style={{ color: "#24e5af" }}>{div1per}</span> / 5.0
            </div>
          </div>
        </div>
        <div
          className="col-2"
          style={{
            background: "#272727",
            height: "160px",
            borderRadius: "10px",
            textAlign: "center",
            marginLeft: "1rem",
          }}
        >
          <div className="stopwatch">
            <div className="stopwatchimg">
              <img src={usericon} alt="usericon" />
            </div>
            <div className="">Attitude</div>
            <div className="">
              <span style={{ color: "#24e5af" }}>{div2per}</span> / 5.0
            </div>
          </div>
        </div>
        <div
          className="col-2"
          style={{
            background: "#272727",
            height: "160px",
            borderRadius: "10px",
            textAlign: "center",
            marginLeft: "1rem",
          }}
        >
          <div className="stopwatch">
            <div className="stopwatchimg">
              <img src={certifiedicon} alt="certifiedicon" />
            </div>
            <div className="">Quality</div>
            <div className="">
              <span style={{ color: "#ffa173" }}> {div3per} </span> / 5.0
            </div>
          </div>
        </div>

        <Divider
          variant="middle"
          orientation="vertical"
          flexItem
          style={{ background: "white", marginLeft: "2rem" }}
        />

        <div
          className="col-3"
          style={{
            background: "#272727",
            height: "160px",
            padding: "1%",
            borderRadius: "10px",
            textAlign: "center",
            marginLeft: "1rem",
          }}
        >
          <div className="col">Recommended By</div>
          <div className="col">
            <h1 style={{ color: "#24e5af", font: "16%" }}>{div4per} %</h1>
          </div>
          <div className="col"> ( {Reviews} reviews)</div>
        </div>
      </div>
    </div>
  );
}

export default RatingSection;
