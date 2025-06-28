import React, { useState } from 'react';
import { message } from 'antd';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser ] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: ''
  });

  const handleChange = (e) => {
    setUser ({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8001/api/user/register", user);
      if (res.data.success) {
        message.success('Registration successful');
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error('Something went wrong');
    }
  };

  return (
    <div className="body"> {/* Added body class for styling from HTML */}
      <div className="wrapper">
        <div className="title">
          Register Form
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="field">
            <input
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              required
            />
            <label>Full Name</label>
          </div>
          <div className="field">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>
          <div className="field">
            <input
              type="tel"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              required
            />
            <label>Phone</label>
          </div>
          <div className="field">
            <Button type="submit" className="register-button"> {/* Added register-button class for specific styling */}
              Register
            </Button>
          </div>
          <div className="signup-link">
            Already Registered? <Link to="/login">Login now</Link><br /><br />
            <Link to="/">Home</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
