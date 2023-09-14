// import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import BusImage from './components/BusImage';
import SignUp from './components/SignUp';
import AdminLogin from './components/AdminLogin';
import AdminSignup from './components/AdminSignup';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<BusImage />} />
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminsignup" element={<AdminSignup />} />
          {/* <Route path="" element={ } /> */}
          {/* <Route path="" element={ } /> */}
          {/* <Route path="" element={ } /> */}
          {/* <Route path="" element={ } /> */}
          {/* <Route path="" element={ } /> */}
        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;
