import React, { Component } from "react";
import './../custom.scss';
import ResearchFormDataService from "../services/researchform.service";
import { Link } from "react-router-dom";

export default class ResearchFormsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveResearchForms = this.retrieveResearchForms.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveResearchForm = this.setActiveResearchForm.bind(this);
    this.removeAllResearchForms = this.removeAllResearchForms.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

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

  componentDidMount() {
    this.retrieveResearchForms();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveResearchForms() {
    ResearchFormDataService.getAll()
      .then(response => {
        this.setState({
          researchforms: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveResearchForms();
    this.setState({
      currentResearchForm: null,
      currentIndex: -1
    });
  }

  setActiveResearchForm(researchform, index) {
    this.setState({
      currentResearchForm: researchform,
      currentIndex: index
    });
  }

  removeAllResearchForms() {
    ResearchFormDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchTitle() {
    this.setState({
      currentResearchForm: null,
      currentIndex: -1
    });

    ResearchFormDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          researchforms: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePublished() {
    ResearchFormDataService.get(this.props.router.params.id)
      .then(response => {
        this.setState(prevState => ({
          currentResearchForm: {
            ...prevState.currentResearchForm,
            published: true
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, researchforms, currentResearchForm, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Forms List</h4>

          <ul className="list-group">
            {researchforms &&
              researchforms.map((researchform, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveResearchForm(researchform, index)}
                  key={index}
                >
                  {researchform.title}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllResearchForms}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentResearchForm ? (
            <div>
              <h4>Form </h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentResearchForm.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentResearchForm.description}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentResearchForm.published ? "Published" : "Pending"}
              </div>

              <Link
                to={"/researchforms/" + currentResearchForm._id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a form...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
