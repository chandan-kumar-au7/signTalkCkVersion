import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Card from "../../components/LargeComponent/Notification/Card";

let icon = require("../../assets/images/notification.svg");

function Notification(props) {
  const [data, setData] = useState([]);

  // fetch db
  const getData = () => {
    fetch("notificationDummyData.json", {
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
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  });

  return (
    <div
      className="col-10 ml-auto c0 p-0"
      style={{
        Width: "44.271vw",
        position: "relative",
        marginBottom: "10px",
      }}
    >
      <Navbar title={"Notification"} />
      {/* --------------------- if no notification than show this ---------------------- */}
      {data && data.length === 0 ? (
        <div
          className="col text-center"
          style={{
            dipslay: "absolute",
            top: "10%",
            left: "25%",
          }}
        >
          <img
            className="notification"
            style={{ margin: "2vh 0 0 -2vw" }}
            src={icon}
            alt="notifiaction"
          />
          <p className="notification" style={{ margin: 0 }}>
            You Do not have any Notifications yet!
          </p>
        </div>
      ) : (
        data.map((data, i) => (
          // {{{{{{{{{{{{{{{{{{{{ if any data in db }}}}}}}}}}}}}}}}}}}}

          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            message={data.message}
            timestamp={data.timestamp}
            image={data.image}
          />
        ))
      )}
    </div>
  );
}

export default Notification;
