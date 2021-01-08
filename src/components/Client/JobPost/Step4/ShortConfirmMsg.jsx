import React, { useState } from 'react'
import './ShortConfirmMsg.css'
import infoIcon from '../../../../assets/images/Icon feather-info.svg'

const ShortConfirmMsg = ({
    formData, 
    setSteps,
    props
}) => {

    return (
        <>
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
                <div className="duration">
                    <p className='w-40'>Duration</p>
                    <p>:</p>
                    <p className='w-40'>{`${formData.shortDue.durationhr}:${formData.shortDue.durationm}`}</p>
                </div>
                <div className="start-date">
                    <p className='w-40'>Start Date</p>
                    <p>:</p>
                    <p className='w-40'>{formData.shortDue.startDate}</p>
                </div>
                <div className="booking-time">
                    <p className='w-40'>Booking Time</p>
                    <p>:</p>
                    <p className='w-40'>{formData.shortDue.duration}</p>
                </div>
                <div className="interpreters">
                    <p className='w-40'>No of Interpreters</p>
                    <p>:</p>
                    <p className='w-40'>{formData.shortDue.interpreters}</p>
                </div>
                <div className="amount">
                    <p className='w-40'>Amount</p>
                    <p>:</p>
                    <div className='w-40 d-flex' style={{ height : '50%'}}>
                        <p>{formData.shortDue.amount} Rs.</p>
                        <img width={20} src={infoIcon} className='ml-3' alt=""/>
                    </div>
                </div>
                <div className="description">
                    <p className='w-40'>Description</p>
                    <p>:</p>
                    <p className='w-40' style={{maxHeight : '5em', overflow : "auto", fontSize : '.9rem '}}>{formData.shortDue.description}</p>
                </div>
            </div>
            <div className="btns d-flex">
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
        
        </>
    )
}

export default ShortConfirmMsg
