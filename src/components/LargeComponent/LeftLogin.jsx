import React, { useState } from "react";
import Image from "../elements/Image";
import Axios from "axios";
import g_icon from "../../assets/images/g_icon.png";
import f_icon from "../../assets/images/f_icon.png";
import { GoogleLogin } from "react-google-login";
import SocialButton from "./SocialButton";
import MicrosoftLogin from "react-microsoft-login";
import Input from "./Input";
import Spinner from "./dashboard/smallComponent/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerifyModal from "./SignUpverificationModal";
import {withRouter} from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { setClicked, setVerify, setmodalState } from '../../redux/Actions/HeroActions'
import { setClientSignupModal, setEmailVerifyModal } from "../../redux/Actions/ModalActions";

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
function LeftLogin({ state, setState, formData, setFormData, ...props }) {
  const [nameok, setnameok] = useState(true);
  const [mailok, setmailok] = useState(true);
  const [passok, setpassok] = useState(true);
  const [loading, setLoading] = useState(false);
  const [signUpVerifyModal, setSignUpVerifyModal] = useState(false);
  const [message, setmessage] = useState("");
  const [errorMSG, seterrorMSG] = useState(false);

  const dispatch = useDispatch()
  const heroState = useSelector(state => state.HeroState)
  const { emailVerificationModal } = useSelector(state => state.ModalState)

  if (nameok === true && mailok === true && passok === true) {
    state.iregsisterok = true;
    state.iloginok = true;
    state.iresetok = true;
  } else {
    state.iregsisterok = false;
    state.iloginok = false;
    state.iresetok = false;
  }
  if (mailok === true && passok === true) {
    state.iloginok = true;
    state.iresetok = true;
  } else {
    state.iloginok = false;
    state.iresetok = false;
  }
  if (mailok === true) {
    state.iresetok = true;
  } else {
    state.iresetok = false;
  }

  async function login() {
    try {
      setLoading(true);
      const { data } = await Axios.post(`${state.base}/Login/user`, {
        email: state.imail,
        password: state.ipass,
      });
      localStorage.setItem("userToken", data.token);
      if(data){
        setLoading(false);
        // if(data.email){
        //   dispatch(setEmailVerifyModal(true));
        // }
      } 
    } catch (err) {
      err.response.data.email && (
        dispatch(setEmailVerifyModal(true))
      )
      setLoading(false);
      dispatch(setVerify(err.response.data.email));
      setmessage(err.response.data.message);

  //     seterrorMSG(true);
  //     console.log(err.message);
    }
  }

  async function resetPass() {
    try {
      setLoading(true);
      const { data } = await Axios.post(
        `${state.base}/Register/resetpass/i?type=email&email=${state.imail}`
      );
      setLoading(false);
      console.log(data);
    } catch (err) {
      setLoading(false);
      console.log(err.message);
    }
  }

  async function register() {
    try {
      setLoading(true);
      const response = await Axios.post(`${state.base}/Register/user`, {
        email: state.imail,
        firstname: state.iname.split(" ")[0],
        lastname:
          state.iname.split(" ")[1] !== undefined
            ? state.iname.split(" ")[1]
            : null,
        password: state.ipass,
      });
      dispatch(setVerify(response.data.details[0].email));
      setLoading(true);
      if(response.data){
        dispatch(setEmailVerifyModal(true));
        // dispatch(setClientSignupModal(false))
        // setSignUpVerifyModal(true);
      }
      setSignUpVerifyModal(true);

      // setVerify(response.data);
      setLoading(true);
      setmessage(`register sucessfully!\n${response.data.message}`);
      seterrorMSG(true);
      if (response.data.details.length > 0) {
        props.setpopUpClicked(false);
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
    }
  }

  return (
    <>
      { emailVerificationModal && 
      // { signUpVerifyModal && 
            <VerifyModal 
              isOnBoard={props.isOnBoard}
              phoneModal={props.phoneModal}
              setPhoneModal={props.setPhoneModal}
              formData={props.formData}
              setFormData={props.setFormData}
              isInterpreter={props.isInterpreter}
            />       
      }
      <div className="p-0 col-12" style={{ backgroundColor: "transparent" }}>
        <ToastContainer
          style={{ position: "absolute", top: "0px", left: "0px" }}
        />
        <Spinner loading={loading} />
        <div className="row col-12 p-0 m-auto">
          <div
            className={
              heroState.clicked == 'left' ? 'col-12' : 'col-6'
            }
            style={{
              height: "60px",
              backgroundColor: "#7E21DB",
              borderRadius: "5px 5px 0px 0px",
              marginTop: "-8px",
              cursor: "pointer",
            }}
            onClick={() => setState({ ...state, selected: "left" })}
          >
            <h6 className="mt-2 text-light text-center">Find an Interpreter</h6>
          </div>
          {
            heroState.clicked !== 'left' && (
              <div
                className="col-6 text-center"
                onClick={() => setState({ ...state, selected: "right" })}
                style={{
                  backgroundColor: "#4F4F4F",
                  borderRadius: "5px 5px 0px 0px",
                  fontSize: "20px",
                  margin: "0 0 0 0",
                  cursor: "pointer",
                }}
              >
                <h3 style={{ color: "white", fontSize: "20px" }}>
                  I'm an Interpreter
                </h3>
              </div>
            )
          }
        </div>
        <div
          className="row m-auto col-12 p-2 rounded"
          style={{ backgroundColor: "#272727" }}
        >
          <div className="col-6">
            {state.lfp !== true ? (
              state.lSelected !== "register" ? (
                <h6 className="ml-0 mt-1 mb-0" style={{ color: "#AB57FF" }}>
                  Login for assistance
                </h6>
              ) : (
                <h6 className="ml-0 mt-1 mb-0" style={{ color: "#AB57FF" }}>
                  Sign up with us
                </h6>
              )
            ) : (
              <h5 className="mt-2 mb-3" style={{ color: "#AB57FF" }}>
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
              onChange={(e) => {
                const val = state.validateName(e.target.value);
                if (val === false) setnameok(false);
                if (val === true) {
                  setnameok(true);
                  setState({ ...state, iname: e.target.value });
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
              onChange={(e) => {
                const val = state.validateMail(e.target.value);
                if (val === false) setmailok(false);
                if (val === true) {
                  setmailok(true);
                  setState({ ...state, imail: e.target.value });
                }
              }}
            />
            <p
              style={validation}
              className={mailok === false ? "d-block" : "d-none"}
            >
              this field is required
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
                  {/* <input 
                  type={state.ipassvisible===true?"text":"password"} 
                  className='col-10 p-1 pl-2 border-0' 
                  autoComplete="new-password"
                    style={{fontSize:"16px",backgroundColor:"transparent"}} 
                    placeholder='Password' 
                    onChange={e=>{
                        const val = state.validatePass(e.target.value)
                        if(val===false)setpassok(false)
                        if(val===true){
                           setpassok(true)
                           setState({...state,ipass:e.target.value})
                        }
                    }}/>
                    <FontAwesomeIcon 
                    style={{cursor:"pointer",color:"black"}} 
                    onClick={()=>setState({...state,ipassvisible:!state.ipassvisible})}
                    icon={state.ipassvisible===false?faEye:faEyeSlash} /> */}

                  <Input
                    setValue={(e) => {
                      const val = state.validatePass(e.target.value);
                      if (val === false) setpassok(false);
                      if (val === true) {
                        setpassok(true);
                        setState({ ...state, ipass: e.target.value });
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
                {/* <p
                style={validation}
                className={errorMSG === true ? "d-block" : "d-none"}
              >
                {message}
              </p> */}
                <h5
                  style={{
                    color: "#AB57FF",
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
                      onSuccess={(err, data) => console.log(err, data)}
                      onFailure={(err, data) => console.log(err, data)}
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
                      onLoginSuccess={(err, data) => console.log(err, data)}
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
                      authCallback={(err, data) => console.log(data, err)}
                      children={
                        <button className="btn btn-light p-0" style={iconStyle}>
                          <img
                            className="col-7 m-auto p-0"
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
                      state.iregsisterok === true
                        ? register
                        : () => console.log("please fill required fields")
                    }
                    className="border-0 mt-2 mb-2 text-light pt-2 pb-2 pl-3 pr-3"
                    style={{
                      backgroundColor: "#6B20B6",
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
                      heroState.clicked == 'left' ?
                        state.iloginok === true
                          ? login
                          : () => {
                              console.log(state.iloginok);
                              console.log(state.ipass, state.imail);
                            }
                        :
                            () => {
                              let token = localStorage.getItem("token");
                              if (token != null) {
                                localStorage.removeItem("token");
                              }
                              localStorage.setItem("cToken", Math.random() * 1000);
                              props.history.push("/interpretly/dashboardclient");
                            }
                    }
                    // onClick={
                    //   () => {
                    //     let token = localStorage.getItem("token");
                    //     if (token != null) {
                    //       localStorage.removeItem("token");
                    //     }
                    //     localStorage.setItem("cToken", Math.random() * 1000);
                    //     props.history.push("/interpretly/dashboardclient");
                    //   }
                    //   // setSteps(4)
                    // }
                    style={{
                      backgroundColor: "#6B20B6",
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
                  className="border-0 mt-2 mb-2 text-light pt-2 pb-2 pl-3 pr-3"
                  onClick={
                    state.iresetok === true
                      ? resetPass
                      : () => console.log("please fill required fields")
                  }
                  style={{
                    backgroundColor: "#6B20B6",
                    fontSize: "16px",
                    borderRadius: "5px",
                  }}
                >
                  Reset Password
                </button>
                <h5
                  style={{
                    color: "#AB57FF",
                    fontSize: "15px",
                    margin: "0 0 0 0",
                    cursor: "pointer",
                  }}
                  onClick={() => setState({ ...state, lfp: false, rpf: false })}
                >
                  <p
                    className="h3 d-inline-block mr-2"
                    style={{ color: "#AB57FF", fontWeight: "bold" }}
                  >
                    &laquo;
                  </p>
                  Back to Login
                </h5>
              </>
            )}
          </div>
          <div className="col-6 text-center">
            <Image
              src={require("../../assets/images/features-split-image-01.png")}
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
                style={{
                  color: "#AB57FF",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Sign right up!
              </h5>
            ) : (
              <h5
                className="m-0 p-0"
                onClick={() => setState({ ...state, lSelected: "login" })}
                style={{
                  color: "#7E21DB",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                Go to login
              </h5>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(LeftLogin)