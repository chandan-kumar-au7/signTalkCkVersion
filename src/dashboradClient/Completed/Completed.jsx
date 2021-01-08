import React, { useState, useEffect } from "react";

import "./Completed.css";
import Navbar from "../Navbar/Navbar";

import CompletedCard from "./CompletedCard";

const Completed = () => {
  const [CompletedClientData, setCompletedClientData] = useState([]);

  const FetchCompletedClientJson = () => {
    fetch("CompletedClientData.json", {
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
        // console.log("myjson ", myJson);
        setCompletedClientData(myJson);
      });
  };

  useEffect(() => {
    FetchCompletedClientJson();
  }, []);

  return (
    <div
      className="col-10 ml-auto c0 p-0"
      style={{
        Width: "44.271vw",
        position: "relative",
        marginBottom: "40px",
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
          style={{ width: "25em", margin: "-120px auto" }}
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
      {/* ------------ card of completed here ---------   */}
      {CompletedClientData.length > 0 &&
        CompletedClientData.map((data) => (
          <CompletedCard
            key={data.id}
            username={data.username}
            type={data.type}
            address={data.address}
            rating={data.rating}
            date={data.date}
          />
        ))}
    </div>
  );
};

export default Completed;
