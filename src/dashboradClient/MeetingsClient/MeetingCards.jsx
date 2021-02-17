import React from "react";
import "./MeetingCard.css";

import infoIcon from "../../assets/images/Icon feather-info.svg";
function MeetingCards({
  date,
  time,
  type,
  title,
  duration,
  amount,
  totalapplicants,
  setclickevent,
}) {
  return (
    <div
      className="mt-3 ml-4 MeetingCard "
      onClick={() => {
        setclickevent(true);
      }}
    >
      <div className="cofMeetingcard">
        <div className="McardFirstChild1">
          <div>
            <div>
              <span className="textcolorpurple">
                {title}- {type}
              </span>{" "}
              <span className="textcolorWhite">
                &#8226; {date} &#8226; {time}
              </span>
            </div>

            <div>
              Duration : <span className="textcolorpurple"> {duration} </span>
            </div>

            <div className="amountSection">
              Amount : &#8377;{amount}{" "}
              <img
                className="infoicon"
                width={20}
                src={infoIcon}
                alt="infoIcon"
              />
              <span className="reqiredIntrepreter">
                No. of intrepreter required : {totalapplicants}
              </span>
            </div>
          </div>
        </div>
        <div className="McardFirstChild2">
          <div className="totalapplicants">
            No. of Applicants :{" "}
            <span className="textcolorpurple">{totalapplicants} </span>
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
