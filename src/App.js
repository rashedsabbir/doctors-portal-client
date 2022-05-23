// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './pages/Shared/Navbar'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Log in/Login';
import Appointment from './pages/Appointment/Appointment';
import SignUp from './pages/Log in/SignUp';
import RequireAuth from './pages/Log in/RequireAuth'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="appointment" element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
