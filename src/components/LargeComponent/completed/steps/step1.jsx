import React from "react";

function step1({ setSteps }) {
  return (
    <div className="step1parent">
      <p
        style={{
          color: "white",
          textAlign: "center",
          fontWeight: 300,
          fontSize: "1em",
        }}
      >
        Yay! You Have Completed The job!
      </p>
      <div className="trophyimg">
        <img
          src="https://media.istockphoto.com/photos/gold-winners-trophy-champion-cup-with-falling-confetti-picture-id1182465245?b=1&k=6&m=1182465245&s=170667a&w=0&h=fHWBHR6vygo0YibUWHGW0N0MY3jFWtzPR3e2YyK174Y="
          alt="trophyimg"
        />
      </div>
      <p className="paragraphinsidedtep1">
        Answer a few question to help us get you <br /> are the right
        compensation!
      </p>
      <button
        className="InitiatePaymentbtn continuebtn"
        onClick={() => setSteps(2)}
      >
        Continue
      </button>
    </div>
  );
}

export default step1;
