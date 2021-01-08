import React, { useState, useEffect } from "react";

import UpcommingJobCard from "./Cards/UpcommingJobCard";
import Navbar from "../Navbar/Navbar";
import insurance from "../../../assets/images/streamline-icon-insurance-hands@140x140.svg";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import "./style.css";

function Dashboard() {
  const [UpcommingJobData, setUpcommingJobData] = useState([]);

  // fetch upcomming job db
  const FetchUpcommingJobJson = () => {
    fetch("UpcommingJobData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log("myjson ", myJson);
        setUpcommingJobData(myJson);
      });
  };

  useEffect(() => {
    FetchUpcommingJobJson();
  }, []);

  const arr = [1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div
      className="col-10 ml-auto c0 p-0"
      style={{
        Width: "44.271vw",
        position: "relative",
      }}
    >
      {/* Navbar */}

      <Navbar title={"Dashboard"} />

      <div className="col-12 pb-5">
        <h4 className="text-light font-weight-light mt-3 ml-4">
          Upcoming Jobs
        </h4>
        {UpcommingJobData.length > 0 ? (
          UpcommingJobData.map((data) => (
            <UpcommingJobCard
              key={data.id}
              id={data.id}
              title={data.title}
              type={data.type}
              timestamp={data.timeStamp}
              address={data.address}
              btntype={data.btntype}
              logo={insurance}
            />
          ))
        ) : (
          <div className="container text-center">
            <p className="f20">No upcoming jobs at the moment</p>
          </div>
        )}

        <hr className="c1 col-10 ml-auto mt-5 mb-5 mr-auto" />

        <div className="col-12 row m-auto">
          <div className="col-6">
            <div className="col-12 m-auto d-flex justify-content-between p-0">
              <div className="col text-left">
                <h4>Schedule</h4>
              </div>
              <div className="col text-right">
                <h4 className="co">Expand &gt;</h4>
              </div>
            </div>
            <Calendar className="col-11 mr-auto mt-4 ml-auto p-3 w-100 c5 round" />
          </div>
          <div className="col-6">
            <div className="col-12 m-auto d-flex justify-content-between p-0">
              <div className="col text-left">
                <h4>Job requests</h4>
              </div>
              <div className="col text-right">
                <h4 className="co">See all &gt;</h4>
              </div>
            </div>
            <div className=" col-12 mt-4 container text-center"></div>
            <div
              className="col-12 mt-4"
              style={{ maxHeight: "400px", overflow: "scroll" }}
            >
              {arr.map((item, index) => (
                <div className="p-3 c5 col-12 round mb-2" key={index}>
                  <p className="d-inilne m-0 p-0">
                    Marathahalli Police Station -{" "}
                    <span className="co">Onsite</span>{" "}
                  </p>
                  <div className="justify-content-between row m-auto col-12 p-0">
                    <div className="col text-left p-0 ">
                      <p className="d-inline">Hindi Interpreter</p>
                    </div>
                    <div className="col text-right p-0">
                      <p className="f15 d-inline co1 ml-auto">
                        16th Oct at 03:30PM
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
