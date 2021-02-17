import React from "react";
import Divider from "@material-ui/core/Divider";
import StarBorderIcon from "@material-ui/icons/StarBorder";

function Completedcard({
  setinitiatePayment,
  title,
  type,
  address,
  date,
  btntype,
  about,
  person,
  rating,
}) {
  return (
    <div className="card p-3 m-4">
      <div className="row">
        <div className="col-5">
          <div className="row">
            <div className="col left-title mb-2">
              <p style={{ color: "white" }}>
                {title} -<span style={{ color: "#54ACF0" }}> {type}</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col left-body">
              <p className="m-0"> {address} </p>
              <p className="m-0"> {date} </p>
              {btntype && (
                <button
                  className="InitiatePaymentbtn"
                  onClick={() => setinitiatePayment(true)}
                >
                  {btntype}
                </button>
              )}
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
                    marginTop: "1.5rem",
                  }}
                />
                <br /> {rating}
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col">
              <p className="m-0 pb-2 right-body">{about}</p>
              <p className="m-0 pb-2">-{person}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Completedcard;
