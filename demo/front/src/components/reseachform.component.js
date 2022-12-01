import React, { Component } from "react";
import './../custom.scss';
import ResearchFormDataService from "../services/researchform.service";
import { withRouter } from '../common/with-router';

class ResearchForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getResearchForm = this.getResearchForm.bind(this);
    this.updateResearchForm = this.updateResearchForm.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.deleteResearchForm = this.deleteResearchForm.bind(this);

    this.state = {
      id: null,
      title: "",
      sectionNames: [],
      checklistFields: [{statements: [], section: []}],
      postSession: [], 
      published: false,
    };
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
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished(value) {
    ResearchFormDataService.update(
      this.props.router.params.id,
      this.state.currentResearchForm
    ).then(
    this.setState(prevState => ({
      currentResearchForm: {                   
          ...prevState.currentResearchForm,    
          published: value     
      }
    })));
    this.updateResearchForm();
   }

  updateResearchForm() {
    ResearchFormDataService.update(
      this.props.router.params.id,
      this.state.currentResearchForm
    )
  }

  deleteResearchForm() {    
    ResearchFormDataService.delete(this.props.router.params.id)
      .then(response => {
        console.log(response.data);
        this.props.router.navigate('/');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentResearchForm} = this.state;

    return (
      <div>
        {currentResearchForm ? (
          <div className="edit-form">
            <h4>Session Questionnaire</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentResearchForm.title}
                  onChange={this.onChangeTitle}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status: </strong>
                  
                </label>
                {currentResearchForm.published ? " Published" : " Pending"}
              </div>
            </form>

            {currentResearchForm.published ?
              <button
                type="submit"
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                Unpublish
              </button>
              :
              <button
                type="submit"
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteResearchForm}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateResearchForm}
            >
              Update
            </button>
            <p>{this.state.message}</p>
            <p>Click update after changing published status.</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Form...</p>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(ResearchForm);