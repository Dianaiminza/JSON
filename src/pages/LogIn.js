import React, { Component } from 'react';
import Navbar from '../component/Navbar';
import { Container } from 'reactstrap';
import { Form, Alert, FormGroup, Input, Label, Row, Col } from "reactstrap";
import {Button} from 'react-bootstrap';
import AuthenticationService from '../config/AunthenticationService';
import avatar from '../image/avatar.png';

import{Link} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }
  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }

  doLogin = async (event) => {
    event.preventDefault();

    AuthenticationService
        .signin(this.state.email, 
                  this.state.password)
      .then(
        () => {

          this.props.isLogin({isLog:true})
          // console.log(response)
          this.props.history.push('/home');
          
        })
        .catch(error => {
          console.log("Login fail: error = { " + error.toString() + " }");
          this.setState({error: "Can not signin successfully ! Please check email/password again"});
        })
  }
  render() {
    return ( 
      <div>
         <Navbar/>
        <Container fluid>
          <Row style={{marginTop:"20px"}}>
          <Col sm="12" md={{ size: 3, offset: 4 }}>
            <div style={{marginBottom: "10px"}}>
              <img src={avatar} alt="Avatar" className="avatar center" 
                style={{width: "50%", height: "auto"}}/>
            </div>
            <Form  onSubmit={this.doLogin}>
              <FormGroup>
                <Label for="email"><strong>Email</strong></Label>
                <Input autoFocus 
                  type="text"
                  name="email" id="email"
                  value={this.state.email}
                  placeholder="Enter Email"
                  autoComplete="email"
                  onChange={this.changeHandler}
                />
              </FormGroup>

              <FormGroup>
                <Label for="password"><strong>Password</strong></Label>
                <Input type="password" 
                  name="password" id="password"
                  value={this.state.password}
                  placeholder="Enter Password"
                  autoComplete="password"
                  onChange={this.changeHandler}
                />
              </FormGroup>
              <Button type="submit" variant="primary" size="lg" block><Link to={"/home"} onClick={this.login}className="nav-link">
              </Link>
                LogIn
              </Button>
              {/* <Button  variant="primary" size="lg" block>
              <Link to={"/signup"} onClick={this.signOut}className="nav-link">
                LogOut
              </Link>
              <Link to={"/cats"} onClick={this.login}className="nav-link">
            </Button> */}
              {
                this.state.error && (
                  <Alert color="danger">
                    {this.state.error}
                  </Alert>
                )
              }
            </Form>
            </Col>
          </Row>
        </Container>
      </div>);
  }
}
export default Login;