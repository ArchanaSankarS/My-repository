import React from 'react';

import homeimg from "../assets/homeimg.jpg"; 
import "./Home.css";

function Home() {
    return (
        <div className="home-container">
            <div className="hero-section">
                <div className="hero-wrapper">
                    
                   
                    <div className="hero-content">
                        <div className="mainheading">Trusted by 5000+ Professionals</div>
                        
                        <h1 className="hero-title">
                            Find Your Next Career Move <br /> 
                            <span className="gradient-text">With Top Companies</span>
                        </h1>
                        
                        <p className="hero-description">
                            Discover 50,000+ open positions across Engineering, Marketing, 
                            Design, and Management. Your dream job is just one click away.
                        </p>

                        <div className="hero-stats">
                            <div className="stat-card">
                                <b>500+</b> 
                                <p>Companies</p>
                            </div>
                            <div className="stat-card">
                                <b>10k+</b> 
                                <p>Monthly Hires</p>
                            </div>
                            <div className="stat-card">
                                <b>24/7</b> 
                                <p>Support</p>
                            </div>
                        </div>
                    </div>

                   
                    <div className="hero-image-container">
                       
                        <img 
                            src={homeimg} 
                            className="hero-image" 
                            alt="Job Portal Banner" 
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;