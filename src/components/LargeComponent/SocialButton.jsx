import React from 'react'
import SocialLogin from 'react-social-login'


function SocialButton(props) {
    return (
        <div className='border-0 p-0' onClick={props.triggerLogin} {...props}>
               { props.children }
             </div>
    )
}

 
export default SocialLogin(SocialButton);