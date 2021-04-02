import React from 'react'
import { Link } from 'react-router-dom'
import './Forgotpass.css'

function ForgotPass() {
    return (
        <div className='login-cont'>
            <div className='left-cont'>
                <div className='forg-logo'>
                    
                </div>
                <div className='forgot-pass'>
                    <p>Forgot Password?</p>
                </div>
                <div className='enter-email'>
                    <p>Enter the email address associated with your account. </p>

                </div>
                <form>
                    <input className='forg-user-name' type='text' placeholder='john@domai.com'></input>
                    <p className='valid-email'>Enter valid email Address</p>
                    <button className='login-btn'>Get Reset Link</button>
                </form>
                <Link to='/login'><p className='forgot'>Back to Login</p></Link>
                <div>
                    <img style={{position:'absolute',top:'890.13px', left:'306px', height:'24px'}} src='/fb.png' alt='fb'></img>
                    <img style={{position:'absolute',top:'890.13px', left:'351.1px', height:'24px'}} src='/insta.png' alt='insta'></img>
                    <img style={{position:'absolute',top:'890.13px', left:'396.21px', height:'24px'}} src='/twitter.png' alt='twitter'></img>
                </div>
            </div>
            <div className='right-cont'>

            </div>
        </div>
    )
}

export default ForgotPass
