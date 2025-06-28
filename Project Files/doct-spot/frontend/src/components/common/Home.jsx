import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import p3 from '../../images/p3.webp';

const Home = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            <Link to={'/'}>MediCareBook</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Link to={'/'}>Home</Link>
              <Link to={'/login'}>Login</Link>
              <Link to={'/register'}>Register</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <div className='home-container'>
        <div className="left-side">
          <img alt="loading..." src={doct1.jpg} />
        </div>
        <div className="right-side">
          <p>
            <span className='f-letter'>Effortlessly schedule your doctor</span><br />
            <span className='s-letter'>appointments with just a few clicks,</span> <br />
            <span className='t-letter'>putting your health in your hands.</span><br />
            <Button color='info' className='mt-3 register'><Link to={'/Login'}>Book Doctor Appointment</Link></Button>
          </p>
        </div>
      </div>

      {/* About Us Section */}
      <Container>
        <h1 className='text-center mb-4'>About Us</h1>
        <div className="right-side">
          <p>
            Booking a doctor appointment has never been easier. With our convenient online platform, you can quickly and effortlessly schedule your appointments from the comfort of your own home. No more waiting on hold or playing phone tag with busy receptionists.
            Our user-friendly interface allows you to browse through a wide range of doctors and healthcare providers, making it simple to find the perfect match for your needs. Whether you require a routine check-up, specialist consultation, or urgent care, we have a diverse network of medical professionals ready to serve you.
            {/* Additional content about the service */}
          </p>
        </div>
      </Container>
    </>
  );
}

export default Home;
