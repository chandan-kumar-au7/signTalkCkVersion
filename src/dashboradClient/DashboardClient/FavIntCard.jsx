import React from "react";
import "./FavIntCard.css";

function FavIntCard(props) {
  return (
    <div className="FavIntCard">
      <div className="FavIntCardImgdiv">
        <img className="FavIntCardImg" src={props.image} alt="imageof" />
      </div>
      <div className="FavIntCardName">
        <div className="activeNowDiv">
          <p className="activeNowp"></p>
        </div>
        <div className="afteractiveNowDiv">
          <h4>{props.name}</h4>
        </div>
      </div>
      <div className="FavIntCardIfAvailable sametextforfavint">
        {props.ifavailable}
      </div>
      <div className="FavIntCardImgavailableat sametextforfavint">
        {props.availableat}
      </div>
    </div>
  );
}

export default FavIntCard;
