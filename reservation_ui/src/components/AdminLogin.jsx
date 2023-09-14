import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/login.css"

const AdminLogin = () => {
    return (
        <div className='login'>
            <form action="">
                <h1>Admin Login</h1>
                <input type="email" placeholder='Username' />
                <br />
                <br />
                <input type="password" placeholder='Password' />
                <br /><br />
                <button>Sign In</button>
                <br />
                <h3>New Admin?<Link to="/adminsignup">Register</Link></h3>
            </form>
        </div>
    )
}

export default AdminLogin