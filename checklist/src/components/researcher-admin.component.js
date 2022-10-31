import React, { Component } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default class ResearchAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          {/* <h3>{this.state.content}</h3> */}
        </header>
        <Container >
          <Row >
            <Col className="" style={{color: "white", fontSize: 30}}>Users</Col>
            <Col className="" style={{color: "white", fontSize: 30}}>Roles</Col>
          </Row>
          <Row className="align-items-center" >
            <Col>
            <Card>
              <Card.Body>User 1</Card.Body>
            </Card>
            </Col>
            <Col>
            <DropdownButton id="dropdown-basic-button" title="Select Role">
            <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Mod</Dropdown.Item>
            <Dropdown.Item href="#/action-3">User</Dropdown.Item>
          </DropdownButton>
            </Col>
          </Row>
          <Row className="align-items-center"> 
            <Col>
            <Card>
              <Card.Body>User 2</Card.Body>
            </Card>
            </Col>
            <Col>
            <DropdownButton id="dropdown-basic-button" title="Select Role">
            <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Mod</Dropdown.Item>
            <Dropdown.Item href="#/action-3">User</Dropdown.Item>
          </DropdownButton>
            </Col>
          </Row>
          <Row className="align-items-center"> 
            <Col>
            <Card>
              <Card.Body>User 3</Card.Body>
            </Card>
            </Col>
            <Col>
            <DropdownButton id="dropdown-basic-button" title="Select Role">
            <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Mod</Dropdown.Item>
            <Dropdown.Item href="#/action-3">User</Dropdown.Item>
          </DropdownButton>
            </Col>
          </Row>
        </Container>
        <Button style={{background:"gold", color:"black", borderColor:"black"}} >Save</Button>

      </div>
    );
  }
}