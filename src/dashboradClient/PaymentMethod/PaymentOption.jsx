import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import ManagePaymentMethod from "./ManagePaymentMethod";

import upiIcon from "../../assets/images/upi.svg";
import bhimIcon from "../../assets/images/bhim.png";
import gpayIcon from "../../assets/images/gpay.png";
import paytmIcon from "../../assets/images/paytm.png";
import phonepayIcon from "../../assets/images/phonepay.png";

import creditCardIcon from "../../assets/images/creditCard.svg";
import walletIcon from "../../assets/images/wallet.svg";
import paypalIcon from "../../assets/images/paypal.svg";

import amazonIcon from "../../assets/images/amazonPay.png";
import freechargeIcon from "../../assets/images/freechargeLogo.png";
import payzapIcon from "../../assets/images/payzappIcon.png";
import mobiquickIcon from "../../assets/images/mobiquickIcon.png";
import yonoIcon from "../../assets/images/yonoSbi.png";
import airtelIcon from "../../assets/images/airtelIcon.png";

import cpaypalIcon from "../../assets/images/paypalcon.png";

import "./PaymentOption.css";

function PaymentOption({ ShowPaymentMethod }) {
  const [ShowManagePaymentMethod, setShowManagePaymentMethod] = useState(false);

  const [colorforBank, setcolorforBank] = useState(true);
  const [colorforUpi, setcolorforUpi] = useState(false);
  const [colorforWallets, setcolorforWallets] = useState(false);
  const [colorforPaypal, setcolorforPaypal] = useState(false);

  let styleforBank;
  let styleforUpi;
  let styleforWallets;
  let styleforPaypal;

  if (colorforBank) {
    styleforBank = {
      background: "#7e21db",
    };
  } else if (colorforUpi) {
    styleforUpi = {
      background: "#7e21db",
    };
  } else if (colorforWallets) {
    styleforWallets = {
      background: "#7e21db",
    };
  } else if (colorforPaypal) {
    styleforPaypal = {
      background: "#7e21db",
    };
  }

  const handleStylebyBank = () => {
    if (colorforBank === false) {
      setcolorforBank(true);
      setcolorforUpi(false);
      setcolorforWallets(false);
      setcolorforPaypal(false);
    }
  };

  const handleStylebyUpi = () => {
    if (colorforUpi === false) {
      setcolorforBank(false);
      setcolorforUpi(true);
      setcolorforWallets(false);
      setcolorforPaypal(false);
    }
  };
  const handleStylebyWallets = () => {
    if (colorforWallets === false) {
      setcolorforBank(false);
      setcolorforUpi(false);
      setcolorforWallets(true);
      setcolorforPaypal(false);
    }
  };
  const handleStylebyPaypal = () => {
    if (colorforPaypal === false) {
      setcolorforBank(false);
      setcolorforUpi(false);
      setcolorforWallets(false);
      setcolorforPaypal(true);
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
                src={creditCardIcon}
                className="imgSizeForPaymentOption"
                alt="bankIcon"
              />
              &nbsp; Credit, Debit & ATM Card
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
            <div
              className="linkInsidePayment"
              style={styleforWallets}
              onClick={handleStylebyWallets}
            >
              <img
                src={walletIcon}
                className="imgSizeForPaymentOption"
                alt="walletIcon"
              />
              &nbsp; Wallets
            </div>
            <div
              className="linkInsidePayment"
              style={styleforPaypal}
              onClick={handleStylebyPaypal}
            >
              <img
                src={paypalIcon}
                className="imgSizeForPaymentOption"
                alt="paypalBillingIcon"
              />
              &nbsp; Paypal Billing
            </div>
          </div>
          {/* ----------------- main content for bank and upi --------------------------- */}
          {colorforBank ? (
            <div className="paymentMethodChild2">
              <p>Add New Bank Account</p>
              <div className="accNAndIfsc">
                <div className="accNAndIfscChild1">
                  <span className="labelInsideAccIfsc"> Card Number </span>
                  <br />
                  <input
                    className="inputInsideaccNAndIfsc"
                    type="number"
                    placeholder="*  *  *  *       *  *  *  *       *  *  *  *       *  *  *  *"
                  />
                </div>
                <div className="accNAndIfscChild2">
                  <span className="labelInsideAccIfsc"> Expiry </span>
                  <br />
                  <input
                    className="inputInsideaccNAndIfsc"
                    placeholder="MM / YY"
                    type="number"
                  />
                </div>
              </div>
              <br />
              <div className="accNAndIfsc">
                <div className="accNAndIfscChild1">
                  <span className="labelInsideAccIfsc"> Name On The Card </span>
                  <br />
                  <input className="inputInsideaccNAndIfsc" type="string" />
                </div>
                <div className="accNAndIfscChild2">
                  <div className="accNAndIfsc">
                    <div className="accNAndIfscChild1">
                      <span className="labelInsideAccIfsc"> CVV </span>
                      <br />
                      <input
                        className="inputInsideaccNAndIfsc"
                        placeholder="***"
                        type="string"
                      />
                    </div>
                    <div className="accNAndIfscChild1"></div>
                  </div>
                </div>
              </div>
              <br />
              <button
                className="btn backgroundPink mr-3 accept-btn"
                onClick={() => setShowManagePaymentMethod(true)}
              >
                Add Card
              </button>
            </div>
          ) : colorforUpi ? (
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
                  <div className="exapleatupivarify colorPink">Verify</div>
                </div>
                <br />
                <button
                  className="btn mr-3 accept-btn backgroundPink"
                  onClick={() => setShowManagePaymentMethod(true)}
                >
                  Add UPI
                </button>
              </div>
            </div>
          ) : colorforWallets ? (
            <div className="paymentMethodChild2">
              <p>Add Wallet</p>
              <p className="labelInsideAccIfsc">Select Wallet</p>
              <div className="addUpiParent111">
                {/* paytm */}

                <div className="addUpiChild1 ">
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

                {/* phonepay */}

                <div className="addUpiChild1 phonepay marginLeft">
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

                {/* amazon pay */}

                <div className="addUpiChild1 marginLeft ">
                  <img
                    className="addUpiIconSize amazonpayimage"
                    src={amazonIcon}
                    alt="amazonIcon"
                  />
                  <br />
                  <div className="labelInsideAccIfsc spaninsideAddUpiChild1">
                    Amazon Pay
                  </div>
                </div>

                {/* freecharge */}

                <div className="addUpiChild1 marginLeft">
                  <img
                    className="addUpiIconSize freechargeimage"
                    src={freechargeIcon}
                    alt="freechargeIcon"
                  />
                  <br />
                  <div className="labelInsideAccIfsc spaninsideAddUpiChild1">
                    Freecharge
                  </div>
                </div>

                {/* payZapp */}

                <div className="addUpiChild1 marginLeft">
                  <img
                    className="addUpiIconSize payzimage"
                    src={payzapIcon}
                    alt="payzapIcon"
                  />
                  <br />
                  <div className="labelInsideAccIfsc spaninsideAddUpiChild1">
                    payZapp
                  </div>
                </div>

                {/* Mobikwik */}

                <div className="addUpiChild1 marginLeft">
                  <img
                    className="addUpiIconSize mobiquickimage"
                    src={mobiquickIcon}
                    alt="mobiquickIcon"
                  />
                  <br />
                  <div className="labelInsideAccIfsc spaninsideAddUpiChild1">
                    Mobikwik
                  </div>
                </div>
              </div>

              <div className="addUpiParent div2iconmargintop">
                {/* SBI Yono */}

                <div className="addUpiChild1 flexsmall">
                  <img
                    className="addUpiIconSize sbiyonoimage"
                    src={yonoIcon}
                    alt="yonoIcon"
                  />
                  <br />
                  <div className="labelInsideAccIfsc spaninsideAddUpiChild1">
                    SBI Yono
                  </div>
                </div>

                {/* Airtel Money */}

                <div className="addUpiChild1 flexsmall marginLeft">
                  <img
                    className="addUpiIconSize airtelimage"
                    src={airtelIcon}
                    alt="airtelIcon"
                  />
                  <br />
                  <div className="labelInsideAccIfsc spaninsideAddUpiChild1">
                    Airtel Money
                  </div>
                </div>
                <div className="addUpiChild1 flexbig"></div>
              </div>

              <div>
                <br />
                <button
                  className="btn mr-3 accept-btn backgroundPink"
                  onClick={() => setShowManagePaymentMethod(true)}
                >
                  Add Wallet
                </button>
              </div>
            </div>
          ) : (
            <div className="paymentMethodChild2">
              <p>Add Paypal</p>
              <div className="addUpiParent">
                <div className="addUpiChild1">
                  <img
                    className="addUpiIconSize "
                    src={cpaypalIcon}
                    alt="paypalIcon"
                  />
                  <br />
                  <div className="labelInsideAccIfsc spaninsideAddUpiChild1">
                    Paypal <br />
                    <span className="paypalBreak">Billing</span>
                  </div>
                </div>
              </div>

              <br />
              <br />
              <br />
              <br />

              <button
                className="btn mr-3 accept-btn backgroundPink"
                onClick={() => setShowManagePaymentMethod(true)}
              >
                Add Paypal
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PaymentOption;
