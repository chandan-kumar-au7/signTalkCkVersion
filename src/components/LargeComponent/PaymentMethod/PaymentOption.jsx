import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import ManagePaymentMethod from "./ManagePaymentMethod";

import bankIcon from "../../../assets/images/streamline-icon-saving-bank@140x140.svg";
import upiIcon from "../../../assets/images/upi.svg";
import bhimIcon from "../../../assets/images/bhim.png";
import gpayIcon from "../../../assets/images/gpay.png";
import paytmIcon from "../../../assets/images/paytm.png";
import phonepayIcon from "../../../assets/images/phonepay.png";

import "./PaymentOption.css";

function PaymentOption({ ShowPaymentMethod }) {
  const [ShowManagePaymentMethod, setShowManagePaymentMethod] = useState(false);
  const [colorforBank, setcolorforBank] = useState(true);
  const [colorforUpi, setcolorforUpi] = useState(false);

  let styleforBank;
  let styleforUpi;

  if (colorforBank) {
    styleforBank = {
      background: "#54acf0",
    };
  } else if (colorforUpi) {
    styleforUpi = {
      background: "#54acf0",
    };
  }

  const handleStylebyBank = () => {
    if (colorforBank === false) {
      setcolorforBank(true);
      setcolorforUpi(false);
    }
  };

  const handleStylebyUpi = () => {
    if (colorforUpi === false) {
      setcolorforUpi(true);
      setcolorforBank(false);
    }
  };

  return (
    <div>
      <Navbar
        title={`Payment Method`}
        ShowPaymentMethod={ShowPaymentMethod}
        Backicon={ArrowBackIosIcon}
      />

      {ShowManagePaymentMethod && <ManagePaymentMethod />}
      <div className="col-12 pb-5">
        <h4 className="text-light font-weight-light mt-3 ml-4">
          Add Payment Method
        </h4>

        <div className="paymentMethodParent">
          {/* ----------------- here link for switching between bank and upi option --------------------------- */}
          <div className="paymentMethodChild1">
            <div
              className="linkInsidePayment"
              style={styleforBank}
              onClick={handleStylebyBank}
            >
              <img
                src={bankIcon}
                className="imgSizeForPaymentOption"
                alt="bankIcon"
              />
              &nbsp; Bank Account
            </div>
            <div
              className="linkInsidePayment"
              style={styleforUpi}
              onClick={handleStylebyUpi}
            >
              <img
                src={upiIcon}
                className="imgSizeForPaymentOption"
                alt="upiIcon"
              />
              &nbsp; UPI
            </div>
          </div>
          {/* ----------------- main content for bank and upi --------------------------- */}
          {colorforBank ? (
            <div className="paymentMethodChild2">
              <p>Add New Bank Account</p>
              <div className="accNAndIfsc">
                <div className="accNAndIfscChild1">
                  <span className="labelInsideAccIfsc"> Account Number </span>
                  <br />
                  <input
                    className="inputInsideaccNAndIfsc"
                    type="number"
                    placeholder="*  *  *  *       *  *  *  *       *  *  *  *       *  *  *  *"
                  />
                </div>
                <div className="accNAndIfscChild2">
                  <span className="labelInsideAccIfsc"> IFSC Code </span>
                  <br />
                  <input className="inputInsideaccNAndIfsc" type="number" />
                </div>
              </div>
              <br />
              <div className="accNAndIfsc">
                <div className="accNAndIfscChild1">
                  <span className="labelInsideAccIfsc"> Name </span>
                  <br />
                  <input className="inputInsideaccNAndIfsc" type="string" />
                </div>
                <div className="accNAndIfscChild2"></div>
              </div>
              <br />
              <button
                className="btn btn-primary mr-3 accept-btn"
                onClick={() => setShowManagePaymentMethod(true)}
              >
                Add Bank Account
              </button>
            </div>
          ) : (
            <div className="paymentMethodChild2">
              <p>Add UPI</p>
              <p className="labelInsideAccIfsc">Select Bank</p>
              <div className="addUpiParent">
                <div className="addUpiChild1">
                  <img
                    className="addUpiIconSize bhimIconSize"
                    src={bhimIcon}
                    alt="bhimIcon"
                  />
                  <br />
                  <div className="labelInsideAccIfsc spaninsideAddUpiChild1">
                    BHIM
                  </div>
                </div>
                <div className="addUpiChild1 gpay">
                  <img
                    className="addUpiIconSize googleIconSize"
                    src={gpayIcon}
                    alt="gpayIcon"
                  />
                  <br />
                  <div className="labelInsideAccIfsc spaninsideAddUpiChild1">
                    Google Pay
                  </div>
                </div>
                <div className="addUpiChild1">
                  <img
                    className="addUpiIconSize"
                    src={paytmIcon}
                    alt="paytmIcon"
                  />
                  <br />
                  <div className="labelInsideAccIfsc spaninsideAddUpiChild1">
                    Paytm
                  </div>
                </div>
                <div className="addUpiChild1 phonepay">
                  <img
                    className="addUpiIconSize phonepayIconSize"
                    src={phonepayIcon}
                    alt="phonepayIcon"
                  />
                  <br />
                  <div className="labelInsideAccIfsc spaninsideAddUpiChild1">
                    Phone Pe
                  </div>
                </div>
                <div className="addUpiChild2"></div>
              </div>

              <div>
                <br />
                <p className="labelInsideAccIfsc">Enter UPI ID</p>
                <div className="parentofexapleatupi">
                  <div className="exapleatupi">
                    <input
                      className="inputInsideaccNAndIfsc"
                      type="string"
                      placeholder="example@UPI"
                    />
                  </div>
                  <div className="exapleatupivarify co">Verify</div>
                </div>
                <br />
                <button
                  className="btn btn-primary mr-3 accept-btn"
                  onClick={() => setShowManagePaymentMethod(true)}
                >
                  Add UPI
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentOption;
