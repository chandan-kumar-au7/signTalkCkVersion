import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import MeetingCard from "./MeetingCards";

import FullViewMeetingDetails from "./FullViewMeetingDetails";
import WasYourMeetingDelayed from "../newPages/wasYourMeetingDelayed";

import "./Meeting.css";

function Meeting() {
  const [MeetingData, setMeetingData] = useState([]);
  const [clickevent, setclickevent] = useState(false);

  // fetch upcomming job db
  const FetchMeetingJson = () => {
    fetch("UpcomingMeetingData.json", {
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
        // console.log("myjson ", myJson);
        setMeetingData(myJson);
      });
  };

  useEffect(() => {
    FetchMeetingJson();
    return setclickevent;
  }, []);

  return (
    <>
      {clickevent ? (
        <FullViewMeetingDetails
          setclickevent={setclickevent}
          SetShowPaymentMethod={setclickevent}
        />
      ) : (
        <div
          className="col-10 ml-auto c0 p-0"
          style={{
            Width: "44.271vw",
            position: "relative",
            marginBottom: "20px",
          }}
        >
          <Navbar title={"Meetings"} />
          <div className="col-12 pb-5">
            <div className="parOfSeeAll">
              <div className="MeetingParent">
                <div className="Meetingchild1 mchild1">Schedule new job</div>
                <div className="Meetingchild1 mchild2">
                  Hire Interpreters now for short-term or on contract-basis!{" "}
                </div>

                <button className="Meetingchild1 mchildasbtn">Post Now</button>
              </div>
            </div>
          </div>
          <hr className="c1 col-11 mhrshouldup" />
          {/* --------- upcoming meetings------- */}
          <h4 className="text-light font-weight-light mt-3 ml-4">
            Upcoming Meetings
          </h4>
          <WasYourMeetingDelayed Delayed={true} />
          {MeetingData.length > 0 &&
            MeetingData.map((data) => (
              <MeetingCard
                key={data.id}
                title={data.title}
                date={data.date}
                time={data.time}
                type={data.type}
                duration={data.duration}
                amount={data.amount}
                totalapplicants={data.totalapplicants}
                setclickevent={setclickevent}
              />
            ))}
        </div>
      )}
    </>
  );
}

export default Meeting;
