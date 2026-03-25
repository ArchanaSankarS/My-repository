import './job.css';

import { useNavigate } from 'react-router-dom'; 

function Job() {
  const navigate = useNavigate(); 

  const jobs = [
    { id: 1, title: "React Developer", company: "Google", location: "Remote", experience:"2-4 years" ,salary:"5-10 LPA", description: "Responsible for developing and maintaining React applications." }, 
    { id: 2, title: "Liferay Developer", company: "Meta", location: "Chennai", experience:"3-5 years" ,salary:"6-12 LPA", description: "Expert in creating enterprise-grade portals and CMS solutions using Liferay DXP and integrating Reactportal" },
    { id: 3, title: "Backend Developer", company: "Amazon", location: "Bangalore", experience:"4-6 years" ,salary:"8-15 LPA",description:"Design robust server-side logic and RESTful APIs. Manage databases and ensure high system scalability." },
    { id: 4, title: "Frontend Developer", company: "Zoho", location: "Tenkasi", experience:"2-4 years" ,salary:"5-10 LPA" ,description:"Crafting pixel-perfect designs with HTML, CSS, and JS. Skilled in Tailwind CSS for modern web styling."},
    { id: 5, title: "Full Stack Developer", company: "Microsoft ", location: "Madurai", experience:"3-5 years" ,salary:"6-12 LPA",description:"Managing both client and server-side logic. Expert in MERN stack development and cloud deployment." },
    { id: 6, title: "Web Developer", company: "Infosys", location: "Trinelveli", experience:"2-4 years" ,salary:"5-10 LPA",description:"Design and maintain modern websites. Skilled in WordPress, PHP, and basic frontend technologies." },
    { id: 7, title: "Data Analyst", company: "Tech Mahindra:", location: "Tuticorin", experience:"2-4 years" ,salary:"5-10 LPA",description:"Interpret complex data sets to provide actionable insights. Proficient in SQL,Excel"} ,
    { id: 8, title: "Product Manager", company: "Cognizant", location: "Coimbatore", experience:"5-7 years" ,salary:"10-20 LPA",description:"Define product roadmaps and coordinate with tech teams. Focus on user needs and market growth." } ,
    { id: 9, title: "Sales Executive", company: "Wipro", location: "Hosur", experience:"2-4 years" ,salary:"5-10 LPA",description:"Identify new business opportunities and manage client relations. Drive revenue through  sales." },
    { id: 10, title: "Finance Manager", company: "HCL Technologies ", location: "Hyderabad", experience:"5-7 years" ,salary:"10-20 LPA",description:"Oversee financial reporting, budgeting, and risk management. Ensure compliance with fiscal regulations." },
    { id: 11, title: "Data Scientist", company: "Tata Consultancy Services", location: "Trichy", experience:"3-5 years" ,salary:"6-12 LPA",description:"Build predictive models using Machine Learning and Python.Extract value in large structured data." },
    { id: 12, title: "HR Manager", company: "LTIMindtree", location: "Chennai", experience:"4-6 years" ,salary:"8-15 LPA",description:"Manage recruitment, employee relations, and company culture. Expert in talent acquisition and payroll." }, 
  ];

  return (
    <div style={{ padding: '5px' }}>
      <h1>Available Jobs</h1>
    
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        transition: 'all 0.9s ease',
        gap: '40px' 
      }}>

        {jobs.map((job) => (
          <div key={job.id} style={{
            border: '1px solid #ccc',
            borderRadius: '20px',
            padding: '20px',
            boxSizing: 'border-box',
            boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
            minWidth: '100px'}}>

            <h3 className="title">{job.title}</h3>
            <hr style={{ border: '0.2px solid #d6caca', margin: '15px 0' }} />
            
            <p> <strong>Company:</strong> {job.company} </p>
            <p> <strong>Location:</strong> {job.location} </p>
            <p> <strong>Experience:</strong> {job.experience} </p>
            <p> <strong>Salary:</strong> {job.salary} </p>
            <p> <strong>Description:</strong> {job.description} </p>
            
            <hr style={{ border: '0.2px solid #d6caca', margin: '10px 0' }} />
            
           
            <button 
              className="button" 
              onClick={() => navigate('/application', { state: { jobTitle: job.title } })}
            >
              Apply Now
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Job;
