import React from "react";
import policeIcon from "../../../assets/images/streamline-icon-police-hat-1@140x140 (1).png";
import crossIcon from "../../../assets/images/Icon ionic-ios-close.png";

// import bankingIcon from "../../../assets/images/banking.svg";
// import softwareIcon from "../../../assets/images/software.svg";
// import technicalIcon from "../../../assets/images/technical.svg";

const JobCard = (props) => {
  return (
    <div
      className="card mb-4 p-3"
      style={{ cursor: "pointer" }}
      onClick={props.FullViewFunc}
    >
      <div className="card-title p-0 m-0">
        <p>
          {props.title}
          <span style={{ color: "#76C1FC" }}>{" " + props.type}</span>
          <span style={{ color: "grey", fontSize: ".9em" }}>
            &#8226; {props.timeStamp} &#8226; {props.period}
          </span>
        </p>
      </div>
      <div className="close-btn">
        <button>
          <img src={crossIcon} alt="" />
        </button>
      </div>
      <div className="d-flex card-footer-wrapper m-0 p-0">
        <div className="left-side mt-1">
          <div className="card-body p-0 mt-1 mb-1">
            <p>{props.address}</p>
          </div>
          <div className="card-img mt-3 mb-3">
            <img src={policeIcon} alt="police_hat" />
          </div>
          <div className="card-footer p-0 m-0 ">
            <p>
              Requirement:
              <span style={{ color: "white", fontWeight: 500 }}>
                {props.requirement}
              </span>
            </p>
          </div>
        </div>
        <div className="right-side">
          <div className="cost">
            <p>&#8377; {props.price}</p>
          </div>
          <div className="right-side-btns">
            <button className="btn btn-primary mr-3 accept-btn">Accept</button>
            <button className="btn negotiate-btn">Negotiate</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
