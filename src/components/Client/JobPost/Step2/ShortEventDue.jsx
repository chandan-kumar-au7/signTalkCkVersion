import React from 'react'
import './ContractEventDue.css'

const ContractEventDue = ({
    formData, 
    setFormData,
    setSteps 
}) => {
    return (
        <div className='event-due-container'>
            <p style={{ color : 'white', textAlign: "center", fontWeight : 500, fontSize : '1.1em'}}>Select Date and Time</p>
            <div className="selections">
            <div className="duration">
                    <p className='labels' style={{ width : '40%' }}>Duration</p>
                    <p>:</p>
                    <div style={{width : '40%'}}  className="timeStamp">
                        <input 
                            type="time" 
                            style = {{ color : 'grey' }}
                            value={formData.shortDue.duration} 
                            onChange={
                                e => setFormData({
                                    ...formData, 
                                    shortDue : {
                                        ...formData.shortDue, 
                                        duration : e.target.value
                                    }
                                })
                            }
                        />
                    </div>
                </div>
                <div className="start-date">
                    <p className='labels' style={{width : '40%'}}>Start Date</p>
                    <p>:</p>
                    <div style={{width : '40%'}} className="start-date-picker">
                        <input 
                            type="date"
                            style = {{ color : 'grey' }}
                            min={ new Date().toISOString().split('T')[0] }
                            value={formData.shortDue.startDate} 
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
                <div className="end-date">
                    <p className='labels' style={{width : '40%'}}>End Date</p>
                    <p>:</p>
                    <div style={{width : '40%'}} className="end-date-picker">
                        <input 
                            type="date"
                            style = {{ color : 'grey' }}
                            min={formData.shortDue.startDate}
                            value={formData.shortDue.endDate} 
                            onChange={
                                e => setFormData({
                                    ...formData, 
                                    shortDue : {
                                        ...formData.shortDue, 
                                        endDate : e.target.value
                                    }
                                })
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="btns d-flex">
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
