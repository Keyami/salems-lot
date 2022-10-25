import React, { Component, useState } from "react";
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
            <input
                    input="text"
                    name='formName'
                    placeholder='Form Name'
                    onChange={(event)=>{setName(event.target.value)}}
                    />
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
        <form onSubmit={submit}>
          {formFields.map((form, index) => {
            return (
              <div key={index}>
                <label className="fontColor">{index+1}</label>
                <input
                  input="text"
                  name='question'
                  placeholder='Question'
                  onChange={event => handleFormChange(event, index)}
                  value={form.question}
                />
                <select name='answer' onChange={event => handleFormChange(event, index)}>
                    <option>None</option>
                    <option>Checkbox</option>
                    <option>Short Answer</option>
                    <option>Scale</option>
                </select>
                <button onClick={() => removeFields(index)}>Remove</button>
              </div>
            )
          })}
        </form>
        <button onClick={addFields}>Add More Questions</button>
        <br />
        <button onClick={submit}>Submit</button>
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
      <SheetName/>   
      <AddForm/>
      </div>
  </div>
    )
}



export default withRouter(Fullsheet);