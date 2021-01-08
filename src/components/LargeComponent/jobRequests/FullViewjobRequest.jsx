import React, { useState } from "react";
import Avatar from "react-avatar";
import Policecap from "../../../assets/images/streamline-icon-police-hat-1@140x140 (1).png";

import "./FullViewjobRequest.css";

export default function Profile({
  jobstatus,
  image,
  title,
  date,
  timeperiod,
  requirement,
  irequired,
  address,
  addressCityState,
  Application,
  Requirement,
  Selected,
  RemainingVacancies,
  rateperhour,
  paragraph,
}) {
  return (
    <>
      <div
        style={{
          borderRadius: "50%",
          width: "8rem",
          marginTop: "5%",
          marginLeft: "2rem",
        }}
      >
        <Avatar
          name={title}
          size="150"
          textSizeRatio={1.75}
          round={true}
          src={image}
        />
      </div>

      <div className="mainParent ">
        <div className="child1">
          <div className="marthalli">
            <div>
              {title} - <span className="BlueColorDiv">{jobstatus}</span>
            </div>
            <div>
              <span className="BlueColorDiv">{date} </span>. {timeperiod}
            </div>
            <div className="Requirement">
              Requirement : <span className="textBold">{requirement}</span>
            </div>
          </div>
          <div className="iconsandburger">
            <div className="Policecap">
              <img
                src={Policecap}
                alt="police_icon"
                style={{ width: "30px" }}
              />
            </div>
            <div className="InterpreterRequired">
              Interpreter Required :
              <span className="BlueColorDiv">{irequired}</span>
            </div>
          </div>
        </div>
        <div className="Paragraph_lorem">{paragraph}</div>
        <hr
          style={{
            height: "2px",
            width: "99%",
            color: "red",
            background: "white",
          }}
        />
        <div className="child2">
          <div className="leftsidedivforaddress">
            <div style={{ fontSize: "16px" }}>
              {address}
              <br />
              {addressCityState}
              <span className="BlueColorDiv"> Open In Map</span>{" "}
            </div>
            <div className="divforappreq">
              <span className="textBold"> Applicants: </span>
              <span className="BlueColorDiv appreq"> {Application}</span>
              Requirement:
              <span className="BlueColorDiv appreq">{Requirement}</span>
              Selected:
              <span className="BlueColorDiv appreq">{Selected}</span>
              Remaining Vacancies:
              <span className="BlueColorDiv appreq">{RemainingVacancies}</span>
            </div>
            <div style={{ marginTop: "20px" }}>
              <button className="btn btn-primary mr-3 accept-btn">
                Accept
              </button>
              <button className="btn negotiate-btn">Negotiate</button>
            </div>
            <p>
              You're <span className="BlueColorDiv">#4</span> in the list. Apply
              Now
            </p>
          </div>
          <div className="rightsidedivforprice cost2">
            <p>&#8377; 500</p>
            <p className="rateperhour">
              Rate per hour -
              <span className="BlueColorDiv"> &#8377; {rateperhour} / hr </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
