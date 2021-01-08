import React from "react";
import "./UpcommingJobCard.css";

function UpcommingJobCard(props) {
  const splittedtimestamp = props.timestamp.split(" ");
  return (
    <div className="ujcardparent scroll">
      <div className="ujcardchild scroll hoverBorder ">
        <div className="titleofujcard">
          {props.title} - <span className="textcolorblue">{props.type}</span>
          <img className="logoforupcjob" src={props.logo} />
        </div>
        <hr className="hrinujcard" />
        <div className="propsAddress">{props.address}</div>
        <div>
          Scheduled On :{" "}
          <span className="textcolorblue">
            {splittedtimestamp[0]} {splittedtimestamp[1]}{" "}
          </span>{" "}
          {splittedtimestamp[2]}{" "}
          <span className="textcolorblue">{splittedtimestamp[3]}</span>{" "}
        </div>
        <div className="btntype">{props.btntype}</div>
      </div>
    </div>
  );
}

export default UpcommingJobCard;
