import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [role, setRole] = useState('jobseeker'); 
  return (
    <div className="register-container">
      <div className="form-box">
        <h2>Register as {role === 'admin' ? 'Admin' : 'Jobseeker'}</h2>
        <p>Note: Register here, if you are searching for a job</p>
        <div className="toggle-buttons">
          <button 
            className={role === 'jobseeker' ? 'active' : ''} 
            onClick={() => setRole('jobseeker')}
          >
            Jobseeker
          </button>
          <button 
            className={role === 'admin' ? 'active' : ''} 
            onClick={() => setRole('admin')}
          >
            Admin (Company)
          </button>
        </div>

        <form className="register-form">
          {role === 'jobseeker' ? (
      
            <>
              <input type="text" placeholder="Full Name" required /> <br></br>
              <input type="text" placeholder="School Name" required /> <br></br>
              <input type="text" placeholder="Degree (e.g. BE, BSC)" required /> <br></br>
              <textarea placeholder="Other Details (Skills, Experience)"></textarea> <br></br>
            </>
          ) : (
         
            <>
              <input type="text" placeholder="Company Name" required /> <br></br>
              <input type="text" placeholder="Company Website" required /><br></br>
              <input type="email" placeholder="Official Email" required /><br></br>
              <textarea placeholder="Company Address / Description"></textarea><br></br>
            </>
          )}
          
          <button type="submit" className="submit-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;