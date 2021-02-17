import React, { useState, useEffect } from "react";

import Navbar from "../Navbar/Navbar";

import ReactModal from "react-responsive-modal";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/step4";

import Card from "./Completedcard";

import "./completed.css";

const Completed = () => {
  const [initiatePayment, setinitiatePayment] = useState(false);
  const [steps, setSteps] = useState(1);
  const [jsonData, setjsonData] = useState([]);

  // fetch upcomming job db
  const FetchJson = () => {
    fetch("CompletedData.json", {
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
        setjsonData(myJson);
      });
  };

  useEffect(() => {
    FetchJson();
  });

  return (
    <div
      className="col-10 ml-auto c0 p-0"
      style={{
        Width: "44.271vw",
        position: "relative",
      }}
    >
      <Navbar title={"Completed"} />

      <div
        style={{
          position: "absolute",
          left: "25%",
          top: "200%",
          textAlign: "center",
        }}
      >
        <img
          style={{ width: "25em", margin: "2em auto" }}
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Selection_re_poer.svg"
          alt=""
        />
        <p>No messages to show yet. We will keep you posted!</p>
      </div>

      <div className="row">
        <div className="col-12 d-flex mt-4 ml-3 sort-dropdown">
          <p className="mt-2">Sort :</p>
          <select className="ml-2">
            <option value="">Most recent First</option>
            <option value="">Older First</option>
          </select>
        </div>
      </div>

      {/* this will be shown when some one cliks on the initiate button */}
      {initiatePayment === true && (
        <ReactModal
          open={initiatePayment === true}
          onClose={() => {
            setinitiatePayment(false);
            setSteps(1);
          }}
          classNames={{
            modal: "Step1Model",
          }}
          center
        >
          {steps === 1 ? (
            <Step1 setSteps={setSteps} />
          ) : steps === 2 ? (
            <Step2 setSteps={setSteps} />
          ) : steps === 3 ? (
            <Step3 setSteps={setSteps} />
          ) : (
            <Step4 setSteps={setSteps} />
          )}
        </ReactModal>
      )}
      <div className="row">
        <div className="col-12">
          {jsonData.length > 0 &&
            jsonData.map((data) => (
              <Card
                setinitiatePayment={setinitiatePayment}
                title={data.title}
                btntype={data.btntype}
                type={data.type}
                address={data.address}
                date={data.date}
                about={data.about}
                person={data.person}
                rating={data.rating}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Completed;
