import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // State to manage form inputs
  const [ownerForm, setOwnerForm] = useState({ email: "", password: "" });
  const navigate=useNavigate()

  // Update the form input state when user types
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOwnerForm({ ...ownerForm, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Replace 'apiEndpoint' with your actual API endpoint
      const response = await fetch('http://localhost:8080/owner/getowner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(ownerForm)
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        // Store received data in local storage
        localStorage.setItem('owner', JSON.stringify(data));

        // Reset form after successful submission
        setOwnerForm({ email: "", password: "" });

        console.log("Login Successful!");
        navigate("/")

      } else {
        const errorResponse = await response.json();
        alert(errorResponse.error)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='w-100 d-flex justify-content-center'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={ownerForm.email}
            onChange={handleInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={ownerForm.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Login;
