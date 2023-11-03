import React from 'react'
import "./Home.css"
import {useState} from "react"
function Signup() {
        const [formData, setFormData] = useState({
          username: '',
          email: '',
          password: '',
        });
      
        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value,
          });
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Add your signup logic here, e.g., make an API request to register the user
          console.log('Form data submitted:', formData);
        };
  return (
        <div className='content'>
        <div className="signup-container">
            <center>
          <h2>Sign Up</h2>
          <br></br>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
          </center>
        </div>
        </div>
      );
    };
    
    export default Signup;
    
  
