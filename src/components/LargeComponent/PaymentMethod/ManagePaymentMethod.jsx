import React from "react";
import "./PaymentOption.css";

import sbilogo from "../../../assets/images/sbilogo.png";
import bankIcon from "../../../assets/images/streamline-icon-saving-bank@140x140.svg";
import gpayIcon from "../../../assets/images/gpay.png";
import phonepayIcon from "../../../assets/images/phonepay.png";
import upiIcon from "../../../assets/images/upi.svg";

function ManagePaymentMethod() {
  const datafor1strow = [
    {
      logo: sbilogo,
      title: "State Bank Of India",
      accno: "...............1233",
      type: "Saving",
    },
    {
      logo: bankIcon,
      title: "Federal Bank",
      accno: "...............4997",
      type: "Current",
    },
  ];
  const datafor2strow = [
    {
      logo: gpayIcon,
      title: "Google Pay",
      accno: "ajayjha@okicici",
      type: "AJAY JHA",
    },
    {
      logo: phonepayIcon,
      title: "PhonePe",
      accno: "ajayjha@okicici",
      type: "AJAY JHA",
    },
    {
      logo: upiIcon,
      title: "Amazon Pay",
      accno: "ajayjha@okicici",
      type: "AJAY JHA",
    },
  ];

  const CardForMaPaMethod = ({ logo, title, accno, type }) => {
    return (
      <div className="ParentOfCardForMaPaMethod">
        <div className="LogoInsideMPCParent">
          <img className="LogoInsideMPC" src={logo} alt={"logo"} />
        </div>
        <div className="afterlogoInsideMPC">
          <div>{title}</div>
          <div className="whitetext">
            <b>{accno}</b>
          </div>
          <div className="whitetext">{type}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="managePaymentMethodParent col-12 ">
      <h4 className="text-light font-weight-light mt-3 ml-4">
        Manage Payment Method
      </h4>
      <div className="MpaymentMethod">
        {datafor1strow.map((data) => (
          <CardForMaPaMethod
            logo={data.logo}
            title={data.title}
            accno={data.accno}
            type={data.type}
          />
        ))}
      </div>
      <div className="MpaymentMethod">
        {datafor2strow.map((data) => (
          <CardForMaPaMethod
            logo={data.logo}
            title={data.title}
            accno={data.accno}
            type={data.type}
          />
        ))}
      </div>
    </div>
  );
}

export default ManagePaymentMethod;
