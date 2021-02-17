import React, { useState, useEffect } from "react";

import ReactModal from "react-responsive-modal";

const WasYourMeetingDelayed = (props) => {
  const [showDeleyedMeetingModel, setshowDeleyedMeetingModel] = useState(false);

  useEffect(() => {
    setshowDeleyedMeetingModel(props.Delayed);
  }, []);

  return (
    <div>
      {showDeleyedMeetingModel && (
        <ReactModal
          open={showDeleyedMeetingModel === true}
          onClose={() => {
            setshowDeleyedMeetingModel(false);
          }}
          classNames={{
            modal: "Step1Model",
          }}
          center
        >
          <p className="paragraphinsidedtep1 colorwhites1">
            Are you sure you want to cancel <br /> the meeting !
          </p>
          <p className="paragraphinsidedtep1">
            You will be charged 100 for cancelation
          </p>
          <div className="floatleft cancelmeetingpar">
            <span className="displayflex"></span>
            <button
              className="cancelmeetingno displayflex"
              onClick={() => setshowDeleyedMeetingModel(false)}
            >
              No
            </button>

            <button
              className="cancelmeetingyes displayflex"
              onClick={() => setshowDeleyedMeetingModel(false)}
            >
              Yes
            </button>
            <span className="displayflex"></span>
          </div>
        </ReactModal>
      )}
    </div>
  );
};

export default WasYourMeetingDelayed;
