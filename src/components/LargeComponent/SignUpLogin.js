import React, { useState, useEffect } from "react";
import LeftLogin from "./LeftLogin";
import RightLogin from "./RightLogin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux'
import { setClicked } from '../../redux/Actions/HeroActions'
import { setClientSignupModal } from '../../redux/Actions/ModalActions'

// const inputStyle = {
//   height: "24px",
//   fontSize: "20px",
// };
// const ButtonStyle = {
//   width: "100px",
//   borderRadius: "4px",
// };

function SignUpLogin({ isInterpreter, formData, setFormData, setPhoneModal, phoneModal, ...props }) {
  const [state, setState] = useState({
    base: "https://whispering-lake-75400.herokuapp.com",
    selected: "",
    lSelected: "register",
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

  const dispatch = useDispatch()
  const heroState = useSelector(state => state.HeroState)
  const ModalState = useSelector(state => state.ModalState)

  useEffect(() => {
    if (heroState.clicked !== null || heroState.clicked !== undefined)
      setState({ ...state, selected: heroState.clicked });
  }, [heroState.clicked]);

  return (
    <div>
      <FontAwesomeIcon
        icon={faTimes}
        className='text-danger'
        onClick={() => 
          heroState.clicked == 'left' ?
            dispatch(setClientSignupModal(!ModalState.clientSignUpModal))
          : (
            // dispatch(setClicked(false)),
            // setState({...state, selected : ""})
            props.setpopUpClicked(false)
          )
        }
        style={{
          position: "absolute",
          right: "0px",
          top: "0px",
          cursor: "pointer",
        }}
      />
      {heroState.clicked === "left" || ModalState.clientSignUpModal || state.selected =='left' ? (
        <LeftLogin 
          // setVerify={setVerify} 
          state={state} 
          setState={setState} 
          // setmodalState={setmodalState}
          isInterpreter={isInterpreter}
          formData={formData}  
          setFormData={setFormData}
          setPhoneModal={setPhoneModal}
          phoneModal={phoneModal}
          isOnBoard={props.isOnBoard}
          setpopUpClicked={props.setpopUpClicked}
        />
      ) : ( heroState.clicked === "right" &&
        <RightLogin state={state} setState={setState} setpopUpClicked={props.setpopUpClicked} />
      )}
    </div>
  );
}

export default SignUpLogin;
