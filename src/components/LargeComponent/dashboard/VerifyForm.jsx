import React from 'react'
import { Modal } from "react-responsive-modal";
import Spinner from './smallComponent/Spinner'
import Step1 from './smallComponent/Step1'
import Step2 from './smallComponent/Step2'
import Step3 from './smallComponent/Step3'
import "react-responsive-modal/styles.css";
import { useSelector, useDispatch } from 'react-redux'
import { setDashboard } from '../../../redux/Actions/Interpreter/interpreterTempActions'
import { setPhoneModal } from "../../../redux/Actions/ModalActions";
import Axios from 'axios'

function VerifyForm({getData,
    isOnboard,
    // closeModal,
    // sendOtp,
    state,setState}) {

    const dispatch = useDispatch()
    const {
        o,
        formState,
        loader,
        phone,
        base,
        verified
    } = useSelector(state => state.interpreterTempState)
    const {
      phoneModal
    } = useSelector(state => state.ModalState)

    const closeModal = () => dispatch(setDashboard({ o: false }));
    
    async function sendOtp() {
        try {
          console.log(phone.slice(2));
          dispatch(setDashboard({ loader: true }));
          const { data } = await Axios.get(
            isOnboard 
            ? `${base}/services/requestotp?mobile_no=${phone.slice(2)}`
            : `${base}/Home/requestotp?mobile_no=${phone.slice(2)}`,
            {
              headers: {
                token: isOnboard === true ? localStorage.getItem("userToken") : localStorage.getItem("token")
              },
            }
          );
          // const {data} = await Axios.post(`${base}/Register/resetpass/i?type=mobile&mobile_no=${phone.slice(2)}`,{
          //     headers: {
          //         token: localStorage.getItem("token"),
          //     }
          // })
          if (data.err === undefined){
            dispatch(setDashboard({ loader: false}));
            dispatch(setDashboard({formState: 1}));
            dispatch(setDashboard({timer: 300 }));
          }else {
            dispatch(setDashboard({ loader: false}));
            dispatch(setDashboard({ timer: 300 }));
            console.log(data);
          }
        } catch (err) {
          dispatch(setDashboard({ loader: false }));
          console.log(err.message);
        }
      }

    return (
        <Modal
            open={
                phoneModal
            }
            onClose={() => {
                dispatch(setDashboard({o : o}))
                dispatch(setPhoneModal(false))
            }}
            classNames={{
            overlay: 'customOverlay',
            modal: formState===0?'customModal':'customModal2',
            closeIcon:"closeIcon",
            closeButton:"closeBtn"
            }}
            >
            <Spinner loading={loader} />
                {
                    formState===0?
                    <Step1 state={state} 
                    setState={setState} 
                    sendOtp={sendOtp} />
                    :null
                }

                {
                    formState===1?
                    <Step2 
                        closeModal={closeModal}
                        state={state} 
                        setState={setState}
                        sendOtp={sendOtp} 
                        isOnboard={isOnboard}
                    />
                    :null
                }
                {
                    formState===2 && !isOnboard && !verified?
                    <Step3 state={state} 
                    closeModal={closeModal} 
                    loader={loader}
                    setLoader={(e)=>dispatch(setDashboard({loader:e}))}
                    setState={setState} />
                    :null
                }
            </Modal>
    )
}

export default VerifyForm
