import React from "react";
import Calendar from "react-calendar";
import Navbar from "../Navbar/Navbar";

import { withRouter } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import Divider from "@material-ui/core/Divider";
import "./Schedule.module.css";
import "react-calendar/dist/Calendar.css";

function Schedule() {
  const arr = [1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <>
      <div
        className="col-10 ml-auto c0 p-0"
        style={{
          Width: "44.271vw",
          position: "relative",
        }}
      >
        <Navbar title={"Schedule"} />

        <div
          className="col-6"
          style={{
            position: "absolute",
            left: "3px",
            top: "150%",
          }}
        >
          <div className="col-12 m-auto d-flex justify-content-between p-0">
            <div className="col text-left">
              <h4>This Month</h4>
            </div>
          </div>
          <Calendar
            style={{ width: "500px" }}
            className="col-12 mr-auto mt-4  p-3 c5 round w-100"
          />
        </div>
        <div
          className="col-6 ml=3"
          style={{
            position: "absolute",
            right: "3px",
            top: "150%",
          }}
        >
          <div className="col-12 d-flex justify-content-between p-0">
            <div className="col text-left">
              <h4>16 NOV .</h4>
            </div>
            <div className="col">
              <h4>Appointments</h4>
            </div>
          </div>
          <div
            className="col-12 mt-4"
            style={{ maxHeight: "600px", overflow: "scroll" }}
          >
            {arr.map((item) => (
              <div className=" col-12 row p-3 c5 col-10 round mb-2 ">
                <div className="col-4">
                  <p className="d-inilne m-0 p-2" style={{ color: "#fff" }}>
                    10:30AM
                  </p>
                  <p className="d-inilne p-2">(3 Hours)</p>{" "}
                  <span className="co ml-3 p-0">Onsite</span>{" "}
                </div>
                <div className="col-1">
                  <Divider
                    variant="middle"
                    orientation="vertical"
                    flexItem
                    style={{
                      background: "white",
                      marginLeft: "0rem",
                      height: "100px",
                      position: "absolute",
                      marginTop: "1rem",
                    }}
                  />
                </div>

                <div className="col-7">
                  <p className="d-inilne m-0 p-0" style={{ color: "#fff" }}>
                    State Bank Of India
                  </p>
                  <p className="f15 d-inline co1 ">
                    #769 GYR Chambur, Kaikondanahlli,sarjapur
                    Road,Bangalore,Karnataka
                  </p>
                  <p className="d-inilne m-0 p-0" style={{ color: "#fff" }}>
                    Language:
                    <span className="co m-2">English</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(Schedule);
