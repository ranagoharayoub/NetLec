import { Checkbox } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './CreateStudent.css'
function CreateStudent() {
    return (
    <div className='login-cont'>
            <div className='left-cont'>
                <Link to='/login'>
                    <img className='arrow-logo' src='arrow.png' alt='arrow'></img>
                </Link>
                <div className='student-acc'>
                    <p>Create Your Student Account.</p>
                </div>
                <div className='already-acc'>
                    <p>Already have an account?  </p>
                    <Link to='/login' style={{textDecoration:'none'}}><p style={{color:'#F92145', marginLeft:'5px'}}>Log in</p></Link>
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

export default CreateStudent
