import React, { useState, useEffect } from "react";
import classes from "./Message.module.css";
import DetailsRoundedIcon from "@material-ui/icons/DetailsRounded";

import { Bell } from "react-feather";
let icon = require("../../../assets/images/message.svg");

function Message({ history, ...props }) {
  const [DisplayDropdown, setDisplayDropdown] = useState(false);

  const HandleDisplyDropdown = () => {
    if (DisplayDropdown) {
      setDisplayDropdown(false);
    } else {
      setDisplayDropdown(true);
    }
  };

  useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches(".sowthedic")) {
        setDisplayDropdown(false);
      }
    };
  });

  return (
    <>
      <div
        className="col-10 ml-auto c0 p-0"
        style={{
          Width: "44.271vw",
          position: "relative",
        }}
      >
        <div
          className="col-12 pl-3 pt-3 p-0 pb-5"
          style={{
            height: "80px",
            boxShadow: "0px 5px 15px black",
            position: "sticky",
            top: "0px",
            right: "0px",
          }}
        >
          <h3 className="fo1 font-weight-light h3Forprofile">Messages</h3>

          <div className="rounded-circle p-2 c4 bellIcon ">
            <Bell />
          </div>

          <div className="NavDropDown sowthedic" onClick={HandleDisplyDropdown}>
            <div className="NavDropDownchild sowthedic">
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  fontSize: "16px",
                  transform: "translate(25px, -50%)",
                }}
                className="sowthedic"
              >
                Neo Ho..
              </div>
              <div className="NavDropDownchild2 sowthedic">
                <DetailsRoundedIcon className="DetailsRoundedIcon sowthedic" />
              </div>
            </div>
          </div>

          {DisplayDropdown && (
            <ul className="dropdownMenu">
              <li className="dropdownMenuli">Open Profile</li>
              <li className="dropdownMenuli">Account Setting</li>
              <li className="dropdownMenuli">Privacy Policy</li>
              <li
                className="dropdownMenuli"
                onClick={() => {
                  localStorage.removeItem("token");
                  history.push("/interpretly");
                }}
              >
                Log Out
              </li>
            </ul>
          )}
        </div>
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
            style={{ margin: "2em 0" }}
            src={icon}
            alt="Messaage"
          />
          <p className={classes.message} style={{ margin: 0 }}>
            You Do not have any messages yet!
          </p>
        </div>
      </div>
    </>
  );
}

export default Message;
