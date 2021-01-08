import React, { useState, useEffect } from "react";
import Axios from "axios";
import VerifyForm from "../../components/LargeComponent/dashboard/VerifyForm";
import Calendar from "react-calendar";
import { withRouter } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import ScheduledMeetingCard from "./ScheduledMeetingCard";
import FavIntCard from "./FavIntCard";

import Navbar from "../Navbar/Navbar";

import "./DashboardClient.css";

function DashboardClient({ history, ...props }) {
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

  const [ScheduleMeeting, setScheduleMeeting] = useState([]);
  const [FavIntdata, setFavIntdata] = useState([]);

  // fetch upcomming job db
  const FetchsetScheduleMeeting = () => {
    fetch("ScheduledMeetingData.json", {
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
        console.log("myjson ", myJson);
        setScheduleMeeting(myJson);
      });
  };

  const FetchFavIntCardDb = () => {
    fetch("FavIntCardData.json", {
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
        console.log("myjson ", myJson);
        setFavIntdata(myJson);
      });
  };

  useEffect(() => {
    FetchsetScheduleMeeting();
    FetchFavIntCardDb();
  }, []);

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

      <Navbar title={"Dashboard"} />

      <div className="col-12 pb-5">
        <div className="parOfSeeAll">
          <div className="ScheduledMeetingsParent">
            <h4 className="text-light font-weight-light mt-3 ml-4">
              Scheduled Meetings
            </h4>
          </div>
          <div className="seeAllClient">
            <h5 className="font-weight-light mt-3 ml-4 seeAllH5">
              See All &gt;
            </h5>
          </div>
        </div>
        <div className="cardParentInDashboardClient">
          {ScheduleMeeting.length > 0 ? (
            ScheduleMeeting.map((data) => (
              <ScheduledMeetingCard
                key={data.id}
                id={data.id}
                title={data.username}
                type={data.type}
                date={data.date}
                time={data.time}
                address={data.address}
                btntype={data.btntype}
              />
            ))
          ) : (
            <div className="container text-center">
              <p className="f20">No Meetings Scheduled at the moment</p>
            </div>
          )}
        </div>

        <hr className="c1 col-10 ml-auto mt-5 mb-5 mr-auto" />

        <div className="col-12 row m-auto">
          <div className="col-6">
            <div className="col-12 m-auto d-flex justify-content-between p-0">
              <div className="col text-left">
                <h5>Schedule</h5>
              </div>
              <div className="col text-right ">
                <h5 className="col textcolorpurple">Expand &gt;</h5>
              </div>
            </div>
            <Calendar className="col-11 mr-auto mt-4 ml-auto p-3 w-100 c5 round calenderForClient" />
          </div>
          <div className="col-6">
            <div className="col-12 m-auto d-flex justify-content-between p-0">
              <div className="col text-left">
                <h5>Your Favorite Interpreters </h5>
              </div>
            </div>
            <div className="col-12 mt-4 FavIntdatagrandparent">
              {!FavIntdata ? (
                <div> No Interpreters Added</div>
              ) : (
                FavIntdata.map((fidata) => {
                  return (
                    <FavIntCard
                      image={fidata.image}
                      name={fidata.name}
                      ifavailable={fidata.ifavailable}
                      availableat={fidata.availableat}
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(DashboardClient);
