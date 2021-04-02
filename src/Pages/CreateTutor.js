import React from 'react'
import './CreateTutor.css'
import { Checkbox } from '@material-ui/core'

function CreateTutor() {
    return (
        <div className='login-cont'>
        <div className='left-cont'>
            <div>
                <img className='arrow-logo' src='arrow.png' alt='arrow'></img>
            </div>
            <div className='tutor-acc'>
                <p>Create Your Tutor Account.</p>
            </div>
            <div className='already-acc'>
                <p>Already have an account?  </p>
                <p style={{color:'#F92145' , marginLeft:'5px'}}>Log in</p>
            </div>
            <form>
                <input className='first-name' type='text' placeholder='First Name'></input>
                <input className='last-name' type='text' placeholder='Last Name'></input>
                <input className='email-add' type='text' placeholder='Email Address'></input>
                <input className='cr-pass' type='password' placeholder='Password'></input>
                <div className='cr-checkbox'><Checkbox></Checkbox></div>
                <p className='accept-tac'>Accept Terms & Conditions</p>
                <button className='register-btn'>Register Now</button>
            </form>
            <p className='or-login'>Or, Log in with</p>
            <button className='login-gmail'>Login with Gmail</button>
        </div>
    <div className='right-cont'>

    </div>
</div>
    )
}

export default CreateTutor
