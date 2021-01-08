import React from 'react'
import './ShortConfirmMsg.css'

const ContractConfirmMsg = ({
    formData, 
    setFormData, 
    closeModal,
    initialState,
    setSteps
}) => {
    return (
        <div className='short-confirm-msg'>
        <div className="header">
            <p style={{ color : 'white', textAlign: "center", fontWeight : 500, fontSize : '1.1em'}}>Confirm Job Details</p>
        </div>
        <div className="main">
            <div className="background">
                <p className='w-40'>Job background</p>
                <p>:</p>
                <p className='w-40'>{formData.background}</p>
            </div>
            <div className="language">
                <p className='w-40'>Language</p>
                <p>:</p>
                <p className='w-40'>{formData.langugae}</p>
            </div>
            <div className="region">
                <p className='w-40'>Region</p>
                <p>:</p>
                <p className='w-40'>{formData.region}</p>
            </div>
            <div className="start-date">
                <p className='w-40'>Start Date</p>
                <p>:</p>
                <p className='w-40'>{formData.contractDue.startDate}</p>
            </div>
            <div className="booking-time">
                <p className='w-40'>Booking Time</p>
                <p>:</p>
                <p className='w-40'>{formData.contractDue.duration}</p>
            </div>
            <div className="interpreters">
                <p className='w-40'>No of Interpreters</p>
                <p>:</p>
                <p className='w-40'>{formData.contractDue.interpreters}</p>
            </div>
            <div className="amount">
                <p className='w-40'>Amount</p>
                <p>:</p>
                <p className='w-40'>{formData.contractDue.amount}</p>
            </div>
            <div className="description">
                <p className='w-40'>Description</p>
                <p>:</p>
                <p className='w-40' style={{maxHeight : '5em', overflow : "auto", fontSize : '.9rem '}}>{formData.contractDue.description}</p>
            </div>
        </div>
        <div className="btns  d-flex">
        <button onClick={() => {
                setSteps(3)
            }}>Back</button>
            <button 
                style={{
                    marginLeft : '1rem'
                }}
             
            >Continue</button>
        </div>
    </div>
    )
}

export default ContractConfirmMsg
