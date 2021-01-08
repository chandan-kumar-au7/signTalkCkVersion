import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";

import "./jobRequests.css";
import FullViewjobRequest from "./FullViewjobRequest";
import JobCard from "./JobCard";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const JobRequests = () => {
  const [JobData, setJobData] = useState([]);

  const [ViewFullJobDetails, setViewFullJobDetails] = useState(false);

  // ------------------------

  let jobstatus = "";
  let image = "";
  let title = "Marthahalli Police Station";
  let date = "16th Oct at 03:30PM";
  let timeperiod = "3 Hour";
  let requirement = "Hindi Interpreter";
  let irequired = "4 (3 Left)";

  let address = "#769,Gyr Chambers, Kalkondahali, Sarjapur Road,";
  let addressCityState = "Bengaluru, Karnataka,";
  let Application = 12;
  let Requirement = 4;
  let Selected = 1;
  let RemainingVacancies = 3;
  let rateperhour = 800;

  let paragraph = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab voluptas odio, nulla, reiciendis perferendis ratione modi fugiat qui cum ea hic accusamus in suscipit ipsam iste voluptatibus quos quaerat.`;

  // ------------------------

  // fetch upcomming job db
  const FetchJobJson = () => {
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
        setJobData(myJson);
      });
  };

  const FullViewFunc = () => {
    console.log("clicked");
    setViewFullJobDetails(true);
  };

  useEffect(() => {
    FetchJobJson();
  }, []);

  return (
    <div
      className="col-10 ml-auto c0 p-0"
      style={{
        Width: "44.271vw",
        position: "relative",
      }}
    >
      <Navbar title={"Job Requests"} />

      {ViewFullJobDetails ? (
        <>
          <div
            style={{
              cursor: "pointer",
              marginLeft: "100px",
              marginTop: "30px",
              height: "40px",
              width: "40px",
              borderRadius: "50%",
            }}
            onClick={() => setViewFullJobDetails(false)}
          >
            <ArrowBackIosIcon />
          </div>
          <FullViewjobRequest
            jobstatus={jobstatus}
            image={image}
            title={title}
            date={date}
            timeperiod={timeperiod}
            requirement={requirement}
            irequired={irequired}
            address={address}
            addressCityState={addressCityState}
            Application={Application}
            Requirement={Requirement}
            Selected={Selected}
            RemainingVacancies={RemainingVacancies}
            rateperhour={rateperhour}
            paragraph={paragraph}
          />
        </>
      ) : (
        <>
          <div
            style={{
              position: "absolute",
              left: "25%",
              top: "200%",
              textAlign: "center",
            }}
          >
            <img
              style={{ width: "25em", margin: "-320px auto 0 auto" }}
              src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/empty_xct9.svg"
              alt=""
            />
            <p>You have no job requests yet, but we will keep you informed !</p>
          </div>

          <div className="row pl-5 pr-5 pt-4 job-section">
            <div className="col-12">
              <div className="row pb-4">
                <div className="col-8">
                  <h4 className="p-0 mb-2">Posted jobs</h4>
                  <div className="filter-section-btns d-flex">
                    <p>Quick Filter :</p>
                    <span>
                      <button className="btn ml-2">Onsite</button>
                      <button className="btn ml-2">Remote</button>
                    </span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12">
                      {/* ====================== */}

                      {JobData.length > 0 &&
                        JobData.map((data) => (
                          <JobCard
                            FullViewFunc={FullViewFunc}
                            key={data.id}
                            id={data.id}
                            title={data.title}
                            type={data.type}
                            timeStamp={data.timeStamp}
                            address={data.address}
                            btntype={data.btntype}
                            price={data.price}
                            requirement={data.requirement}
                            period={data.period}
                          />
                        ))}

                      {/* ================== */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default JobRequests;
