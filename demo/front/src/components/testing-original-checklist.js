import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './../custom.scss';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import DropdownButton from 'react-bootstrap/DropdownButton';
import React, { useState } from "react";
import { withRouter } from '../common/with-router.js';
import ResearchFormDataService from "../services/researchform.service";
import { useParams } from 'react-router-dom';

function AddForm() {
  
    const { id } = useParams();
    console.log(id);

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

          {
                ResearchFormDataService.get(id)
                .then(response => {
                  this.setState({
                    currentResearchForm: response.data
                  });
                  for (let i = 0; i < response.data.sectionNames.length; i++) {
                    console.log("Title: "+ response.data.sectionNames[i].sections[0]);
                    for (let j = 0; j < response.data.checklistFields.length; j++) { 
                      if (response.data.checklistFields[j].section[0] === response.data.sectionNames[i].sections[0]) {
                        console.log(j+1 + ". " + response.data.checklistFields[j].statements[0]);
            
                      }
                    }
                  }
            
                })
                .catch(e => {
                  console.log(e);
                })
          }
          
        <Row>
          <Button class="btn btn-outline-secondary" onClick={submit}>Add More Questions</Button>

          <br />
          <Button class="btn btn-outline-secondary" onClick={submit}>Submit</Button>
        </Row>
        </div>
    );
  }

export default withRouter(AddForm);