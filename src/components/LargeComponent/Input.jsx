import React,{useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'

function Input({setValue}) {
    const [state,setState] = useState({
        visible:false
    })
    return (
        <div>
            <input 
                autoComplete="new-password"
                type={state.visible===true?"text":"password"} 
                className='col-10 p-1 pl-2 border-0' 
                style={{fontSize:"16px",backgroundColor:"transparent"}} 
                placeholder='Password' 
                onChange={e=>setValue(e)}/>
                <FontAwesomeIcon 
                style={{cursor:"pointer",color:"black"}} 
                onClick={()=>setState({...state,visible:!state.visible})}
                icon={state.visible===false?faEye:faEyeSlash} />
        </div>
    )
}

export default Input
