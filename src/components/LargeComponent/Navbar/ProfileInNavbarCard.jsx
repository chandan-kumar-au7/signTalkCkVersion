import React, { useState, useEffect } from "react";
import DetailsRoundedIcon from "@material-ui/icons/DetailsRounded";
import { useHistory } from "react-router-dom";

function ProfileInNavbarCard() {
  const history = useHistory();

  const [Display, setDisplay] = useState(false);

  const HandleDisplyDropdown = () => {
    if (Display) {
      setDisplay(false);
    } else {
      setDisplay(true);
    }
  };

  useEffect(() => {
    window.onclick = function (event) {
      if (!event.target.matches(".sowthedica")) {
        setDisplay(false);
      }
    };
  });

  return (
    <>
      <div className="NavDropDown sowthedica" onClick={HandleDisplyDropdown}>
        <div className="NavDropDownchild sowthedica">
          <div
            style={{
              position: "absolute",
              top: "50%",
              fontSize: "16px",
              transform: "translate(25px, -50%)",
            }}
            className="sowthedica"
          >
            Neo Ho..
          </div>
          <div className="NavDropDownchild2 sowthedica">
            <DetailsRoundedIcon className="DetailsRoundedIcon sowthedica" />
          </div>
        </div>
      </div>

      {Display && (
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
    </>
  );
}

export default ProfileInNavbarCard;
