import React from 'react'
import { Link } from "react-router-dom"
import "../styles/navbar.css"
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
const NavBar = () => {
    return (
        <div className="navbar">

            <h1><img className='cheetahimg' src="/cheetah_travelz.png" alt="" /> Cheetah Travelz</h1>
            <div className="options">
                <Link to="/about"><InfoOutlinedIcon />About Us</Link>
                <Link to="/contact"><ContactPageOutlinedIcon />Contact</Link>
                <Link to="/login"><LoginOutlinedIcon />Login</Link>
            </div>

        </div>
    )
}

export default NavBar