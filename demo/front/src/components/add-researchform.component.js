import React, { Component } from "react";
import './../custom.scss';
import Button from "react-bootstrap/Button";
import ResearchFormDataService from "../services/researchform.service";

export default class AddResearchForm extends Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSectionNameChange = this.handleSectionNameChange.bind(this);
    this.saveResearchForm = this.saveResearchForm.bind(this);
    /*this.newResearchForm = this.newResearchForm.bind(this);*/

    this.state = {
      id: null,
      title: "",
      sectionNames: [{sections: []}],
      checklistFields: [{statements: [], section: []}],
      postSession: [{question: []}], 
      published: false,
      
      submitted: false
    };
  }

  handleNameChange = evt => {
    this.setState({title: evt.target.value})
  }
  
  handleSectionNameChange= idx => evt => {
    const newSectionNames = this.state.sectionNames.map((sectionName, sidx) => {
      if (idx !== sidx) return sectionName;
      return { ...sectionName, sections: evt.target.value };
    });
  
  this.setState({ sectionNames: newSectionNames });
  };
  
  handleStatementChange = idx => evt => {
    const newStatement = this.state.checklistFields.map((checklistFields, sidx) => {
      if(idx !== sidx) return checklistFields;
      return {...checklistFields, statements: evt.target.value}
    })
    this.setState({checklistFields: newStatement})
  };
handleSectChange = idx => evt => {
  const newSection = this.state.checklistFields.map((checklistFields, sidx) => {
    if (idx !== sidx)return checklistFields
    return {...checklistFields, section:evt.target.value}
  })
  this.setState({checklistFields: newSection})
}

handleRemoveChecklistFields = idx => () => {
  this.setState({
    checklistFields:  this.state.checklistFields.filter((s, sidx) => idx !== sidx)
  })
}

handleAddChecklistFields = () => {
  this.setState({
    checklistFields: this.state.checklistFields.concat({statements: [] ,section: []})
  })
}

handlePostSessionChange = idx => evt => {
  const newPS = this.state.postSession.map((postSession, sidx) => {
    if (idx !== sidx)return postSession
    return {...postSession, question:evt.target.value}
  })
  this.setState({postSession: newPS})
}

handleAddPostSession = () => {
  this.setState({
    postSession: this.state.postSession.concat({question: []})
  })
}

handleRemovePostSession = idx => () => {
  this.setState({
    postSession:  this.state.postSession.filter((s, sidx) => idx !== sidx)
  })
}

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveResearchForm() {
    
    
    var data = {
      title: this.state.title,
      sectionNames: this.state.sectionNames,
      checklistFields: this.state.checklistFields,
      postSession: this.state.postSession
    };
    console.log(this.state.sectionNames)
    ResearchFormDataService.create(data)
      .then(response => {
        console.log(response.data)
        this.setState({
          id: response.data.id,
          title: response.data.title,
          sectionNames: response.data.sectionNames,
          checklistFields: response.data.checklistFields,
          postSession: response.data.postSession,
          published: response.data.published,
          instance: response.data.instance,
          answers: response.data.answers,
          questions: response.data.questions,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newResearchForm() {
    this.setState({
      id: null,
      title: "",
      sectionNames: [{sections: []}],
      published: false,

      submitted: false
    });
  }
//////////////////////SECTION NAMES//////////////////////////
  handleAddSectionNames = () => {
    this.setState({
      sectionNames: this.state.sectionNames.concat({sections: []})
    })
  }

  handleRemoveSectionNames = idx => () => {
    this.setState({
      sectionNames:  this.state.sectionNames.filter((s, sidx) => idx !== sidx)
    })
  }
/////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <Button className="btn btn-success" onClick={this.newResearchForm}>
              Add
            </Button>
          </div>
        ) : (
          <div>
            <div >
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                placeholder="Form Name"
                value={this.state.title}
                onChange={this.handleNameChange}
                name="title"
              />
            </div>
            <label htmlFor="sectionNames">Checklist Sections:</label>
            {this.state.sectionNames.map((sectionName, idx) => (
            <div className="form-group">
              {console.log(this.state)}
              <input
                type="text"
                className="form-control"
                placeholder={`Section #${idx +1}`}
                value={sectionName.sections}
                onChange={this.handleSectionNameChange(idx)}
              />
              <Button
              type="Button"
              
              onClick={this.handleRemoveSectionNames(idx)}>X</Button>
            </div>
            ))}
            <Button
            type="Button"
            onClick={this.handleAddSectionNames}
            >Add a Section</Button>
            <div>
            <label htmlFor="checklistFields">Checklist Statements:</label>
            {this.state.checklistFields.map((checklistField, idx) => (
            <div className="form-group">
              {console.log(this.state)}
              <input
                type="text"
                className="form-control"
                placeholder={`Statement #${idx +1}`}
                value={checklistField.statements}
                onChange={this.handleStatementChange(idx)}
              />
              <input
                type="text"
                className="form-control"
                placeholder={`Under which section?`}
                value={checklistField.section}
                onChange={this.handleSectChange(idx)}
              />
              <Button
              type="Button"
              onClick={this.handleRemoveChecklistFields(idx)}>X</Button>
            </div>
            ))}
            <Button
            type="Button"
            onClick={this.handleAddChecklistFields}
            >Add a Statement</Button>
            
            
            </div>
            <label htmlFor="postSession">Post-Session Review Questions:</label>
            {this.state.postSession.map((postSession, idx) => (
            <div className="form-group">
              {console.log(this.state)}
              <input
                type="text"
                className="form-control"
                placeholder={`Question #${idx +1}`}
                value={postSession.question}
                onChange={this.handlePostSessionChange(idx)}
              />
              <Button
              type="Button"
              onClick={this.handleRemovePostSession(idx)} className="btn btn-primary">X</Button>
            </div>
            ))}
            <Button
            type="Button"
            onClick={this.handleAddPostSession}
            >Add a Question</Button>
            &nbsp;&nbsp;
            <Button onClick={this.saveResearchForm} className="btn btn-success me-1">
              Submit
            </Button>
          </div>
        )}
      </div>
    );
  }
}
