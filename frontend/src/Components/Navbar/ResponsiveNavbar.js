import React from 'react';
import { Navbar, Nav,  Form, FormControl, Button , NavDropdown} from 'react-bootstrap';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase'; 
import { useNavigate } from 'react-router-dom';


function ResponsiveNavbar(props) {
  const history=useNavigate();
  
    const handlelogout=()=>{
        signOut(auth).then(val=>{
            history('/Login');
        })
    }
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor:'#91d7d3'}}  className='p-3'>
      <Link className="nav-link" to="/">
      <img src="./favicon1.ico" alt="MedvalueDeal Logo" style={{ width: '61px', height: '30px', marginRight: '10px' }} />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link className="nav-link" to="/Home">Home</Link>
          <Link className="nav-link" to="/Medicine">Medicine</Link>
          <Link className="nav-link" to="/LabTest">LabTest</Link>
          <Link className="nav-link" to="/HealthCare">HealthCare</Link>
          <div className="med-rush-container">
            <Link className="nav-link med-rush-link" to="/MedRush">MedRush</Link>
            <span className="new-feature-tag">New Feature</span>
        </div>
        </Nav>
        <Form className="d-flex features">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <div className='Username' style={{ color: 'black', fontFamily: 'unset',fontSize: '18px', marginRight: '15px', marginLeft: '15px' }}>
        &nbsp; Welcome {props.name}
        </div>
        <Nav className="me-auto features">
      
          <Link className="nav-link" to="/More">More</Link>
          <Link className="nav-link" to="/Favourite">Favourite</Link>
          <Link className="nav-link" to="/Cart">Cart</Link>
          
          <NavDropdown title="Account" id="collasible-nav-dropdown">
          <Link className="nav-link" to="/Login">Login</Link>
          <Link className="nav-link" to="/Signup">Signup</Link>
        <NavDropdown.Divider />
          <Link className="nav-link" to="/Logout" onClick={handlelogout}>Logout</Link>
      </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default ResponsiveNavbar;