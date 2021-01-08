import React from "react";
import "./MeetingCard.css";

import infoIcon from "../../assets/images/Icon feather-info.svg";
function MeetingCards(props) {
  return (
    <div className="mt-3 ml-4 MeetingCard ">
      <div className="cofMeetingcard">
        <div className="McardFirstChild1">
          <div>
            <div>
              <span className="textcolorpurple">
                {props.title}- {props.type}
              </span>{" "}
              <span className="textcolorWhite">
                &#8226; {props.date} &#8226; {props.time}
              </span>
            </div>

            <div>
              Duration :{" "}
              <span className="textcolorpurple"> {props.duration} </span>
            </div>

            <div className="amountSection">
              Amount : &#8377;{props.amount}{" "}
              <img
                className="infoicon"
                width={20}
                src={infoIcon}
                alt="infoIcon"
              />
              <span className="reqiredIntrepreter">
                No. of intrepreter required : {props.totalapplicants}
              </span>
            </div>
          </div>
        </div>
        <div className="McardFirstChild2">
          <div className="totalapplicants">
            No. of Applicants :{" "}
            <span className="textcolorpurple">{props.totalapplicants} </span>
          </div>
          <div>
            <button className="Meetingchild1 viewapplicantsbtn">
              View Applicants
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MeetingCards;
