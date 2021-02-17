import React from "react";
import classes from "./Message.module.css";
import Navbar from "../Navbar/Navbar";

let icon = require("../../../assets/images/message.svg");

function Message() {
  return (
    <>
      <div
        className="col-10 ml-auto c0 p-0"
        style={{
          Width: "44.271vw",
          position: "relative",
        }}
      >
        {/* Navbar */}

        <Navbar title={"Messages"} />

        <div
          className="col text-center"
          style={{
            dipslay: "absolute",
            top: "10%",
            left: "25%",
          }}
        >
          <img
            className={classes.message}
            style={{ margin: "0 0" }}
            src={icon}
            alt="Messaage"
          />
          <p className={classes.message} style={{ margin: "10px 0" }}>
            You Do not have any messages yet!
          </p>
        </div>
      </div>
    </>
  );
}

export default Message;
