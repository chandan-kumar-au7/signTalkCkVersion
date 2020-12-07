import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Bell } from "react-feather";
import Avatar from "react-avatar";
import DetailsRoundedIcon from "@material-ui/icons/DetailsRounded";
import Policecap from "../../../assets/images/streamline-icon-police-hat-1@140x140 (1).png";

import "./FullViewjobRequest.css";

export default function Profile() {
  const history = useHistory();
  let [name, setName] = useState("");
  let [jobstatus, setjobstatus] = useState("OnSite");
  let [image, setimage] = useState("");
  let [title, settitle] = useState("Marthahalli Police Station");
  let [date, setdate] = useState("16th Oct at 03:30PM");
  let [timeperiod, settimeperiod] = useState("3 Hour");
  let [requirement, setrequirement] = useState("Hindi Interpreter");
  let [irequired, setirequired] = useState("4 (3 Left)");

  let [address, setaddress] = useState(
    "#769,Gyr Chambers, Kalkondahali, Sarjapur Road,"
  );
  let [addressCityState, setaddressCityState] = useState(
    "Bengaluru, Karnataka,"
  );
  let [Application, setApplication] = useState(12);
  let [Requirement, setRequirement] = useState(4);
  let [Selected, setSelected] = useState(1);
  let [RemainingVacancies, setRemainingVacancies] = useState(3);
  let [price, setprice] = useState(500);
  let [rateperhour, setrateperhour] = useState(800);

  let [
    paragraph,
    setparagraph,
  ] = useState(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab voluptas odio, nulla, reiciendis perferendis ratione modi fugiat qui cum ea hic accusamus in suscipit ipsam iste voluptatibus quos quaerat.
`);

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
      if (!event.target.matches(".NavDropDown")) {
        setDisplayDropdown(false);
      }
    };
  });

  return (
    <>
      <div
        className="col-10 ml-auto c0 p-0"
        style={{
          minWidth: "850px",
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
          <h3 className="d-inline fo1 font-weight-light">Job Requests</h3>

          <div className="mr-3 rounded-circle p-2 c4 float-right text-light">
            <Bell />
          </div>

          <div className="NavDropDown c4 mr-3" onClick={HandleDisplyDropdown}>
            <div className="NavDropDownchild ">
              <span
                style={{
                  position: "absolute",
                  top: "50%",
                  fontSize: "16px",
                  transform: "translate(25px, -50%)",
                }}
              >
                Neo Ho..
              </span>
              <div className="NavDropDownchild2 ">
                <DetailsRoundedIcon className="DetailsRoundedIcon" />
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
            borderRadius: "50%",
            width: "8rem",
            marginTop: "5%",
            marginLeft: "2rem",
          }}
        >
          <Avatar
            name={name}
            size="150"
            textSizeRatio={1.75}
            round={true}
            src={image}
          />
        </div>
      </div>
      <div className="mainParent">
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
          <div className="rightsidedivforprice cost">
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
