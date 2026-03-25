import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/contact';
import Job from './pages/job';
import ApplicationForm from './pages/Application';
import Login from './pages/Login';
import Register from './pages/Register';
import RecruiterDashboard from './pages/RecruiterDashboard'; 

import './pages/Home.css';
import logo from './assets/jobz.png';


const loginButtonStyle = { 
  padding: '7px 20px', 
  background: 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899, #f97316)', 
  color: '#fff', 
  border: 'none',
  fontSize:'25px' ,
  borderRadius: '60px', 
  cursor: 'pointer', 
  fontWeight: 'bold',
  transition: 'opacity 0.3s ease' 
};

const registerButtonStyle = { padding: '7px 20px', background: '#6366f1',color: '#fff',fontSize:'25px' , border: 'none', borderRadius: '60px', cursor: 'pointer', fontWeight: 'bold' };
const logoutButtonStyle = { padding: '7px 20px', background: '#1d0d0d', color: '#fff', border: 'none', borderRadius: '60px', cursor: 'pointer', fontWeight: 'bold' };

function Navigation({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userLoggedIn");
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav style={{ padding: '10px 20px', background: '#2459b0', display: 'flex',fontSize:'25px', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div className="logo-container">
        <img src={logo} alt="Logo" style={{ height: '100px' }} />
      </div>
      <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '105px' }}>
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/">Home</Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/about">About</Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to="/contact">Contact</Link>
        
        {!isLoggedIn ? (
          <>
            <button onClick={() => navigate('/login')} style={loginButtonStyle}>Login</button>
            <button onClick={() => navigate('/register')} style={registerButtonStyle}>Register</button>
          </>
        ) : (
          <button onClick={handleLogout} style={logoutButtonStyle}>Logout</button>
        )}
      </div>
    </nav>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem("userLoggedIn");
    if (status === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div style={{ padding: '10px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />          
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register />} />
          
          <Route path="/job" element={isLoggedIn ? <Job /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/application" element={<ApplicationForm />} />
          <Route path="/recruiter-dashboard" element={<RecruiterDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;