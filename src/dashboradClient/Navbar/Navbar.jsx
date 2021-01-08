import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Bell } from "react-feather";
import DetailsRoundedIcon from "@material-ui/icons/DetailsRounded";
import NatificationCard from "../../components/LargeComponent/Notification/Card";

import "./Navbar.css";

let icon = require("../../assets/images/message.svg");

function Navbar({ Backicon, title, ShowPaymentMethod }) {
  const history = useHistory();

  const [DisplayNotification, setDisplayNotification] = useState(false);
  const [DisplayDropdown, setDisplayDropdown] = useState(false);

  const [data, setData] = useState([]);

  const HandleDisplyDropdown = () => {
    if (DisplayDropdown) {
      setDisplayDropdown(false);
    } else {
      setDisplayDropdown(true);
    }
  };

  const HandleShowNotification = () => {
    if (DisplayNotification) {
      setDisplayNotification(false);
    } else {
      setDisplayNotification(true);
    }
  };

  // fetch notification db
  const FetchNotificationdbJson = () => {
    fetch("notificationDummyData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };

  useEffect(() => {
    FetchNotificationdbJson();

    window.onclick = function (event) {
      if (!event.target.matches(".sowthedic")) {
        setDisplayDropdown(false);
      }
      if (!event.target.matches(".HandleShowNotification")) {
        setDisplayNotification(false);
      }
    };
  }, []);

  return (
    <div
      className="col-12 pl-3 pt-3 p-0 pb-5"
      style={{
        height: "80px",
        boxShadow: "0px 5px 15px black",
        position: "sticky",
        top: "0px",
        right: "0px",
        zIndex: "4",
      }}
    >
      <h3 className="fo1 font-weight-light h3Forprofile h3Forprofileinclient">
        {Backicon && (
          <span
            style={{ cursor: "pointer" }}
            onClick={() => ShowPaymentMethod(false)}
          >
            <Backicon />
          </span>
        )}
        {title}
      </h3>

      <div
        className="rounded-circle p-2  bellIcon HandleShowNotification "
        style={{ background: "#7e21db" }}
        onClick={HandleShowNotification}
      >
        <Bell />
      </div>

      {/* // {{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}} */}
      {DisplayNotification && (
        <div
          style={{
            position: "absolute",
            right: "10px",
            width: "500px",
          }}
        >
          <div
            className="col-12"
            style={{
              maxHeight: "400px",
              marginTop: "50px",
              overflowY: "scroll",
              overflowX: "hidden",
              border: "2px solid #54acf0",
              background: "#171717",
            }}
          >
            <div className="col-12 m-auto d-flex justify-content-between p-0">
              <div
                className="col text-center"
                style={{ marginBottom: "-20px" }}
              >
                <h4>Notification</h4>
              </div>
            </div>
            {
              // {{{{{{{{{{{{{{{{{{{{ if 0 data in db }}}}}}}}}}}}}}}}}}}}

              data && data.length === 0 ? (
                <div className="col text-center">
                  <img
                    className="notification"
                    style={{ margin: "2em auto" }}
                    src={icon}
                    alt="notifiaction"
                  />
                  <p className="notification" style={{ margin: "auto" }}>
                    You Do not have any Notifications yet!
                  </p>
                </div>
              ) : (
                <div className="cardinsideeNOTI">
                  {data.map((data, i) => (
                    // {{{{{{{{{{{{{{{{{{{{ if any data in db }}}}}}}}}}}}}}}}}}}}

                    <NatificationCard
                      className="cardINDashBoardClient"
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      message={data.message}
                      image={data.image}
                      // style={{ border: "2px solid red" }}
                    />
                  ))}
                </div>
              )
            }
          </div>
        </div>
      )}
      {/* // {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} */}

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

      {/* <ProfileInNotification /> */}
    </div>
  );
}

export default Navbar;
