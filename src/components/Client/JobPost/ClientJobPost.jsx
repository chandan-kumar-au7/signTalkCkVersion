import React, { useState } from 'react'
import FormTracker from './FormTracker'
import JobSpecs from './Step1/JobSpecs'
import ContractEventDue from './Step2/ContractEventDue'
import ShortEventDue from './Step2/ShortEventDue'
import ContractConfirmation from './Step3/ContractConfirmation'
import ShortConfirmation from './Step3/ShortConfirmation'
import ContractConfirmMsg from './Step4/ContractConfirmMsg'
import ShortConfirmMsg from './Step4/ShortConfirmMsg'
import './clientJobPost.css'

const ClientJobPost = ({ closeModal }) => {
    const initialState = {
        background : '',
        langugae : '',
        region : '',
        type : '',
        contractDue : {
            duration : '00:00',
            startDate : '01-01-2021',
            endDate : '02-01-2021',
            interpreters : 1,
            amount : 600,
            description : ''
        },
        shortDue : {
            duration : '00:00',
            startDate : '01-01-2021',
            endDate : '02-01-2021',
            interpreters : 1,
            amount : 800,
            description : ''
        }
    }
    const[steps, setSteps] = useState(1)
    const[formData, setFormData] = useState(initialState)

    return (
        <>
            {
                steps !== 4 &&
                <FormTracker
                    steps={steps}
                    setSteps={setSteps}
                />
            }
            <div className='job-post'>
                {
                    steps == 1 ? // step 1
                    <JobSpecs 
                        formData={formData} 
                        setFormData={setFormData} 
                        closeModal={closeModal}
                        initialState={initialState}
                        setSteps={setSteps}
                    />
                    : (
                        steps == 2 && formData.type == 'contract' ? // step 2 for contract
                            <ContractEventDue
                                formData={formData} 
                                setFormData={setFormData}
                                setSteps={setSteps}
                            />
                        : ( 
                            steps == 2 && formData.type == 'short' ? // step 2 for short
                                <ShortEventDue
                                    formData={formData} 
                                    setFormData={setFormData}
                                    setSteps={setSteps}
                                />
                            : (
                                steps == 3 && formData.type == 'contract' ? // step 3 for contract
                                    <ContractConfirmation
                                        formData={formData} 
                                        setFormData={setFormData} 
                                        closeModal={closeModal}
                                        initialState={initialState}
                                        setSteps={setSteps}
                                    />
                                : (
                                    steps == 3 && formData.type == 'short' ?  // step 3 for short
                                        <ShortConfirmation
                                            formData={formData} 
                                            setFormData={setFormData} 
                                            closeModal={closeModal}
                                            initialState={initialState}
                                            setSteps={setSteps}
                                        />
                                    : (
                                        steps == 4 && formData.type == 'short' ?
                                        <ShortConfirmMsg
                                            formData={formData} 
                                            setFormData={setFormData} 
                                            closeModal={closeModal}
                                            initialState={initialState}
                                            setSteps={setSteps}
                                        />
                                        : (
                                            steps == 4 && formData.type == 'contract' && (
                                                <ContractConfirmMsg
                                                    formData={formData} 
                                                    setFormData={setFormData} 
                                                    closeModal={closeModal}
                                                    initialState={initialState}
                                                    setSteps={setSteps}
                                                />
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                }
            </div>
        </>
    )
}

export default ClientJobPost
