import React, { Component } from "react";
import './../custom.scss';
import ResearchFormDataService from "../services/researchform.service";
import { withRouter } from '../common/with-router';
import { saveAs } from "file-saver";

class ResearchForm extends Component {
  
  constructor(props) {

    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getResearchForm = this.getResearchForm.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateResearchForm = this.updateResearchForm.bind(this);
    this.deleteResearchForm = this.deleteResearchForm.bind(this);

    this.state = {
      id: null,
      title: "",
      //description: "",
      sectionNames: [{sections: []}],
      checklistFields: [{statements: [], section: []}],
      postSession: [{question: []}], 
      published: false,
      instance: true,
      
      submitted: false
    };
}

  exportFile(test) {
    var blob = new Blob([test], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "a1.txt");
  }

  componentDidMount() {
    this.getResearchForm(this.props.router.params.id);
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function(prevState) {
      return {
        currentResearchForm: {
          ...prevState.currentResearchForm,
          title: title
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentResearchForm: {
        ...prevState.currentResearchForm,
        description: description
      }
    }));
  }

  getResearchForm(id) {
    ResearchFormDataService.get(id)
      .then(response => {
        this.setState({
          currentResearchForm: response.data
        });
        console.log(response.data.sectionNames[0].sections[0]);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(status) {
    var data = {
      id: this.state.currentResearchForm.id,
      title: this.state.currentResearchForm.title,
      description: this.state.currentResearchForm.description,
      published: status
    };

    ResearchFormDataService.update(this.state.currentResearchForm.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentResearchForm: {
            ...prevState.currentResearchForm,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateResearchForm() {
    ResearchFormDataService.update(
      this.state.currentResearchForm.id,
      this.state.currentResearchForm
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The form was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deleteResearchForm() {    
    ResearchFormDataService.delete(this.state.currentResearchForm.id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/s');
      })
      .catch(e => {
        console.log(e);
      });
  }

  listQuestions(id) {
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
      });
      
      }

  render() {
    return (
      <div>
        <div className="edit-form">
            <h4>Session Questionnaire</h4>

            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  //value={currentResearchForm.title}
                  onChange={this.onChangeTitle}
                />
              </div>

              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  //value={currentResearchForm.description}
                  onChange={this.onChangeDescription}
                />
              </div>
      
              <button onClick={() => this.listQuestions(this.props.router.params.id)} className="btn btn-success">
                Submit
              </button>

            </form>
        </div>
      </div>
    )
  }
}

export default withRouter(ResearchForm);