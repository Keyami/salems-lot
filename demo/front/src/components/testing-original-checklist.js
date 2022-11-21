import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './../custom.scss';
import Row from 'react-bootstrap/Row';
import React, { useState } from "react";
import { withRouter } from '../common/with-router.js';

function AddForm() {

    const [formFields, setFormFields] = useState([
      { question: '', answer: '' },
    ])
  
    const handleFormChange = (event, index) => {
      let data = [...formFields];
      data[index][event.target.name] = event.target.value;
      setFormFields(data);
    }
  
    const addFields = (test) => {
      let object = {
        question: test,
        answer: ''
      }
  
      setFormFields([...formFields, object])
    }

    return (
      <div>
      <Row className="align-items-center">
      <Form className='w-75'>
          {formFields.map((form, index) => {
            return (
              <div class="col-xs-4">
                <div class="input-group">
                  <div class="input-group-prepend-sm">
                    <span class="input-group-text">{index+1}</span>
                  </div>
                    <input type="text" class="form-control w-25" name='question' aria-label="Question" onChange={event => handleFormChange(event, index)} value={form.question}/>
                </div>
              </div>
              )
          })}
        </Form>
      </Row>
          
        <Row>
          <Button class="btn btn-outline-secondary" onClick={ addFields("fuck") }>Add More Questions</Button>
        </Row>
        </div>
    );
  }

export default withRouter(AddForm);