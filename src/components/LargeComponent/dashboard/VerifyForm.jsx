import React from 'react'
import { Modal } from "react-responsive-modal";
import Spinner from './smallComponent/Spinner'
import Step1 from './smallComponent/Step1'
import Step2 from './smallComponent/Step2'
import Step3 from './smallComponent/Step3'

import "react-responsive-modal/styles.css";

function VerifyForm({getData,closeModal,sendOtp,state,setState, phoneModal, setPhoneModal}) {
    return (
        <Modal
            open={
                phoneModal
            }
            onClose={() => {
                setState({...state,o:state.o}) 
                setPhoneModal(false)
            }}
            classNames={{
            overlay: 'customOverlay',
            modal: state.formState===0?'customModal':'customModal2',
            closeIcon:"closeIcon",
            closeButton:"closeBtn"
            }}
            >
            <Spinner loading={state.loader} />
                {
                    state.formState===0?
                    <Step1 state={state} 
                    setState={setState} 
                    sendOtp={sendOtp} />
                    :null
                }

                {
                    state.formState===1?
                    <Step2 state={state} setState={setState}
                    sendOtp={sendOtp} />
                    :null
                }
                {
                    state.formState===2?
                    <Step3 state={state} 
                    closeModal={closeModal} 
                    loader={state.loader}
                    setLoader={(e)=>setState({...state,loader:e})}
                    setState={setState} />
                    :null
                }
            </Modal>
    )
}

export default VerifyForm
