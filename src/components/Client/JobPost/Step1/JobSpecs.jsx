import React from 'react'
import { Languages } from "../../../DummyData/languageDummy";
import './JobSpecs.css'
import {
    faBriefcaseMedical ,
    faUniversity,
    faLaptopCode,
    faCogs,
    faHandHoldingUsd
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select, MenuItem } from "@material-ui/core";

const places = [
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Hydrabad', label: 'Hydrabad' },
    { value: 'Others', label: 'Others' },
  ]
const languages = Languages
const works = [
    { value: 'Healthcare', label: 'Healthcare', icon : <FontAwesomeIcon icon={faBriefcaseMedical} className='mr-2'/> },
    { value: 'Bank', label: 'Bank', icon : <FontAwesomeIcon icon={faUniversity} className='mr-2'/>  },
    { value: 'Software', label: 'Software', icon : <FontAwesomeIcon icon={faLaptopCode} className='mr-2'/>  },
    { value: 'Technology', label: 'Technology', icon : <FontAwesomeIcon icon={faCogs} className='mr-2'/>  },
    { value: 'Finance & Accounting', label: 'Finance & Accounting', icon : <FontAwesomeIcon icon={faHandHoldingUsd} className='mr-2'/>  },
    { value: 'others', label: 'others' },
  ]

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
                    <Select
                        labelId='demo-customized-select-label'
                        id='demo-customized-select'
                        className='bg-light rounded'
                        style={{ width : '40%', padding: '1rem', height : 0 }}
                        value={formData.background}
                        onChange={(e) => setFormData({...formData, background : e.target.value})}
                    >
                        {
                            works.map((item, index) => (
                                <MenuItem key={item.value} value={item.value}>
                                    {item.icon}
                                    {item.label}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </div>
                <div className="lang mt-2">
                    <p className='labels' style={{width : '40%'}}>Language</p>
                    <p>:</p>
                    <Select
                        // isMulti
                        labelId='demo-customized-select-label'
                        id='demo-customized-select'
                        className='bg-light rounded'
                        style={{ width : '40%', padding: '1rem', height : 0}}
                        value={formData.language}
                        onChange={(e) => setFormData({...formData, langugae : e.target.value})}
                    >
                        {
                            languages.map((item, index) => (
                                <MenuItem key={index} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </div>
                <div className="region mt-2">
                    <p className='labels' style={{width : '40%'}} >Region</p>
                    <p>:</p>
                    <Select
                        labelId='demo-customized-select-label'
                        id='demo-customized-select'
                        className='bg-light rounded'
                        style={{ width : '40%', height : 0, padding : '1rem' }}
                        value={formData.region}
                        onChange={(e) => setFormData({...formData, region : e.target.value})}
                    >
                        {
                            places.map((item, index) => (
                                <MenuItem key={index} value={item.value}>
                                    {item.label}
                                </MenuItem>
                            ))
                        }
                    </Select>
                </div>
                <div className="type mt-1">
                    <p className='labels' style={{width : '40%'}} >Type</p>
                    <p>:</p>
                    <div style={{width : '40%'}}  className="types-item">
                        <div className="short">
                            <input 
                                type="checkbox"
                                onClick={() => setFormData({...formData, type:"short"})}
                                checked={
                                    formData.type == "short" && true
                                }
                            />
                            <p>Short</p>
                        </div>
                        <div className="contract">
                            <input 
                                type="checkbox"
                                onClick={() => setFormData({...formData, type:"contract"})}
                                checked={
                                    formData.type == "contract" && true
                                }
                            />
                            <p>Contract</p>
                        </div>
                    </div>
                </div>
                <div className="type meeting ">
                    <p className='labels' style={{width : '40%'}} >Meeting</p>
                        <p>:</p>
                        <div style={{width : '40%'}}  className="types-item">
                            <div className="short remote">
                                <input 
                                    type="checkbox"
                                    onClick={() => setFormData({...formData, meeting:"remote"})}
                                    checked={
                                        formData.meeting == "remote" && true
                                    }
                                />
                                <p>Remote</p>
                            </div>
                            <div className="contract">
                                <input 
                                    type="checkbox"
                                    onClick={() => setFormData({...formData, meeting:"on-site"})}
                                    checked={
                                        formData.meeting == "on-site" && true
                                    }
                                />
                                <p>On-Site</p>
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