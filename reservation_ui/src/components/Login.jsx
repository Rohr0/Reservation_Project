import React from 'react'
import "../styles/login.css"
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='login'>
            <form action="">
                <h1>User Login</h1>
                <input type="email" placeholder='Username' />
                <br />
                <br />
                <input type="password" placeholder='Password' />
                <br /><br />
                <button>Sign In</button>
                <br />
                <h3>New User?<Link to="/signup">Register</Link></h3>
                <h3>Are you an Admin?<Link to="/adminlogin">Admin Login</Link></h3>
            </form>
        </div>
    )
}

export default Login