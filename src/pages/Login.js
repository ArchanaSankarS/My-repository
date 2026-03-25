import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css';

const Login = ({ setIsLoggedIn }) => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "seeker@test.com" && password === "seeker12") {
      
      alert("Login Successful as Job Seeker!");
      
   
      localStorage.setItem("userLoggedIn", "true"); 
      setIsLoggedIn(true); 
      
      navigate('/job'); 
    } 
    else if (email === "recruiter@test.com" && password === "admin12") {
      alert("Login Successful as Recruiter!");
      
   
      localStorage.setItem("userLoggedIn", "true"); 
      setIsLoggedIn(true); 
      
      navigate('/recruiter-dashboard'); 
    } 
    else {
      alert("Invalid credentials. Use seeker@test.com or recruiter@test.com");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Welcome Back</h2>
        
        <p>Please enter your details to login</p>
        <br></br>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address:</label><br></br>
            <input 
              type="email" 
              placeholder="Enter (Email)" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
<br></br>
          <div className="input-group">
            <label>Password:</label><br></br>
            <input 
              type="password" 
              placeholder="Enter password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
<br></br>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;