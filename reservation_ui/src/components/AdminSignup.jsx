import React, { useState } from 'react'
import "../styles/signup.css"

const AdminSignup = () => {
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [date, setDate] = useState('')
    let [phone, setPhone] = useState('')
    let [password, setPassword] = useState('')
    let [gst, setGst] = useState('')
    return (
        <div className='signup'>
            <form action="">
                <h1>Admin Register</h1>
                <input type="text" placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} required /> <br /><br />
                <input type="text" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} required /> <br /><br />
                <input type="date" placeholder='DOB' value={date} onChange={(e) => { setDate(e.target.value) }} required /> <br /><br />
                <input type="tel" pattern='[0-9]{10}' placeholder='Phone Number' value={phone} onChange={(e) => { setPhone(e.target.value) }} required /> <br /><br />
                <input type="text" placeholder='GST Number' value={gst} onChange={(e) => { setGst(e.target.value) }} required /> <br /><br />
                <input type="text" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} required /> <br /><br />
                <button>Register</button>

            </form>
        </div>
    )
}

export default AdminSignup