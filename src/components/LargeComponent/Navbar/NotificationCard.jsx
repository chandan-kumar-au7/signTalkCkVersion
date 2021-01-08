import React from "react";

function NotificationCard(props) {
  return (
    <div className="row ">
      <div
        className="col notificationChild"
        style={{
          marginBottom: "-30px",
          marginLeft: "-10px",
        }}
      >
        <div className="rounddiv">
          <div className="rounddivchild">{props.image}</div>
        </div>
        <div className="card mb-1 p-2">
          <div style={{ marginLeft: "45px", marginBottom: "-2.7vh" }}>
            <div className="card-title p-0 m-0">{props.title}</div>
            <p className="clicktoopen">{props.message}</p>
            <div className="timestamp">{props.timestamp}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;
