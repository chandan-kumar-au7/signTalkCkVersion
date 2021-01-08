import React from 'react'
import './ShortEventDue.css'

const ContractEventDue = ({
    formData, 
    setFormData,
    setSteps 
}) => {
    return (
        <div className='event-due-container'>
            <p style={{ color : 'white', textAlign: "center", fontWeight : 500, fontSize : '1.1em'}}>Select Date and Time</p>
            <div className="selections">
                {
                    formData.meeting == 'on-site' && (
                        <>
                            <div className="address">
                                <p className='labels' style={{ width : '40%'}}>Address Line 1</p>
                                <p>:</p>
                                <div style={{width : '40%'}}>
                                    <input 
                                        type="text" 
                                        style={{ 
                                            width : '100%', 
                                            borderRadius : '10px', 
                                            padding: '5px' 
                                        }}
                                        value={formData.shortDue.address1}
                                        onChange={
                                            e => setFormData({
                                                ...formData, 
                                                shortDue : {
                                                    ...formData.shortDue, 
                                                    address1 : e.target.value
                                                }
                                            })
                                        }
                                    />
                                </div>
                            </div>
                            <div className="address">
                                <p className='labels' style={{ width : '40%' }}>Address Line 2</p>
                                <p>:</p>
                                <div style={{width : '40%'}}>
                                    <input 
                                        type="text" 
                                        style={{ 
                                            width : '100%', 
                                            borderRadius : '10px', 
                                            padding: '5px' 
                                        }}
                                        value={formData.shortDue.address2}
                                        onChange={
                                            e => setFormData({
                                                ...formData, 
                                                shortDue : {
                                                    ...formData.shortDue, 
                                                    address2 : e.target.value
                                                }
                                            })
                                        }
                                    />
                                </div>
                            </div>
                        </>
                    )
                }
                <div className="duration">
                    <p className='labels' style={{ width : '40%' }}>Duration</p>
                    <p>:</p>
                    <div style={{width : '40%', display : 'flex', justifyContent : 'space-between'}}  className="timeStamp">
                        <select style={{ 
                            width: '48%',
                            height : '75%',
                            borderRadius : '10px',
                            textAlign : 'center',
                            paddingLeft : '2em',
                            color : 'grey'
                        }}
                        defaultValue='default'
                        value={formData.shortDue.durationhr} 
                        onChange={
                            e => setFormData({
                                ...formData, 
                                shortDue : {
                                    ...formData.shortDue, 
                                    durationhr : e.target.value
                                }
                            })
                        }
                        >
                            <option value='default' disabled>HH</option>
                            {
                                [...Array(6)].map((el, i)=>(
                                    <option>{i}</option>
                                ))
                            }
                        </select>
                        <select style={{ 
                            width: '48%',
                            height : '75%',
                            borderRadius : '10px',
                            textAlign : 'center',
                            color : 'grey',
                            paddingLeft : '2em'
                        }}
                        defaultValue='default'
                        value={formData.shortDue.durationm} 
                        onChange={
                            e => setFormData({
                                ...formData, 
                                shortDue : {
                                    ...formData.shortDue, 
                                    durationm : e.target.value
                                }
                            })
                        }
                        >
                            <option value='default' disabled>MM</option>
                            {
                                [...Array(6)].map((el, i)=>(
                                    <option>{i*10}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="start-date mt-1">
                    <p className='labels' style={{width : '40%'}}>Start Date</p>
                    <p>:</p>
                    <div style={{width : '40%'}} className="start-date-picker">
                        <input 
                            type="date"
                            style = {{ color : 'grey', width : '100%', padding : '5px 10px', borderRadius : '10px', fontSize : '20px' }}
                            min={ new Date().toISOString().split('T')[0] }
                            value={formData.shortDue.startDate} 
                            placeholder='Selet Date'
                            onChange={
                                e => setFormData({
                                    ...formData, 
                                    shortDue : {
                                        ...formData.shortDue, 
                                        startDate : e.target.value
                                    }
                                })
                            }
                        />
                    </div>
                </div>
                <div className="end-date mt-1">
                    <p className='labels' style={{width : '40%'}}>Booking Time</p>
                    <p>:</p>
                    <div style={{width : '40%'}}  className="timeStamp">
                        <input 
                            type="time" 
                            style = {{ color : 'grey', width: '100%', padding : '5px 10px', borderRadius : '10px', fontSize : '20px' }}
                            value={formData.shortDue.bookingTime} 
                            onChange={
                                e => setFormData({
                                    ...formData, 
                                    shortDue : {
                                        ...formData.shortDue, 
                                        bookingTime : e.target.value
                                    }
                                })
                            }
                        />
                    </div>
                </div>
                <div className="assistance mt-1">
                    <p className='labels' style={{width : '40%'}}>Assistance Needed</p>
                    <p>:</p>
                    <div style={{width : '40%'}}  className="checks">
                            <div className="d-flex mb-1">
                                <input 
                                    type="checkbox"
                                />
                                <p>ISL to English</p>
                            </div>
                            <div className="d-flex mb-1">
                                <input 
                                    type="checkbox"
                                />
                                <p>English to ISL</p>
                            </div>
                            <div className="d-flex mb-1">
                                <input 
                                    type="checkbox"
                                />
                                <p>ISL to English Transcript</p>
                            </div>
                            <div className="d-flex mb-1">
                                <input 
                                    type="checkbox"
                                />
                                <p>Transcript to ISL</p>
                            </div>
                    </div>
                </div>
            </div>
            <div className="btns d-flex mt-2" style={{
                        width : '40%',
                        textAlign : 'center'
                    }}>
                <button onClick={() => {
                    setSteps(1)
                }}>Back</button>
                <button 
                    style={{
                        marginLeft : '1rem'
                    }}
                    onClick={() => setSteps(3)}
                >Continue</button>
            </div>
        </div>
    )
}

export default ContractEventDue
