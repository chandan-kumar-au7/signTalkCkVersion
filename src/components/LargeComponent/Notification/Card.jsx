import React from "react";

function Card(props) {
  return (
    <div className="row notificationParent">
      <div className="col-12 notificationChild">
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

export default Card;
