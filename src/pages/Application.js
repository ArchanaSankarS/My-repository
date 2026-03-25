import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Application.css';



function ApplicationForm() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '', 
    position: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application Submitted for ${formData.fullName}`);
    
    

    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      position: '',
      resume: null,
    });
  };

  return ( 
    <div className="form-container">  
    <div className="application-form-container">
      <h2>APPLICATION FORM</h2>

      <form onSubmit={handleSubmit} className="application-form">
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Phone Number:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>

        <label>
          Position Applying For:
          <input type="text" name="position" value={formData.position} onChange={handleChange} required />
        </label>

        <label>
          Upload Resume:
          <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} required />
        </label>

       
        <div className="button-group" style={{ display: 'flex', gap: '10px' }}>
          <button type="submit">Submit Application</button>
          
          <button 
            type="button" 
            className="back-btn" 
            onClick={() => navigate('/job')} 
          >
            Back to Job Portal
          </button>
        </div>
      </form>
    </div>
     </div>
  );
}

export default ApplicationForm;