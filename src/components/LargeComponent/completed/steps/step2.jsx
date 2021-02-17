import React from "react";

function step2({ setSteps }) {
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
        When did the meeting start ?
      </p>
      <div className="inputFieldForStep2parent">
        <input className="inputFieldForStep2" type="time" />
      </div>
      <button
        className="InitiatePaymentbtn continuebtn"
        onClick={() => setSteps(3)}
      >
        Continue
      </button>
    </div>
  );
}

export default step2;
