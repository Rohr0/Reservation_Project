import "../styles/homepage.css"
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BusImage from "./BusImage";

const Homepage = () => {
    let [from, setFrom] = useState('')
    let [to, setTo] = useState('')
    let [dod, setDate] = useState('');
    let navigate = useNavigate()
    // useEffect(() => {

    //     fetchdata()
    // }, [])
    let fetchdata = (e) => {
        axios.get(`http://localhost:8080/bus/filter?from=${from}&to=${to}&dod=${dod}`)
            .then((resp) => {
                alert("Found")
                navigate("/result")
                console.log(resp)
            })
            .catch((err) => {
                alert("Not Found")
            })
    }
    return (
        <div>
            <div className="homepage">
                <div className="search" >
                    <form action="" className="sform">
                        <div className="d1"> <><FlightTakeoffIcon id="i1" /></> <input type="text" placeholder="From" required value={from} onChange={(e) => { setFrom(e.target.value) }} /></div>
                        <div className="d1"> <><FlightLandIcon id="i2" /></> <input type=" text" placeholder="To" required value={to} onChange={(e) => { setTo(e.target.value) }} /></div>
                        <div className="d1"><input type="date" id="date" required placeholder="Departure Date" value={dod} onChange={(e) => { setDate(e.target.value) }} /></div>
                        <button onClick={fetchdata}>Search Buses</button>
                    </form >
                </div >
            </div >
            <BusImage />
            <div className="homepage2">
                <h2>Special Offers</h2>
                <div className="offers">
                    <img src="https://static.abhibus.com/busgallery/offerbanners/Sep2023/14/1694685729-laddu-mob.webp" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Homepage