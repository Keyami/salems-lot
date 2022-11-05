import React, { Component } from "react";
import ResearchFormDataService from "../services/researchform.service";
import { withRouter } from '../common/with-router';

class ResearchForm extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getTutorial = this.getTutorial.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentResearchForm: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      message: ""
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
        this.props.router.navigate('/researchforms');
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
            <h4>Research Form</h4>
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
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentResearchForm.description}
                  onChange={this.onChangeDescription}
                />
              </div>

            <div className="form-group">
                <label>
                    <strong>Status:</strong>
                </label>
                {currentResearchForm.published ? "Published" : "Pending"}
            </div>
        </form>
        {currentResearchForm.published ? (
            <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
            > UnPublish </button>
        ) : (
            <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
            >
                Publish
            </button>
        )}
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