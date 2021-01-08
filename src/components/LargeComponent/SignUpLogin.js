import React, { useState, useEffect } from "react";
import LeftLogin from "./LeftLogin";
import RightLogin from "./RightLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// const inputStyle = {
//   height: "24px",
//   fontSize: "20px",
// };
// const ButtonStyle = {
//   width: "100px",
//   borderRadius: "4px",
// };

function SignUpLogin({ setmodalState, modalState, clicked ,setVerify, isInterpreter, formData, setFormData, setPhoneModal }) {
  const [state, setState] = useState({
    base: "https://whispering-lake-75400.herokuapp.com",
    selected: "",
    lSelected: "login",
    rSelected: "login",
    imail: "",
    ipass: "",
    iname: "",
    fmail: "",
    fpass: "",
    fname: "",
    ipassvisible: false,
    fpassvisible: false,
    iregisterok: false,
    iloginok: false,
    iresetok: false,
    imailok: false,
    fregisterok: false,
    floginok: false,
    fresetok: false,
    validateName: (name) => {
      if (name.length >= 0) return true;
      return false;
    },
    validateMail: (mail) => {
      let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (re.test(mail) === true) return true;
      return false;
    },
    validatePass: (pass) => {
      if (pass.length >= 3) return true;
      return false;
    },
  });

  useEffect(() => {
    if (clicked !== null || clicked !== undefined)
      setState({ ...state, selected: clicked });
  }, [clicked]);

  return (
    <div>
      <FontAwesomeIcon
        icon={faTimes}
        className='text-danger'
        onClick={() => setmodalState(!modalState)}
        style={{
          position: "absolute",
          right: "0px",
          top: "0px",
          cursor: "pointer",
        }}
      />
      {state.selected === "left" ? (
        <LeftLogin 
          setVerify={setVerify} 
          state={state} 
          setState={setState} 
          setmodalState={setmodalState} 
          isInterpreter={isInterpreter}
          formData={formData}  
          setFormData={setFormData}
          setPhoneModal={setPhoneModal}
        />
      ) : (
        <RightLogin setVerify={setVerify} state={state} setState={setState} />
      )}
    </div>
  );
}

export default SignUpLogin;
