import React, { useState } from 'react'  

import axios from 'axios';  

import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, Row } from 'reactstrap';  

function Createcat(props) {  

  const [cat, setcat] = useState({ name: '', action: '' });  

  //const [showLoading, setShowLoading] = useState(false);  

  const apiUrl = "http://localhost:8000/cats";  

  
  const Insertcat = (e) => {  
    e.preventDefault();  

    debugger;  
    const data = { name:cat.name, action: cat.action };  

    axios.post(apiUrl, data)  

      .then((result) => {  

        props.history.push('/cats')  

      });  

  };  

  const onChange = (e) => {  

    e.persist();  


    // debugger;  

    setcat({...cat, [e.target.name]: e.target.value});


  }
  return (  

    <div className="app flex-row align-items-center">  
      <Container>  

        <Row className="justify-content-center">  

          <Col md="12" lg="10" xl="8">  

            <Card className="mx-4">  

              <CardBody className="p-4">  

                <Form onSubmit={Insertcat}>  

                  <h1>Insert</h1>  

                  <InputGroup className="mb-3">  
                    <Input type="text" name="name" id="Name" placeholder="Name" value={cat.name} onChange={ onChange }  />  

                  </InputGroup>  

                   <InputGroup className="mb-3"> 

                    <Input type="text" placeholder="Action" name="action" id="action" value={cat.action} onChange={ onChange }/>  

                  </InputGroup>  
                     
             <CardFooter className="p-4">  

                <Row>  

                  <Col xs="12" sm="6">  

                    <Button type="submit" className="btn btn-info mb-1" block><span>Save</span></Button>  

                  </Col>  

                  <Col xs="12" sm="6">  

                    <Button className="btn btn-info mb-1" block><span>Cancel</span></Button>  

                  </Col>  

                </Row>  

              </CardFooter>  

                </Form>  

              </CardBody>  

            </Card>  

          </Col>  

        </Row>  

      </Container>  

    </div>  

  )  

}  

export default Createcat;


