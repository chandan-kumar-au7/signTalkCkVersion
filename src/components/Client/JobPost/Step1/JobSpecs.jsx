import React from 'react'
import './JobSpecs.css'

const JobSpecs = ({ 
    formData, 
    setFormData, 
    closeModal,
    initialState,
    setSteps
 }) => {
    return (
        <div className='job-sepcs-container'>
            <p style={{ color : 'white', textAlign: "center", fontWeight : 500, fontSize : '1.1em'}}>Choose the job specs</p>
            <div className="selections">
                <div className="JB">
                    <p className='labels' style={{ width : '40%' }}>Job Background</p>
                    <p>:</p>
                    <select value={formData.background} style={{width : '40%'}} defaultValue='default'>
                        <option value="default">Any</option>
                    </select>
                </div>
                <div className="lang">
                    <p className='labels' style={{width : '40%'}}>Language</p>
                    <p>:</p>
                    <select value={formData.language} style={{width : '40%'}}  defaultValue='default'>
                        <option value="default">Select</option>
                    </select>
                </div>
                <div className="region">
                    <p className='labels' style={{width : '40%'}} >Region</p>
                    <p>:</p>
                    <select value={formData.region} style={{width : '40%'}}  defaultValue='default'>
                        <option value="default">Enter Loaction</option>
                    </select>
                </div>
                <div className="type">
                    <p className='labels' style={{width : '40%'}} >Type</p>
                    <p>:</p>
                    <div style={{width : '40%'}}  className="types-item">
                        <div className="short">
                            <input 
                                type="checkbox"
                                onClick={() => setFormData({...initialState, type:"short"})}
                                checked={
                                    formData.type == "short" && true
                                }
                            />
                            <p>Short</p>
                        </div>
                        <div className="contract">
                            <input 
                                type="checkbox"
                                onClick={() => setFormData({...initialState, type:"contract"})}
                                checked={
                                    formData.type == "contract" && true
                                }
                            />
                            <p>Contract</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="btns d-flex">
                <button onClick={() => {
                    closeModal("")
                    setFormData(initialState)
                }}>Cancel</button>
                <button 
                    onClick={() => setSteps(2)}
                    style={{
                        marginLeft : '1rem'
                    }}
                    disabled={
                        formData.type == "" ? true : false
                    }
                >Continue</button>
            </div>
        </div>
    )
}

export default JobSpecs
