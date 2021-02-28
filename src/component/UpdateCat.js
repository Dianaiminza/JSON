import React, { Component } from "react";
import { Row, Form, Col, Button,FormGroup,Label,Input } from 'reactstrap';
import { Link } from "react-router-dom";
import BackendService from '../config/BackendService';
const BaseapiUrl = 'http://localhost:8000/cats/';
class UpdateCat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            action: '',   
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })

    }
    componentDidMount() {
        var catid = this.props.match.params.id;
       this.GetCatById(catid);
      //  console.log(this.props.match.params.id)
        // console.log("hello")
    }
    GetCatById(catid) {
        const apiUrl = BaseapiUrl + "/"+catid;
        fetch(apiUrl)
        // BackendService.GetCatById(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                   // debugger;
                    if (result) {
                        this.setState({
                            name: result.name,
                            action:result.action
                        });
                    }
                    else {
                        alert("cat record not found!")
                    }
                },
                (error) => {
                    this.setState({ IsApiError: true });
                }
            )
    }

    SubmitCat = (event) => {
      event.preventDefault()
        //debugger;
        if (this.state.name === "" || this.state.name === undefined) {
            alert("cat Name is required");
        } else if (this.state.action ==="" || this.state.action === undefined) {
            alert("action is required");
        } 
        let body = {
            name: this.state.name,
            action: this.state.action
        };

        const requestOptions = {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(body),
        };

        let baseurl = BaseapiUrl + "/"+this.props.match.params.id;
        fetch(baseurl, requestOptions)
            .then((res) => {
                return res.json();
            })
            .then((results) => {
                if (results) {
                    alert("Updated successfully!");
                }
            })
            .catch((e) => {
                alert(e);
            });
    }
    
    render() {
        return (
          
            <div>
                <h1>Edit Cat</h1>
                <Link variant="primary" to="/cats">View Cat list</Link>
                <Row>
                    <Col sm={6}>
                         <Form onSubmit={this.SubmitCat}>
                         <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/>
      </FormGroup>
      <FormGroup>
        <Label for="action">Action</Label>
        <Input type="text" name="action" id="action" placeholder="action" value={this.state.action} onChange={this.handleChange}/>
      </FormGroup>
      
                            
                            
                            
                          <FormGroup>
                                <Button variant="success" type="submit">Save</Button>
                            </FormGroup>
                        </Form> 
                    </Col>
                </Row>
            </div>
        )

    }
}
export default UpdateCat;