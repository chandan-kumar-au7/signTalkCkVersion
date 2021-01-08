import React, { useState } from "react";
import Image from "../elements/Image";
import Axios from "axios";
import g_icon from "../../assets/images/g_icon.png";
import f_icon from "../../assets/images/f_icon.png";
import { GoogleLogin } from "react-google-login";
import SocialButton from "./SocialButton";
import MicrosoftLogin from "react-microsoft-login";
import { withRouter } from "react-router-dom";
import Input from "./Input";
import Loader from "react-loader-spinner";
import VerifyModal from "./SignUpverificationModal";

const iconStyle = {
  width: "30px",
  height: "30px",
  borderRadius: "3px",
};
const validation = {
  fontSize: "13px",
  color: "red",
  margin: "0px",
  padding: "0px",
};
const primary = "#54ACF0";
function RightLogin({ state, setState, setVerify, ...props }) {
  const [nameok, setnameok] = useState(true);
  const [mailok, setmailok] = useState(true);
  const [passok, setpassok] = useState(true);
  const [loading, setLoading] = useState(false);
  const [errorMSG, seterrorMSG] = useState(false);
  const [message, setmessage] = useState("");
  const [signUpVerifyModal, setSignUpVerifyModal] = useState(false);

  if (nameok === true && mailok === true && passok === true) {
    state.fregsisterok = true;
    state.floginok = true;
    state.fresetok = true;
  } else {
    state.fregsisterok = false;
    state.floginok = false;
    state.fresetok = false;
  }
  if (mailok === true && passok === true) {
    state.floginok = true;
    state.fresetok = true;
  } else {
    state.floginok = false;
    state.fresetok = false;
  }
  if (mailok === true) {
    state.fresetok = true;
  } else {
    state.fresetok = false;
  }

  async function login() {
    try {
      setLoading(true);
      const { data } = await Axios.post(`${state.base}/Login/interpreter`, {
        email: state.fmail,
        password: state.fpass,
      });

      localStorage.setItem("token", data.token);
      setLoading(true);
      if (data !== undefined) {
        props.history.push("/interpretly/dashboard");
      }
    } catch (err) {
      setLoading(false);
      setVerify(err.response.data.email);
      setmessage(err.response.data.message);

      seterrorMSG(true);
      // console.log(err.message);
    }
  }

  async function register() {
    try {
      setLoading(true);
      const { data } = await Axios.post(`${state.base}/Register/interpreter`, {
        email: state.fmail,
        firstname: state.fname.split(" ")[0],
        lastname:
          state.fname.split(" ")[1] !== undefined
            ? state.fname.split(" ")[1]
            : "",
        password: state.fpass,
      });
      setVerify(data);
      setLoading(true);
      data && setSignUpVerifyModal(true);

      setmessage(`register sucessfully!\n${data.message}`);
      seterrorMSG(true);
      // notifySucess('register sucessfully!')
      if (data.details.length > 0) {
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      console.log(err.response);
      if (err.response) {
        err.response.data.message == "Email Id exists"
          ? setmessage("Email id already registered")
          : setmessage(err.response.data.message);
      }
      seterrorMSG(true);
      if (err.response) {
        // notifyWarning('email exist')
      }
    }
  }
  async function resetPass() {
    try {
      setLoading(true);
      const { data } = await Axios.post(
        `${state.base}/Register/resetpass/i?type=email&email=${state.fmail}`
      );

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  }

  return (
    <div className="p-0 col-12" style={{ backgroundColor: "transparent" }}>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          zIndex: 100,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          display: loading === true ? "block" : "none",
        }}
      >
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          className={`ml-auto mr-auto mt-5 pt-5 text-center justify-content-center col-3`}
        />
      </div>
      <div className="row col-12 p-0 m-auto">
        <div
          className="col-6 text-center"
          onClick={() => setState({ ...state, selected: "left" })}
          style={{
            backgroundColor: "#4F4F4F",
            borderRadius: "5px 5px 0px 0px",
            fontSize: "20px",
            margin: "0 0 0 0",
            cursor: "pointer",
          }}
        >
          <h3 style={{ color: "white", fontSize: "20px" }}>
            Find an interpreter
          </h3>
        </div>
        <div
          className="col-6"
          style={{
            height: "60px",
            backgroundColor: primary,
            borderRadius: "5px 5px 0px 0px",
            marginTop: "-8px",
            cursor: "pointer",
          }}
          onClick={() => setState({ ...state, selected: "right" })}
        >
          <h6 className="mt-2 text-light text-center">I'm an Interpreter</h6>
        </div>
      </div>
      {signUpVerifyModal && <VerifyModal />}
      <div
        className="row m-auto col-12 p-2 rounded"
        style={{ backgroundColor: "#272727" }}
      >
        <div className="col-6 text-center">
          <Image
            src={require("../../assets/images/Interpreters-Illustration.svg")}
            alt="Features split 01"
            className={state.lfp !== true ? "mt-5" : "mt-3"}
            width={250}
            height={250}
          />
          {state.lSelected == "register" ? (
            <h5
              className="m-0 p-0"
              style={{ color: "white", fontSize: "15px" }}
            >
              Already Registered with us?
            </h5>
          ) : (
            <h5
              className="m-0 p-0"
              style={{ color: "white", fontSize: "15px" }}
            >
              Are you new here?
            </h5>
          )}
          {state.lSelected !== "register" ? (
            <h5
              className="m-0 p-0"
              onClick={() => setState({ ...state, lSelected: "register" })}
              style={{ color: primary, fontSize: "20px", cursor: "pointer" }}
            >
              Sign right up!
            </h5>
          ) : (
            <h5
              className="m-0 p-0"
              onClick={() => setState({ ...state, lSelected: "login" })}
              style={{ color: primary, fontSize: "20px", cursor: "pointer" }}
            >
              Go to login
            </h5>
          )}
        </div>
        <div className="col-6">
          {state.lfp !== true ? (
            state.lSelected !== "register" ? (
              <h6 className="ml-0 mt-1 mb-0" style={{ color: primary }}>
                Login for assistance
              </h6>
            ) : (
              <h6 className="ml-0 mt-1 mb-0" style={{ color: primary }}>
                Sign up with us
              </h6>
            )
          ) : (
            <h5 className="mt-2 mb-3" style={{ color: primary }}>
              Recover Password
            </h5>
          )}
          <label
            style={{
              fontSize: "12px",
              transition: "0.5s ease",
              display: state.lSelected !== "login" ? "block" : "none",
            }}
            className=" m-0 text-light"
            htmlFor="input"
          >
            Name
          </label>
          <input
            type="text"
            className="col-12 p-1 pl-2 border-0"
            style={{
              borderRadius: "3px",
              fontSize: "16px",
              transition: "0.5s ease",
              display: state.lSelected !== "login" ? "block" : "none",
            }}
            placeholder="Name"
            autoComplete="new-password"
            onChange={(e) => {
              const val = state.validateName(e.target.value);
              if (val === false) setnameok(false);
              if (val === true) {
                setnameok(true);
                setState({ ...state, fname: e.target.value });
              }
            }}
          />
          <p
            style={validation}
            className={nameok === false ? "d-block" : "d-none"}
          >
            this field is required and should be greater than 3
          </p>
          <label
            style={{ fontSize: "12px" }}
            className=" m-0 text-light"
            htmlFor="input"
          >
            Email
          </label>
          <input
            type="text"
            className="col-12 p-1 pl-2 border-0"
            style={{ borderRadius: "3px", fontSize: "16px" }}
            placeholder="Email"
            autoComplete="new-password"
            onChange={(e) => {
              const val = state.validateMail(e.target.value);
              if (val === false) setmailok(false);
              if (val === true) {
                setmailok(true);
                setState({ ...state, fmail: e.target.value });
              }
            }}
          />
          <p
            style={validation}
            className={mailok === false ? "d-block" : "d-none"}
          >
            Please enter a valid email id
          </p>
          {state.lfp !== true ? (
            <>
              <label
                style={{ fontSize: "12px" }}
                className=" m-0 text-light"
                htmlFor="input"
              >
                Password
              </label>
              <div
                className="col-12 p-0 bg-light"
                style={{ borderRadius: "3px" }}
              >
                <Input
                  setValue={(e) => {
                    const val = state.validatePass(e.target.value);
                    if (val === false) setpassok(false);
                    if (val === true) {
                      setpassok(true);
                      setState({ ...state, fpass: e.target.value });
                    }
                  }}
                />
              </div>
              <p
                style={validation}
                className={passok === false ? "d-block" : "d-none"}
              >
                this field is required and should be greater than 3
              </p>
              <p
                style={validation}
                className={errorMSG === true ? "d-block" : "d-none"}
              >
                {message}
              </p>
              <h5
                style={{
                  color: primary,
                  fontSize: "10px",
                  margin: "0 0 0 0",
                  cursor: "pointer",
                  display: state.lSelected === "login" ? "block" : "none",
                }}
                onClick={() => setState({ ...state, lfp: true, rpf: false })}
              >
                Forgot password ?
              </h5>
              <p style={{ fontSize: "12px" }} className="m-0 text-light">
                or login using
              </p>
              <div className="row col-12 m-auto p-0">
                <div className="col-3 pl-0 pt-2">
                  <GoogleLogin
                    clientId="154727329238-j9k2auvn5k8b8gsel5v2meegfajtltjo.apps.googleusercontent.com"
                    onSuccess={async (data, err) => {
                      try {
                        let dat = await Axios({
                          method: "post",
                          url: `${state.base}/Login/interpreter?sociallogin=1`,
                          data: {
                            email: data.profileObj.email,
                            firstName: data.profileObj.givenName,
                            lastName: data.profileObj.familyName,
                            image: data.profileObj.imageUrl,
                          },
                        });
                        if (dat.data !== undefined) {
                          localStorage.setItem("token", dat.data.token);
                          props.history.push("/interpretly/dashboard");
                        }
                      } catch (err) {
                        console.log(err.response);
                      }
                    }}
                    onFailure={(data, err) => console.log(err, data)}
                    cookiePolicy={"single_host_origin"}
                    autoLoad={false}
                    style={{ backgroundColor: "red" }}
                    render={(renderProps) => (
                      <button
                        className="btn btn-light p-0"
                        onClick={renderProps.onClick}
                        style={iconStyle}
                      >
                        <img
                          src={g_icon}
                          alt="img"
                          className="col-10 m-auto p-0"
                        />
                      </button>
                    )}
                  />
                </div>
                <div className="col-3 pl-0 pt-2">
                  <SocialButton
                    provider="facebook"
                    appId="2983361728458755"
                    onLoginSuccess={async (response) => {
                      try {
                        let newdata = await Axios({
                          method: "post",
                          url: `${state.base}/Login/interpreter?sociallogin=1`,
                          data: {
                            email: response._profile.id,
                            firstName: response._profile.firstName,
                            lastName: response._profile.lastName,
                            image: response._profilePicURL,
                          },
                        });
                        if (newdata.data !== undefined) {
                          localStorage.setItem("token", newdata.data.token);
                          props.history.push("/interpretly/dashboard");
                        }
                      } catch (err) {
                        console.log(err.message);
                      }
                    }}
                    onLoginFailure={(err, data) => console.log(err, data)}
                  >
                    <button className="btn btn-light p-0" style={iconStyle}>
                      <img
                        src={f_icon}
                        alt="img"
                        className="col-10 m-auto p-0"
                      />
                    </button>
                  </SocialButton>
                </div>
                <div className="col-3 pl-0 pt-2">
                  <MicrosoftLogin
                    className="microsoft"
                    buttonTheme="dark"
                    clientId="2c22b02c-0cee-411f-8d9e-6b6e632d2148"
                    authCallback={async (err, data) => {
                      let Name = data.authResponseWithAccessToken.account.name;
                      let index = Name.indexOf(" ");
                      let firstName = Name.slice(0, index - 1);
                      let LastName = Name.slice(index, Name.length);
                      try {
                        let ndata = await Axios({
                          method: "post",
                          url: `${state.base}/Login/interpreter?sociallogin=1`,
                          data: {
                            email:
                              data.authResponseWithAccessToken.account
                                .accountIdentifier,
                            firstName: firstName,
                            lastName: LastName,
                            image: "",
                          },
                        });
                        if (ndata.data !== undefined) {
                          localStorage.setItem("token", ndata.data.token);
                          props.history.push("/interpretly/dashboard");
                        }
                      } catch (err) {
                        console.log(err.message);
                      }
                    }}
                    children={
                      <button className="btn btn-light p-0" style={iconStyle}>
                        <img
                          className="col-7 m-auto p-0"
                          alt="microsoft_image"
                          src="https://img.icons8.com/color/96/000000/microsoft.png"
                        />
                      </button>
                    }
                  />
                </div>
              </div>
              {state.lSelected !== "login" ? (
                <button
                  onClick={
                    state.fregsisterok === true
                      ? register
                      : () => console.log("please fill all required fields")
                  }
                  className="border-0 mt-2 mb-2 text-light pt-2 pb-2 pl-3 pr-3"
                  style={{
                    backgroundColor: primary,
                    fontSize: "16px",
                    borderRadius: "8px",
                  }}
                >
                  Sign up
                </button>
              ) : (
                <button
                  className="border-0 mt-2 mb-2 text-light pt-2 pb-2 pl-3 pr-3"
                  onClick={
                    state.floginok === true
                      ? login
                      : () => {
                          console.log("please fill all required fields");
                        }
                  }
                  style={{
                    backgroundColor: primary,
                    fontSize: "16px",
                    borderRadius: "8px",
                  }}
                >
                  Login
                </button>
              )}
            </>
          ) : (
            <>
              <button
                onClick={
                  state.fresetok === true
                    ? resetPass
                    : () => console.log("please fill all required fields")
                }
                className="border-0 mt-2 mb-2 text-light pt-2 pb-2 pl-3 pr-3"
                style={{
                  backgroundColor: primary,
                  fontSize: "16px",
                  borderRadius: "5px",
                }}
              >
                Reset Password
              </button>
              <h5
                style={{
                  color: primary,
                  fontSize: "15px",
                  margin: "0 0 0 0",
                  cursor: "pointer",
                }}
                onClick={() => setState({ ...state, lfp: false, rpf: false })}
              >
                <p
                  className="h3 d-inline-block mr-2"
                  style={{ color: primary }}
                >
                  &laquo;
                </p>
                Back to Login
              </h5>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default withRouter(RightLogin);
