import React, { useState, useEffect } from "react";
import { Bell } from "react-feather";
import policeIcon from "../../../assets/images/streamline-icon-police-hat-1@140x140 (1).png";
import crossIcon from "../../../assets/images/Icon ionic-ios-close.png";
import bankingIcon from "../../../assets/images/banking.svg";
import softwareIcon from "../../../assets/images/software.svg";
import technicalIcon from "../../../assets/images/technical.svg";
import "./jobRequests.css";
import DetailsRoundedIcon from "@material-ui/icons/DetailsRounded";

const JobRequests = ({ history }) => {
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
          position: "sticky",
          top: 0,
          boxShadow: "0px 5px 15px black",
        }}
      >
        <h3 className="fo1 font-weight-light h3Forprofile">Job Requests</h3>
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
        style={{
          position: "absolute",
          left: "25%",
          top: "200%",
          textAlign: "center",
        }}
      >
        <img
          style={{ width: "25em", margin: "2em auto" }}
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/empty_xct9.svg"
          alt=""
        />
        <p>You have no job requests yet, but we will keep you informed !</p>
      </div>
      <div className="row pl-5 pr-5 pt-4 job-section">
        <div className="col-12">
          <div className="row pb-4">
            <div className="col-8">
              <h4 className="p-0 mb-2">Posted jobs</h4>
              <div className="filter-section-btns d-flex">
                <p>Quick Filter :</p>
                <span>
                  <button className="btn ml-2">Onsite</button>
                  <button className="btn ml-2">Remote</button>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <div
                    className="card mb-4 p-3"
                    style={{ position: "relative" }}
                  >
                    <div className="card-title p-0 m-0">
                      <p>
                        Marthahalli Police Station -
                        <span style={{ color: "#76C1FC" }}>Onsite</span>
                        <span style={{ color: "grey", fontSize: ".9em" }}>
                          &#8226; 16th Oct at 03:30PM &#8226; 3 Hours
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
                          <p>
                            #769, GYR Chambers, Kaikondanhalli, Sarjapur Road,
                            Bengaluru, Karnataka.
                          </p>
                        </div>
                        <div className="card-img mt-3 mb-3">
                          <img src={policeIcon} alt="police_hat" />
                        </div>
                        <div className="card-footer p-0 m-0 ">
                          <p>
                            Requirement:
                            <span style={{ color: "white", fontWeight: 500 }}>
                              Hindi Interpreter
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="right-side">
                        <p>&#8377; 500</p>

                        <div className="right-side-btns">
                          <button className="btn btn-primary mr-3 accept-btn">
                            Accept
                          </button>
                          <button className="btn negotiate-btn">
                            Negotiate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="card mb-4 p-3"
                    style={{ position: "relative" }}
                  >
                    <div className="card-title p-0 m-0">
                      <p>
                        National Electronics -
                        <span style={{ color: "#76C1FC" }}>Remote</span>
                        <span style={{ color: "grey", fontSize: ".9em" }}>
                          &#8226; 16th Oct at 03:30PM &#8226; 1 Hours
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
                          <p>
                            #769, GYR Chambers, Kaikondanhalli, Sarjapur Road,
                            Bengaluru, Karnataka.
                          </p>
                        </div>
                        <div className="card-img mt-3 mb-3">
                          <img src={technicalIcon} alt="" />
                        </div>
                        <div className="card-footer p-0 m-0 ">
                          <p>
                            Requirement:
                            <span style={{ color: "white", fontWeight: 500 }}>
                              English Interpreter
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="right-side">
                        <p>&#8377; 300</p>

                        <div className="right-side-btns">
                          <button className="btn btn-primary mr-3 accept-btn">
                            Accept
                          </button>
                          <button className="btn negotiate-btn">
                            Negotiate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="card mb-4 p-3"
                    style={{ position: "relative" }}
                  >
                    <div className="card-title p-0 m-0">
                      <p>
                        State Bank Of India -
                        <span style={{ color: "#76C1FC" }}>Onsite</span>
                        <span style={{ color: "grey", fontSize: ".9em" }}>
                          &#8226; 16th Oct at 03:30PM &#8226; 2 Hours
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
                          <p>
                            #769, GYR Chambers, Kaikondanhalli, Sarjapur Road,
                            Bengaluru, Karnataka.
                          </p>
                        </div>
                        <div className="card-img mt-3 mb-3">
                          <img src={bankingIcon} alt="" />
                        </div>
                        <div className="card-footer p-0 m-0 ">
                          <p>
                            Requirement:
                            <span style={{ color: "white", fontWeight: 500 }}>
                              English Interpreter
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="right-side">
                        <p>&#8377; 300</p>

                        <div className="right-side-btns">
                          <button className="btn btn-primary mr-3 accept-btn">
                            Accept
                          </button>
                          <button className="btn negotiate-btn">
                            Negotiate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="card mb-4 p-3"
                    style={{ position: "relative" }}
                  >
                    <div className="card-title p-0 m-0">
                      <p>
                        HP Showrooma -
                        <span style={{ color: "#76C1FC" }}>Remote</span>
                        <span style={{ color: "grey", fontSize: ".9em" }}>
                          &#8226; 16th Oct at 03:30PM &#8226; 3 Hours
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
                          <p>
                            #769, GYR Chambers, Kaikondanhalli, Sarjapur Road,
                            Bengaluru, Karnataka.
                          </p>
                        </div>
                        <div className="card-img mt-3 mb-3">
                          <img src={softwareIcon} alt="" />
                        </div>
                        <div className="card-footer p-0 m-0 ">
                          <p>
                            Requirement:
                            <span style={{ color: "white", fontWeight: 500 }}>
                              Hindi Interpreter
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="right-side">
                        <p>&#8377; 400</p>

                        <div className="right-side-btns">
                          <button className="btn btn-primary mr-3 accept-btn">
                            Accept
                          </button>
                          <button className="btn negotiate-btn">
                            Negotiate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default JobRequests;
