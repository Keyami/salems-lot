import React, { Component, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormInformation from "./FormInformation.js";
//import Form from "react-validation/build/form";
//import Input from "react-validation/build/input";
//import CheckButton, { button } from "react-validation/build/button";

//import AuthService from "../services/auth.service";

import { withRouter } from '../common/with-router.js';
//import UserService from "../services/user.service";
/*
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
*/
function SheetName(){
    const [name, setName] =useState("");
    return(
        <div>
            <input  class="form-control w-25"
                    input="text"
                    name='formName'
                    placeholder='Form Name'
                    onChange={(event)=>{setName(event.target.value)}}
                    />
        <br/>
        </div>
    );
}
function CheckBox(){
    //Nothing for now but can add for later
}
function AddForm() {
    const [formFields, setFormFields] = useState([
      { question: '', answer: '' },
    ])
  
    const handleFormChange = (event, index) => {
      let data = [...formFields];
      data[index][event.target.name] = event.target.value;
      setFormFields(data);
    }
  
    const submit = (e) => {
      e.preventDefault();
      console.log(formFields)
    }
  
    const addFields = () => {
      let object = {
        question: '',
        answer: ''
      }
  
      setFormFields([...formFields, object])
    }
  
    const removeFields = (index) => {
      let data = [...formFields];
      data.splice(index, 1)
      setFormFields(data)
    }
  
    return (
      <div>
      <Row className="align-items-center">
      <Form className='w-75' onSubmit={submit}>
          {formFields.map((form, index) => {
            return (
              <div class="col-xs-4">
                <div class="input-group">
                  <div class="input-group-prepend-sm">
                    <span class="input-group-text">{index+1}</span>
                  </div>
                    <input type="text" class="form-control w-25" name='question' aria-label="Question" onChange={event => handleFormChange(event, index)} value={form.question}/>
                    <div class="input-group-append">
                      <button type="button" class="btn btn-outline-warning" onClick={() => removeFields(index)}>Remove</button>
                      <DropdownButton class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" title="Expected Input">
                        <Dropdown.Item>None</Dropdown.Item>
                        <Dropdown.Item>Checkbox</Dropdown.Item>
                        <Dropdown.Item>Short answer</Dropdown.Item>
                        <Dropdown.Item>Scale</Dropdown.Item>
                      </DropdownButton>
                    </div>
                    <br/>
                </div>
              </div>
              )
          })}
        </Form>
      </Row>

        <Row>
          <Button class="btn btn-outline-secondary" onClick={addFields}>Add More Questions</Button>
          <br />
          <Button class="btn btn-outline-secondary" onClick={submit}>Submit</Button>
        </Row>
        </div>
    );
  }
  
function Fullsheet(){
    return(
      <div>    
      <FormInformation/>

      <div className="Pre-Interview">
      <h1 className="fontColor">Pre Interview</h1>
      <SheetName/>   
      <AddForm/>
      </div>

      <div className="Post-interview">
      <h1 className="fontColor">Post Interview</h1>  
      <AddForm/>
      </div>
  </div>
    )
}



export default withRouter(Fullsheet);