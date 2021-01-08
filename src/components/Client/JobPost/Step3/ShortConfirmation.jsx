import React, { useState } from 'react'
import './ShortConfirmation.css'
import infoIcon from '../../../../assets/images/Icon feather-info.svg'
import SignUpLogin from "../../../LargeComponent/SignUpLogin";
import ReactModal from 'react-responsive-modal'
import classNames from "classnames";
import VerifyForm from '../../../LargeComponent/dashboard/VerifyForm'

const ShortConfirmation = ({
    phoneModal,
    setPhoneModal,
    formData, 
    setFormData, 
    closeModal,
    initialState,
    setSteps,
    props
}) => {

    const[logModal, setLogModal] = useState(false)

    return (
        <>
        <div className='short-confirmtion-container'>
            <p style={{ color : 'white', textAlign: "center", fontWeight : 500, fontSize : '1.1em'}}>Confirm details</p>
            <div className="selections">
                <div className="interpreters">
                    <p className='labels' style={{ width : '30%' }}>No. of interpreters</p>
                    <p>:</p>
                    <div style={{ width : '60%', display : 'flex', justifyContent : 'space-between'}}>
                        <input
                            style={{
                                width: '20%',
                                borderRadius : '5px',
                                height : '45px',
                                padding: '5px',
                                borderRadius : '10px',
                                textAlign : 'center'
                            }}
                            value={formData.shortDue.interpreters}
                            type="number"
                            onChange={e => {
                                setFormData({
                                    ...formData, shortDue: {
                                        ...formData.shortDue, interpreters: e.target.value
                                    }
                                })
                            }}
                        />
                        <div className='interpreter-info d-flex' style={{ width : '78%', justifyContent : 'space-between', alignItems : 'center'}}>
                            <img width={20} src={infoIcon} alt=""/>
                            <div className='d-flex p-0 m-0' style={{ flexDirection : 'column', width: '90%'}}>
                                <p className='p-0 m-0' style={{ fontSize : '13px' }}>Recommended: <span style={{color :'#AB57FF'}}>3</span> interpreters</p>
                                <p className='p-0 m-0' style={{ fontSize : '10px' }}>Based on the duration we suggest you to hire 3 interpreters</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="amount mt-2">
                    <p className='labels' style={{width : '30%'}}>Amount</p>
                    <p>:</p>
                    <div style={{ width : '60%', display : 'flex', justifyContent : 'space-between'}}>
                        <input 
                            type="number" 
                            style={{ 
                                width : '40%',
                                borderRadius : '10px',
                                textAlign: "center"
                            }}
                            placeholder='Enter amount' 
                            value={formData.shortDue.amount}
                            onChange={e => setFormData({
                                ...formData, shortDue: {
                                    ...formData.shortDue, amount: e.target.value
                                }
                            })}
                        />
                        <div className='interpreter-info d-flex' style={{ width : '60%', justifyContent : 'space-evenly', alignItems : 'center'}}>
                            <img width={20} src={infoIcon} alt=""/>
                            <div className='d-flex p-0 m-0' style={{ flexDirection : 'column', width: '80%'}}>
                                <p className='p-0 m-0' style={{ fontSize : '13px' }}>Usually between <span style={{color :'#AB57FF'}}>&#8377;1000 - &#8377;3000</span></p>
                                <p className='p-0 m-0' style={{ fontSize : '10px' }}>Based on our previous assignments</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description mt-3">
                    <p className='labels' style={{width : '30%'}}>Description</p>
                    <p>:</p>
                    <textarea 
                        style={{ 
                            width: '60%', 
                            fontSize: '.8rem',
                            height : '7em',
                            padding : '10px',
                            borderRadius : '10px' 
                        }} 
                        placeholder='Enter description' cols="30" rows="4"
                        value={formData.shortDue.description}
                        onChange={e => {
                            setFormData({
                                ...formData, shortDue: {
                                    ...formData.shortDue, description: e.target.value
                                }
                            })
                        }}
                    ></textarea>
                </div>
            </div>
            <div className="btns d-flex mt-3" style={{
                        width : '40%',
                        textAlign : 'center'
                    }}>
                <button onClick={() => {
                    setSteps(2)
                }}>Back</button>
                <button 
                    style={{
                        marginLeft : '1rem'
                    }}
                    onClick={()=>{
                        const clientToken = localStorage.getItem('userToken')
                        return (
                            clientToken 
                            ? setSteps(4)
                            : setLogModal(true)
                        )
                    }
                    }
                >Continue</button>
            </div>
        </div>
        {
            logModal &&
            <ReactModal
                open={logModal}
                onClose={()=> {
                    setLogModal(false)
                }}
                classNames={{
                    modal : 'client-job-modal2'
                }}
                center
            >
                <p style={{ textAlign : 'center'}}>You need to log yourself in first</p>
                <SignUpLogin
                    phoneModal={phoneModal}
                    setPhoneModal={setPhoneModal}
                    isInterpreter={false}
                    // setVerify={props.setVerify}
                    clicked={'left'}
                    modalState={logModal}
                    setmodalState={setLogModal}
                />
            </ReactModal>
        }
        {
            phoneModal &&
                <VerifyForm
                    phoneModal
                    setPhoneModal
                />
        }
        </>
    )
}

export default ShortConfirmation