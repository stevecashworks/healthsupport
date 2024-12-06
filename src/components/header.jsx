import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./Header.css"; // Custom CSS for styling
import styled from "styled-components"
import {FaPhoneAlt } from "react-icons/fa"
import { MdEmail } from "react-icons/md";
import { BiLogoFacebook, BiLogoTwitter,BiLogoInstagramAlt,BiLogoDribbble } from "react-icons/bi";
const HeaderTopCon=styled.div`
height:40px;
width:85vw;
display:flex;
margin:0 auto;
justify-content:space-between;

align-items:center;
`
const SocialIcons=styled.div`
display:flex;
gap:10px;
color:rgb(0,0,0,0.4);
font-size:20px;
`
const ContactDetailsCon=styled.span`
height:20px;
align-items:center;
`
const Highlight=styled.span`
 color: #1abc9c; /* Teal highlight */
  font-weight: bold;
`
const Header = () => {
  return (
    <div>
    <HeaderTopCon>
      <ContactDetailsCon>
        <span>

        <Highlight>

      <FaPhoneAlt />
        </Highlight>
       <span style={{fontWeight:600, color:"rgb(0,0,0,0.4)"}}> +00 11 22 55 6666</span>
        </span>
<span style={{marginRight:"10px", marginLeft:"10px"}}>⏐</span>
        <span>

<Highlight>

<MdEmail />

</Highlight>
<span style={{fontWeight:600, color:"rgb(0,0,0,0.4)"}}> mail@example.com</span>
</span>


      </ContactDetailsCon>
      <SocialIcons>
      <BiLogoFacebook/>
      <BiLogoTwitter/>
      <BiLogoInstagramAlt/>
      <BiLogoDribbble/>
      </SocialIcons>

    </HeaderTopCon>
   
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">HealthSupport</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            {/* Services Dropdown */}
            <NavDropdown title="Services" id="services-dropdown" menuVariant="dark">
              <NavDropdown.Item href="#medical-support">Medical Support</NavDropdown.Item>
              <NavDropdown.Item href="#investment-plans">Investment Plans</NavDropdown.Item>
              <NavDropdown.Item href="#travel-expenses">Travel Expenses</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#more-services">More Services</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
};

export default Header;
