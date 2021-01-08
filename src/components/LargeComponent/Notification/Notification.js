import React, { useState, useEffect } from "react";
import "./Notification.css";
import Card from "./Card";

import Navbar from "../Navbar/Navbar";

let icon = require("../../../assets/images/notification.svg");

function Notification() {
  // console.log("data.length ", data.length);
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
  }, []);

  return (
    <>
      <div
        className="col-10 ml-auto c0 p-0"
        style={{
          Width: "44.271vw",
          position: "relative",
        }}
      >
        <Navbar title={"Notifications"} />

        {
          // {{{{{{{{{{{{{{{{{{{{ if 0 data in db }}}}}}}}}}}}}}}}}}}}

          data && data.length === 0 ? (
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
                style={{ margin: "2em 0" }}
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
          )
        }
      </div>
    </>
  );
}

export default Notification;
