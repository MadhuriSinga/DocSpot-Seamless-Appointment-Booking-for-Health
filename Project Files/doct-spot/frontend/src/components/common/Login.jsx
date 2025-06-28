import React, { useState } from 'react';
import { message } from 'antd';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { MDBInput } from 'mdb-react-ui-kit'; // Keep MDBInput for consistency if needed, or replace with standard input

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8001/api/user/login", user);
      if (res.data.success) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userData', JSON.stringify(res.data.userData));
        message.success('Login successfully');
        const isLoggedIn = JSON.parse(localStorage.getItem("userData"));
        const { type } = isLoggedIn;

        switch (type) {
          case "admin":
            navigate("/adminHome");
            break;
          case "user":
            navigate("/userhome");
            break;
          default:
            navigate("/Login");
            break;
        }
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
          Login Form
        </div>
        <Form onSubmit={handleSubmit}>
          <div className="field">
            <MDBInput
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
            <label>Email Address</label>
          </div>
          <div className="field">
            <MDBInput
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
            <label>Password</label>
          </div>
          <div className="content">
            <div className="checkbox">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="pass-link">
              <a href="#">Forgot password?</a>
            </div>
          </div>
          <div className="field">
            <Button type="submit" className="login-button"> {/* Added login-button class for specific styling */}
              Login
            </Button>
          </div>
          <div className="signup-link">
            Not a member? <Link to="/register">Register now</Link><br /><br />
            <Link to="/">Home</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
