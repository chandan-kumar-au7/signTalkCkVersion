import React from 'react'
import './ContractConfirmation.css'

const ContractConfirmation = ({
    formData,
    setFormData,
    setSteps
}) => {
    return (
        <div className='contract-confirmtion-container'>
            <p style={{ color: 'white', textAlign: "center", fontWeight: 500, fontSize: '1.1em' }}>Confirm details</p>
            <div className="selections">
                <div className="interpreters">
                    <p className='labels' style={{ width: '40%' }}>No. of interpreters</p>
                    <p>:</p>
                    <input
                        style={{
                            width: '40%',
                            height: '53%',
                            paddingLeft: '10px'
                        }}
                        value={formData.contractDue.interpreters}
                        type="number"
                        onChange={e => {
                            setFormData({
                                ...formData, contractDue: {
                                    ...formData.contractDue, interpreters: e.target.value
                                }
                            })
                        }}
                    />
                </div>
                <div className="amount">
                    <p className='labels' style={{ width: '40%' }}>Amount</p>
                    <p>:</p>
                    <p style={{ width: '40%' }} >{formData.contractDue.amount} Rs./Day</p>
                </div>
                <div className="description">
                    <p className='labels' style={{ width: '40%' }}>Description</p>
                    <p>:</p>
                    <textarea 
                        style={{ 
                            width: '40%', 
                            fontSize: '.8rem' 
                        }} 
                        placeholder='Enter description' cols="30" rows="4"
                        value={formData.contractDue.description}
                        onChange={e => {
                            setFormData({
                                ...formData, contractDue: {
                                    ...formData.contractDue, description: e.target.value
                                }
                            })
                        }}
                    ></textarea>
                </div>
            </div>
            <div className="btns d-flex">
                <button onClick={() => {
                    setSteps(2)
                }}>Back</button>
                <button
                    style={{
                        marginLeft : '1rem'
                    }}
                    onClick={()=>setSteps(4)}
                >Continue</button>
            </div>
        </div>
    )
}

export default ContractConfirmation
