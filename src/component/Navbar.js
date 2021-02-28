import React, { Component } from 'react';
import { Collapse, Nav, Navbar,NavbarToggler,NavItem, NavLink } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import AuthenticationService from '../config/AunthenticationService';
import image from '../image/image.png';
class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
    this.state = {
      showUser: false,
      name: undefined,
      email:undefined,
      login: false
    };
  }
  signOut = () => {
    AuthenticationService.signOut();
    this.props.history.push('/login');
    window.location.reload();
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return <Navbar color="dark" dark expand="md">
    <div style={{marginBottom: "10px"}}>
              <img src={image} alt="little"  
                style={{width: "50%", height: "auto"}}/>
            </div>
      {/* <NavbarBrand tag={Link} to="/home">
      </NavbarBrand>
      <Nav className="mr-auto">
        <NavLink  href ="/">Home</NavLink> 
      </Nav> */}
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        {
          this.state.login ? (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/home" onClick={this.signOut}>SignOut</NavLink>
              </NavItem>
            </Nav>                 
          ) : (
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">SignUp</NavLink>
              </NavItem>
              
            </Nav>
          )
        }
      </Collapse>
    </Navbar>;

  }
}

export default withRouter(AppNavbar);