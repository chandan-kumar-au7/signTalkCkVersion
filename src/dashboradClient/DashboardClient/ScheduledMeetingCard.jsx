import React from "react";
import "./ScheduledMeetingCard.css";

function ScheduledMeetingCard(props) {
  return (
    <div className="ujcardparent scroll">
      <div className="ujcardchild scroll cardINDashBoardClient ">
        <div className="titleofujcard">
          {props.title} - <span className="textcolorpurple">{props.type}</span>
        </div>
        <hr className="hrinujcard" />
        <div className="propsAddress">{props.address}</div>
        <div>
          Scheduled On : <span className="textcolorpurple">{props.date}</span>{" "}
          at <span className="textcolorpurple">{props.time}</span>
        </div>
        <div className="btntypeclient">{props.btntype}</div>
      </div>
    </div>
  );
}

export default ScheduledMeetingCard;
