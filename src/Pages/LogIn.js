import React, { useState } from 'react'
import './LogIn.css'
import '@material-ui/core'
import { Checkbox } from '@material-ui/core'
import { Link } from 'react-router-dom'

function LogIn() {

    const [validity, setvalidity] = useState(true)

    const validityHandler =(e) =>{
        setvalidity(false)
        e.preventDefault()
    }
    return (
        <div className='login-cont'>
            <div className='left-cont'>
                <div className='logo'>
                    
                </div>
                <div className='welcome-back'>
                    <p>Welcome back.</p>
                </div>
                <div className='dont-acc'>
                    <p>Don't have an account? </p>
                    <Link style={{textDecoration:'none', display:'flex', alignItems:'center'}} to='/studentaccount'><p style={{color:'#F92145', marginLeft:'5px'}}>Sign up</p></Link>
                </div>
                <form>
                    <input className='user-name' type='text' placeholder='User Name'></input>
                    <input className='pass' type='password' placeholder='Password'></input>
                    <div className='checkbox'><Checkbox></Checkbox></div>
                    <p className='keep'>Keep me logged in</p>
                    <p className='valid' style={validity?{display: 'none'}: {display:'flex'}}>Enter Valid User Name and Password</p>
                    <button style={validity?{top: '650.12px'}: {top:'690.12px'}} onClick={validityHandler} className='login-btn'>Log In</button>
                </form>
                <Link to='/forget'>
                    <p style={validity?{top: '720.12px'}: {top:'760.12px'}} className='forgot'>Forgot Password?</p>
                </Link>
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

export default LogIn
