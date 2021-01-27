import React, { Component ,useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation,
  MDBFooter,
  MDBIcon,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBDropdownMenu
} from 'mdbreact';
import './Navbar.css';
import Routes from '../routes/Routes'

const NavBar = () => {
    const [collapsed, setcollapsed] = useState(false)

  const  handleTogglerClick = () => {
      
      setcollapsed(!collapsed);  };
  
    
    return (
        <div>
                <div id='apppage'>
        <Router>
          <div>
            <MDBNavbar
              color='primary-color'
              dark
              expand='md'
              fixed='top'
              scrolling
              transparent
              style={{ marginTop: '0' }}
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className='white-text'>VSK</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={handleTogglerClick} />
                <MDBCollapse isOpen={collapsed} navbar>
                
                  
                  <MDBNavbarNav right>
                  <MDBNavItem>
             <MDBNavLink className="waves-effect waves-light" to="https://www.facebook.com/sivakrishna.vegi.offical/">
                <MDBIcon fab icon="facebook" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="https://twitter.com/sivakrishnavegi">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="https://github.com/sivakrishnavegi">
                <MDBIcon fab icon="github" />
              </MDBNavLink>
            </MDBNavItem>
          
          </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
           
          </div>
          <Routes />
        </Router>
   </div>
   <MDBFooter color="blue" className="font-small pt-4 mt-4">
     
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.sivakrishnavegi.netlify.com"> sivakrishnavegi.netlify.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
        </div>
    )
}

export default NavBar


