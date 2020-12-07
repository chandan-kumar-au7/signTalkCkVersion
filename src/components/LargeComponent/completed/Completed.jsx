import React, { useState, useEffect } from "react";
import { Bell } from "react-feather";
import Divider from "@material-ui/core/Divider";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import DetailsRoundedIcon from "@material-ui/icons/DetailsRounded";
import "./completed.css";

const Completed = ({ history }) => {
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
        <h3 className="fo1 font-weight-light h3Forprofile">Completed</h3>

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
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Selection_re_poer.svg"
          alt=""
        />
        <p>No messages to show yet. We will keep you posted!</p>
      </div>

      <div className="row">
        <div className="col-12 d-flex mt-4 ml-3 sort-dropdown">
          <p className="mt-2">Sort :</p>
          <select className="ml-2">
            <option value="">Most recent First</option>
            <option value="">Older First</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card p-3 m-4">
            <div className="row">
              <div className="col-5">
                <div className="row">
                  <div className="col left-title mb-2">
                    <p style={{ color: "white" }}>
                      Apollo Hospital -
                      <span style={{ color: "#54ACF0" }}> Onsite</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col left-body">
                    <p className="m-0"> Sarjapur Road, Bengaluru, Karnataka </p>
                    <p className="m-0"> 04/06/2020 at 04.39 PM </p>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div className="row">
                  <div className="col d-flex">
                    <Divider
                      variant="middle"
                      orientation="vertical"
                      flexItem
                      style={{
                        background: "white",
                        height: "100px",
                      }}
                    />
                    <div>
                      <StarBorderIcon
                        style={{
                          color: "#24E1AC",
                          marginTop: "1.5rem",
                        }}
                      />
                      <br /> 4.5
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col">
                    <p className="m-0 pb-2 right-body">
                      Quality Services , Very Professional and arrived on Time ,
                      Happy with the assistance.
                    </p>
                    <p className="m-0 pb-2">-Asif Mohammed( Receptionist )</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-3 m-4">
            <div className="row">
              <div className="col-5">
                <div className="row">
                  <div className="col left-title mb-2">
                    <p style={{ color: "white" }}>
                      Neso Hospital -
                      <span style={{ color: "#54ACF0" }}> Remote</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col left-body">
                    <p className="m-0"> Sarjapur Road, Bengaluru, Karnataka </p>
                    <p className="m-0"> 04/06/2020 at 04.39 PM </p>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div className="row">
                  <div className="col d-flex">
                    <Divider
                      variant="middle"
                      orientation="vertical"
                      flexItem
                      style={{
                        background: "white",
                        // marginLeft: "2rem",
                        height: "100px",
                        // marginTop: ".8rem",
                      }}
                    />
                    <div>
                      <StarBorderIcon
                        style={{
                          color: "#FA9E71",
                          marginTop: "1.5rem",
                        }}
                      />
                      <br /> 2.5
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col">
                    <p className="m-0 pb-2 right-body">
                      Quality Services , Very Professional and arrived on Time ,
                      Happy with the assistance.
                    </p>
                    <p className="m-0 pb-2">-Asif Mohammed( Receptionist )</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-3 m-4">
            <div className="row">
              <div className="col-5">
                <div className="row">
                  <div className="col left-title mb-2">
                    <p style={{ color: "white" }}>
                      Sum Hospital -
                      <span style={{ color: "#54ACF0" }}> Remote</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col left-body">
                    <p className="m-0"> Sarjapur Road, Bengaluru, Karnataka </p>
                    <p className="m-0"> 04/06/2020 at 04.39 PM </p>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div className="row">
                  <div className="col d-flex">
                    <Divider
                      variant="middle"
                      orientation="vertical"
                      flexItem
                      style={{
                        background: "white",
                        // marginLeft: "2rem",
                        height: "100px",
                        // marginTop: ".8rem",
                      }}
                    />
                    <div>
                      <StarBorderIcon
                        style={{
                          color: "#FDA072",
                          marginTop: "1.5rem",
                        }}
                      />
                      <br /> 3.5
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col">
                    <p className="m-0 pb-2 right-body">
                      Quality Services , Very Professional and arrived on Time ,
                      Happy with the assistance.
                    </p>
                    <p className="m-0 pb-2">-Asif Mohammed( Receptionist )</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-3 m-4">
            <div className="row">
              <div className="col-5">
                <div className="row">
                  <div className="col left-title mb-2">
                    <p style={{ color: "white" }}>
                      Neso Hospital -
                      <span style={{ color: "#54ACF0" }}> Onsite</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col left-body">
                    <p className="m-0"> Sarjapur Road, Bengaluru, Karnataka </p>
                    <p className="m-0"> 04/06/2020 at 04.39 PM </p>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div className="row">
                  <div className="col d-flex">
                    <Divider
                      variant="middle"
                      orientation="vertical"
                      flexItem
                      style={{
                        background: "white",
                        // marginLeft: "2rem",
                        height: "100px",
                        // marginTop: ".8rem",
                      }}
                    />
                    <div>
                      <StarBorderIcon
                        style={{
                          color: "#FE6171",
                          marginTop: "1.5rem",
                        }}
                      />
                      <br /> 1.5
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col">
                    <p className="m-0 pb-2 right-body">
                      Quality Services , Very Professional and arrived on Time ,
                      Happy with the assistance.
                    </p>
                    <p className="m-0 pb-2">-Asif Mohammed( Receptionist )</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card p-3 m-4">
            <div className="row">
              <div className="col-5">
                <div className="row">
                  <div className="col left-title mb-2">
                    <p style={{ color: "white" }}>
                      Neso Hospital -
                      <span style={{ color: "#54ACF0" }}> Onsite</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col left-body">
                    <p className="m-0"> Sarjapur Road, Bengaluru, Karnataka </p>
                    <p className="m-0"> 04/06/2020 at 04.39 PM </p>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div className="row">
                  <div className="col d-flex">
                    <Divider
                      variant="middle"
                      orientation="vertical"
                      flexItem
                      style={{
                        background: "white",
                        height: "100px",
                      }}
                    />
                    <div>
                      <StarBorderIcon
                        style={{
                          color: "#E19068",
                          marginTop: "1.5rem",
                        }}
                      />
                      <br /> 3.5
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className="col">
                    <p className="m-0 pb-2 right-body">
                      Quality Services , Very Professional and arrived on Time ,
                      Happy with the assistance.
                    </p>
                    <p className="m-0 pb-2">-Asif Mohammed( Receptionist )</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completed;
