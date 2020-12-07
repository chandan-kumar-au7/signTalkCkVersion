import React, { useState, useEffect } from "react";
import Axios from "axios";
import VerifyForm from "./VerifyForm";
import "./style.css";
import { Bell } from "react-feather";
import DetailsRoundedIcon from "@material-ui/icons/DetailsRounded";

import Calendar from "react-calendar";
import { withRouter } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
function Blank({ history, ...props }) {
  const [state, setState] = useState({
    o: false,
    phone: "",
    formState: 0,
    otp: "",
    matchedOtp: "",
    disabled: true,
    verified: false,
    base: "https://whispering-lake-75400.herokuapp.com",
    loader: false,
    phoneVer: false,
    cityVer: false,
    langVer: false,
    backVer: false,
    timer: 0,
    active: "",
  });

  const [DisplayDropdown, setDisplayDropdown] = useState(false);

  const HandleDisplyDropdown = () => {
    if (DisplayDropdown) {
      setDisplayDropdown(false);
    } else {
      setDisplayDropdown(true);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token") === null) history.push("/interpretly");
    getData();
    window.onclick = function (event) {
      if (!event.target.matches(".sowthedic")) {
        setDisplayDropdown(false);
      }
    };
  }, [history]);

  async function getData() {
    try {
      let { data } = await Axios({
        method: "get",
        url: `${state.base}/Home/profile`,
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      if (data.user.mobile_no === undefined) {
        return setState({ ...state, o: true });
      } else {
        return setState({ ...state, o: false });
      }
    } catch (err) {
      history.push("/interpretly");
      console.log(err.message);
    }
  }

  async function sendOtp() {
    try {
      console.log(state.phone.slice(2));
      setState({ ...state, loader: true });
      const { data } = await Axios.get(
        `${state.base}/Home/requestotp?mobile_no=${state.phone.slice(2)}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      // const {data} = await Axios.post(`${state.base}/Register/resetpass/i?type=mobile&mobile_no=${state.phone.slice(2)}`,{
      //     headers: {
      //         token: localStorage.getItem("token"),
      //     }
      // })
      if (data.err === undefined)
        setState({ ...state, loader: false, formState: 1, timer: 300 });
      else {
        setState({ ...state, loader: false, timer: 300 });
        console.log(data);
      }
    } catch (err) {
      setState({ ...state, loader: false });
      console.log(err.message);
    }
  }

  const closeModal = () => setState({ ...state, o: false });
  const arr = [1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div
      className="col-10 ml-auto c0 p-0"
      style={{
        Width: "44.271vw",
        position: "relative",
      }}
    >
      <VerifyForm
        state={state}
        setState={setState}
        closeModal={closeModal}
        sendOtp={sendOtp}
        getData={getData}
      />

      <div
        className="col-12 pl-3 pt-3 p-0 pb-5"
        style={{
          height: "80px",
          boxShadow: "0px 5px 15px black",
          position: "sticky",
          top: "0px",
          right: "0px",
        }}
      >
        <h3 className="fo1 font-weight-light h3Forprofile">Dashboard</h3>

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

      <div className="col-12 pb-5">
        <h4 className="text-light font-weight-light mt-3 ml-4">
          Upcoming Jobs
        </h4>
        <div className="container text-center">
          <p className="f20">No upcoming jobs at the moment</p>
          {/* <h3 className='text-light font-weight-light'>Find a job now</h3>
          <button className='btn c4 text-light'>Go Now</button> */}
        </div>
        <hr className="c1 col-10 ml-auto mt-5 mb-5 mr-auto" />

        <div className="col-12 row m-auto">
          <div className="col-6">
            <div className="col-12 m-auto d-flex justify-content-between p-0">
              <div className="col text-left">
                <h4>Schedule</h4>
              </div>
              <div className="col text-right">
                <h4 className="co">Expand &gt;</h4>
              </div>
            </div>
            <Calendar className="col-11 mr-auto mt-4 ml-auto p-3 w-100 c5 round" />
          </div>
          <div className="col-6">
            <div className="col-12 m-auto d-flex justify-content-between p-0">
              <div className="col text-left">
                <h4>Job requests</h4>
              </div>
              <div className="col text-right">
                <h4 className="co">See all &gt;</h4>
              </div>
            </div>
            <div className=" col-12 mt-4 container text-center">
              {/* <p className='f20'>No upcoming jobs at the moment</p> */}
              {/* <h3 className='text-light font-weight-light'>Find a job now</h3>
          <button className='btn c4 text-light'>Go Now</button> */}
            </div>
            <div
              className="col-12 mt-4"
              style={{ maxHeight: "400px", overflow: "scroll" }}
            >
              {arr.map((item, index) => (
                <div className="p-3 c5 col-12 round mb-2" key={index}>
                  <p className="d-inilne m-0 p-0">
                    Marathahalli Police Station -{" "}
                    <span className="co">Onsite</span>{" "}
                  </p>
                  <div className="justify-content-between row m-auto col-12 p-0">
                    <div className="col text-left p-0 ">
                      <p className="d-inline">Hindi Interpreter</p>
                    </div>
                    <div className="col text-right p-0">
                      <p className="f15 d-inline co1 ml-auto">
                        16th Oct at 03:30PM
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Blank);
