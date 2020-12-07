import React, { useState } from 'react'
import { useEffect } from 'react';
import OtpInput from "react-otp-input";
import { Modal } from "react-responsive-modal";
import Axios from "axios"
import './verifyModal.css'
import Loader from "./dashboard/smallComponent/Spinner";
import {notifySucess,notifyWarning} from "../AlertComponent/ToastifyAlert";
const SignUpverificationModal = ({verify}) => {
    const[pass, setOtp] = useState({
        disabled : true,
        otp :''
    })
    const [loading, setLoading] = useState(false);
    const [o,setO]=useState(false);
    const[error, setError] = useState(false);

   useEffect(()=>{
    if(verify!=null){
        setO(true)
    }
   },[verify])
    const handleResnendClick = async() => {
        // axios xcall
        try{
            setLoading(true)
            let {data}= await Axios({
                method: "get",
                url: `https://whispering-lake-75400.herokuapp.com/Register/resendieotp?email=${verify}`,
              });
              if(data.error){
                setError(true)
                setLoading(false);
                // setO(false);
              } else{
                setLoading(false);
                // setO(false);
              }
           } catch(err){
                setError(true)
               console.log(err);
               setLoading(false);
           }
    }

    const handleClick = async () => {
       try{
        setLoading(true)
        let data= await Axios({
            method: "get",
            url: `https://whispering-lake-75400.herokuapp.com/Register/interpretor/verify?email=${verify}&vcode=${pass.otp}`,
            
          });
          console.log(data)
          if(data.error){
            setError(true)
            setLoading(false);
            setO(false);
          } else{
            notifySucess('Email verified successfully ! Login to proceed !')
            setLoading(false);
            setO(false);
          }
       }  catch(err){
            setError(true)
           console.log(err);
           setLoading(false);
       }

    }

    return (
        <Modal
            open={o}
             onClose={() => setO(false)}
            classNames={{
                overlay: 'customOverlay',
                modal: 'customModal3',
                closeIcon:"closeIcon",
                closeButton:"closeBtn",

            }}
            >
       <Loader loading={loading} />
            <div className='signUp-modal'>
                <h4 className='text-light'>Enter Verification Code</h4>
                <p className='smallFont'>check your email for Verification code</p>
                    <OtpInput
                        // isDisabled={timer !== 0 && timer > 0 ? false : true}
                        value={pass.otp}
                        onChange={(e) => {
                          if (e.length === 6) {
                            setOtp({ ...pass, disabled: false, otp: e });
                          } else {
                            setOtp({ ...pass, otp: e, disabled: true });
                          }
                        }}
                        numInputs={6}
                        separator={<span className='text-center p-2 ml-auto'></span>}
                        inputStyle={{
                            border: error ? '3px solid red' : "3px solid #54ACF0",
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
                        error && (
                            <p classNam='p-0 m-0' style={{ color : 'red',}}>Wrong OTP</p>
                        )
                    } */}
                {
                    pass.disabled === true ?
                        <button disabled className='continue-btn btn btn-primary'>Continue</button>
                    :
                        <button onClick={handleClick} className='continue-btn btn btn-primary'>Continue</button>
                }
                <p style={{ fontSize: '0.8em'}}>code not received? 
                    <span>
                        <button
                            style={{
                                outline: 'none',
                                background :'none',
                                border: 'none',
                                color: '#54acf0'
                            }}
                            onClick={handleResnendClick}
                        >resend code{">"
                        } </button>
                    </span>
                </p>
            </div>
        </Modal>
    )
}

export default SignUpverificationModal
