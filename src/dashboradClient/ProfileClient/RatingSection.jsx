import React, { useState, useEffect } from "react";
import humanrecourceicon from "../../assets/images/humanrecource.svg";
import hearticon from "../../assets/images/heart.svg";
import Divider from "@material-ui/core/Divider";

function RatingSection() {
  const [div1per, setdiv1per] = useState(0);
  const [div2per, setdiv2per] = useState(0);
  const [div3per, setdiv3per] = useState(0);
  const [div4per, setdiv4per] = useState(0);
  const [Reviews, setReviews] = useState("");

  useEffect(() => {
    setdiv1per("138");
    setdiv2per("13");
    setdiv3per("3.2");
    setdiv4per("24");
    setReviews("12");
  }, []);

  return (
    <div className="col-12 ">
      <h4 style={{ marginLeft: "3vw" }}>Your Impact</h4>
      <div className="row" style={{ marginLeft: "5.5vw", textAlign: "center" }}>
        <div
          className="col-3"
          style={{
            background: "#272727",
            height: "160px",
            borderRadius: "10px",
            position: "relative",
          }}
        >
          <div className="stopwatch">
            <div className="stopwatchimgclient">
              <img src={hearticon} alt="stopwatch" />
            </div>
            <br />
            <br />
            <div>Hospatiality</div>
            <div>
              <span style={{ color: "#24e5af" }}>
                {" "}
                <b> {div1per} </b>
              </span>
            </div>
          </div>
        </div>
        <div
          className="col-3"
          style={{
            background: "#272727",
            height: "160px",
            borderRadius: "10px",
            textAlign: "center",
            marginLeft: "1rem",
          }}
        >
          <div className="stopwatch">
            <div className="stopwatchimg col">
              <img src={humanrecourceicon} alt="usericon" />
            </div>
            <div className="">Professionalism</div>
            <div className="">
              <span style={{ color: "#24e5af" }}>
                {" "}
                <b>{div2per} </b>
              </span>
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
          <div className="col">
            <h2 style={{ color: "#24e5af" }}>&#8377;{div4per}K</h2>
          </div>
          <div style={{ color: "white" }} className="col colorwhite">
            {" "}
            <b>Income Generated</b>{" "}
          </div>
          <div style={{ color: "white" }} className="col">
            <b> for Interperters</b>
          </div>
          <div className="col"> ( {Reviews} Meetings )</div>
        </div>
      </div>
    </div>
  );
}

export default RatingSection;
