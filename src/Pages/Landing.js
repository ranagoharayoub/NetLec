import React from 'react'
import { Link } from 'react-router-dom'

function Landing() {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <Link to='/login'><h1>Redirect to Login Page</h1></Link>
        </div>
    )
}

export default Landing
