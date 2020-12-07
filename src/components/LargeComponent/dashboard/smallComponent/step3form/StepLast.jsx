import React from 'react'

function StepLast({closeModal}) {
    setTimeout(()=>closeModal(),4000)
    return (
        <div>
            <h5 className='mt-4 mb-0' style={{color:'#54ACF0',fontWeight:"lighter"}}>Congratulations!</h5>
            <p className='mb-3 text-light mt-1' style={{fontSize:"14px"}}>Welcome abroad</p>
            <p style={{fontSize:"12px",color:"lightgray"}}>Give us a minute, setting up your profile</p>
            <img className='col-4 p-0 m-auto' src={require('../../../../../assets/images/lastStep.svg')} alt="img"/>
        </div>
    )
}

export default StepLast
