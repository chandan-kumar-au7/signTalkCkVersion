import React from "react";
import Divider from "@material-ui/core/Divider";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function CompletedCard(props) {
  return (
    <div className="row " style={{ marginBottom: "-40px" }}>
      <div className="col-12">
        <div className="card p-3 m-4">
          <div className="row">
            <div className="col-5">
              <div className="row">
                <div className="col left-title mb-2">
                  <p style={{ color: "white" }}>
                    {props.username} -
                    <span className="textcolorpurple"> {props.type}</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col left-body">
                  <p className="m-0"> {props.address} </p>
                  <p className="m-0">{props.date} </p>
                </div>
              </div>
            </div>
            <div className="col-1">
              <div className="row">
                <div className="col d-flex">
                  <Divider
                    variant="middle"
                    orientation="vertical"
                    flexItem
                    style={{
                      background: "white",
                      height: "100px",
                    }}
                  />
                  <div>
                    <StarBorderIcon
                      style={{
                        color: "#24E1AC",
                        marginTop: "1rem",
                      }}
                    />
                    <br /> {props.rating}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col">
                  <p className="m-0 pb-2 right-body">
                    Very Professional and friendly behaviour. Sutiable
                    environment and good communication.
                  </p>
                  <p className="m-0 pb-2"> - {props.username}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompletedCard;
