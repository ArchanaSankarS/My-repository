import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './RecruiterDashboard.css';
import './Home';

const RecruiterDashboard = () => {
  const navigate = useNavigate(); 

  const [jobData, setJobData] = useState({
    CompanyName: '',
    JobTitle: '',
    Location: '',
    Experience: '',
    Salary: '',
    Description: ''
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted Successfully:", jobData);
    alert("Job Posted Successfully!");
  };

  return (
    <div className="recruiter-container">
      <div className="form-card">
        <h2>Post a New Job</h2>
        <p>Fill in the details below to find your next star candidate.</p>
        
        <form onSubmit={handleSubmit} className="job-form">
          <div className="form-group">
            <label>Company Name:</label>
            <input 
              type="text" name="CompanyName" placeholder="e.g. Google" 
              value={jobData.CompanyName} onChange={handleChange} required 
            />
          </div>
          <br></br>
          <div className="form-group">
            <label>Job Title:</label>
            <input 
              type="text" name="JobTitle" placeholder="e.g. Full Stack Developer" 
              value={jobData.JobTitle} onChange={handleChange} required 
            />
          </div>
<br></br>
          <div className="row">
            <div className="form-group">
              <label>Location:</label>
              <input 
                type="text" name="Location" placeholder="e.g. Chennai, Remote" 
                value={jobData.Location} onChange={handleChange} required 
              />
            </div>
            <br></br>
            <div className="form-group">
              <label>Experience Required:</label>
              <input 
                type="text" name="Experience" placeholder="e.g. 2-5 Years" 
                value={jobData.Experience} onChange={handleChange} required 
              />
            </div>
          </div>

          <div className="form-group">
            <label>Salary Range:</label>
            <input 
              type="text" name="Salary" placeholder="e.g. ₹5,00,000 - ₹8,00,000" 
              value={jobData.Salary} onChange={handleChange} required 
            />
          </div>

          <div className="form-group">
            <label>Job Description:</label>
            <textarea 
              name="Description" rows="5" placeholder="Describe the roles and responsibilities..." 
              value={jobData.Description} onChange={handleChange} required 
            ></textarea>
          </div>

         
          <div className="button-container" style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <button type="submit" className="post-btn" style={{ flex: 2 }}>Post Job Now</button>
            
       
            <button 
              type="button" 
              className="view-job-btn" 
              onClick={() => navigate('/')} 
              
            >
              Back to Home Page
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecruiterDashboard;