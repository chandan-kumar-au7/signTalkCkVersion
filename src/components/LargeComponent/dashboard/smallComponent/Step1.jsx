import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useSelector, useDispatch } from 'react-redux'
import { setDashboard } from '../../../../redux/Actions/Interpreter/interpreterTempActions'

function Step1({state,setState,sendOtp}) {

    const dispatch = useDispatch()
    const {
        phone
    } = useSelector(state => state.interpreterTempState)

    return (
        <div>
            <h6 className='text-light'>Enter your Mobile Number</h6>
            <p className='smallFont'>you need to verify your phone number</p>
            
            <PhoneInput
            containerClass='col-8 m-auto p-0'
            buttonClass='clickbtn'
            buttonStyle={{
                backgroundColor:"transparent",
                border:'0px',
                borderRight: '3px solid #54ACF0'
            }}
            containerStyle={{border:'3px solid #54ACF0',borderRadius:'7px'}}
            inputClass='col-12 border-0 bg-transparent text-light pt-2 pb-2 '
            inputStyle={{fontSize:"20px"}}
            country='in'
            regions={'asia'}
            value={phone}
            onChange={e =>dispatch(setDashboard({phone:e}))}
            />

            <button className='btn btn-sm mt-3' style={{
                backgroundColor:"#54ACF0",
                color:"white"
            }} 
            onClick={()=>{
                if(phone.length===12){
                    sendOtp()
                }
            }}>Send OTP</button>
        </div>
    )
}

export default Step1
