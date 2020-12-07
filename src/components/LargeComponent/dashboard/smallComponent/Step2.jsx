import React from "react";
import OtpInput from "react-otp-input";
import Axios from "axios";
import { useState, useMemo } from "react";
import Timer from 'react-compound-timer'


function Step2({ state, setState, sendOtp }) {
  const [timer, setTimer] = useState(300);
  const [verifyClicked, setVerfiyClicked] = useState(false)
  const[resend, setResend] = useState(false)

  useMemo(() => {
    if (timer !== 0 && timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    }
  }, [timer]);

  async function verifyPhone() {
    try {
      setVerfiyClicked(true);
      setState({ ...state, loader: true });
      const { data } = await Axios({
        method: "post",
        url: `https://whispering-lake-75400.herokuapp.com/Home/verify?mobile_no=${state.phone.slice(
          2
        )}&otp=${state.otp}`,
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      console.log('data from verify', data);
      setState({
        ...state,
        matchedOtp : true,
        loader: false,
        verified: true,
        formState: state.formState + 1,
      });
    } catch (err) {
      setState({ ...state,matchedOtp : false, loader: false });
      console.log(err.message);
    }
  }

  return (
    <div>
      <h6 className='text-light'>Enter Verification Code</h6>
      <p className='smallFont'>code has been sent successfully</p>
      <OtpInput
        isDisabled={timer !== 0 && timer > 0 ? false : true}
        value={state.otp}
        onChange={(e) => {
          if (e.length === 6) {
            setState({ ...state, disabled: false, otp: e });
          } else {
            setState({ ...state, otp: e, disabled: true });
          }
        }}
        numInputs={6}
        separator={<span className='text-center p-2 ml-auto'></span>}
        inputStyle={{
          border: state.matchedOtp !== '' && state.matchedOtp == false  && verifyClicked && !resend ? "3px solid red" : "3px solid #54ACF0",
          borderRadius: "7px",
          padding: "5px",
          width: "40px",
          height: "40px",
          backgroundColor: "transparent",
          color: "white",
        }}
        containerStyle={{
          width: "85%",
          justifyContent: "space-between",
          margin: "auto",
        }}
      />
      {/* {
        state.matchedOtp !== '' && state.matchedOtp == false  && verifyClicked &&(
            <p style={{
              color : 'red',
              paddingTop : '15px'
            }}>Wrong otp.</p>
          )
      } */}
          <p className='mt-3 mb-3 smallFont'>
            {
              <Timer
                  initialTime={300000}
                  direction="backward"
              >
                  {({ reset }) => {
                    if(timer === 300) reset();
                    return (
                      <>
                        <Timer.Minutes />:  
                        <Timer.Seconds />
                      </>
                    )
                  }
                  }
              </Timer>
            }
          </p>
      <button
        disabled={state.disabled}
        className={`btn btn-sm text-light ${
          state.disabled === true ? "disabled" : null
        }`}
        style={{ backgroundColor: "#54ACF0" }}
        onClick={() => {
          verifyPhone();
          console.log(state.otp);
        }}>
        Verify
      </button>
      <div
        className='col-1 rounded-pill mt-3 mb-3 ml-auto mr-auto'
        style={{ backgroundColor: "#54ACF0", padding: "3px" }}></div>
      <div>
        <p className='smallFont d-inline-block'>Code not recieved? &nbsp;</p>
        <p
          className='d-inline-block mt-3'
          onClick={()=>{
            setResend(true)
            sendOtp()
            setTimer(300)
          }}
          style={{
            fontSize: "13px",
            color: "#54ACF0",
            fontWeight: "bold",
            cursor: "pointer",
          }}>
          Resend code &#62;
        </p>
      </div>
    </div>
  );
}

export default Step2;
