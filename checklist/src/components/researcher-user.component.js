import React, { Component } from "react";

import UserService from "../services/user.service";
import FormInformation from "./FormInformation.js";
import GenerateForm from "./generate-form.component.js";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default class ResearchUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getUserBoard().then(
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
      }
    );
  }

  render() {
    return (
      // example structure
      // current plan is to add helper function that pulls from DB and adds in as a for/while loop.
      <div className="container">
        <FormInformation/>
        <DropdownButton id="dropdown-basic-button" title="Select Form Type">
        <Dropdown.Item href="#/action-1">(Insert function to pull form names lol)</Dropdown.Item>
        <Dropdown.Item href="#/action-2">(Insert function to pull form names lol)</Dropdown.Item>
        <Dropdown.Item href="#/action-3">(Insert function to pull form names lol)</Dropdown.Item>
        </DropdownButton>
      
      <GenerateForm name="1" />        
      </div>
    );
  }
}