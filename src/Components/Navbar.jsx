import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import React  from 'react';

function FillExample() {
  return (
    

<div>  <Nav  fill variant="light" bg="light" defaultActiveKey="/home" >
      <Nav.Item>
        <NavLink to="/home" className={"text-decoration-none mt-2 h2"}>Home</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink  to="/Students" className={"text-decoration-none mt-2  h2"}>Students</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink  to="/ContactUs" className={"text-decoration-none mt-2 h2"}>ContactUs</NavLink>
      </Nav.Item>
    </Nav></div>

  
   
   
  );
}

export default FillExample;