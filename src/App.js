// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './pages/Shared/Navbar'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Log in/Login';
import Appointment from './pages/Appointment/Appointment';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
