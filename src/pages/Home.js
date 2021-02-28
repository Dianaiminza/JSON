import React, { Component } from 'react';
import AppNavbar from '../component/AppNavbar';
import Image from '../component/Image';
import { Link,Switch,Route } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import { Alert } from "react-bootstrap"
import CatsList from '../component/CatsList';
import UpdateCat from '../component/UpdateCat';

class Home extends Component {


  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div style={{marginTop:"20px"}}>
            <Alert variant="primary">
              <h2>Data Application</h2>
              <Button color="success"><Link to="/cats">View</Link></Button>
            </Alert>
            <Image/>
          </div>
         
        </Container>
      </div>
    );
  }
}

export default Home;
