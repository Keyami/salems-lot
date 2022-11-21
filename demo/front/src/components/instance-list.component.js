import React, { Component } from "react";
import './../custom.scss';
import ResearchFormDataService from "../services/researchform.service";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";


export default class InstanceList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveInstanceList = this.retrieveInstanceList.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveResearchForm = this.setActiveResearchForm.bind(this);
    this.removeAllInstanceList = this.removeAllInstanceList.bind(this);
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

  exportFile(test) {
    var blob = new Blob([test], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "testfile1.txt");
  }

  componentDidMount() {
    this.retrieveInstanceList();
  }

  onChangeSearchTitle(e) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveInstanceList() {
    ResearchFormDataService.getAll()
      .then(response => {
        this.setState({
          InstanceList: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveInstanceList();
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

  removeAllInstanceList() {
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
          InstanceList: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, InstanceList, currentResearchForm, currentIndex } = this.state;

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
          <h4>Submission List</h4>

          <ul className="list-group">
            {InstanceList &&
              InstanceList.map((researchform, index) => (
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
            onClick={this.removeAllInstanceList}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentResearchForm ? (
            <div>
              <h4>Instance </h4>
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
              <Link
                to={"/instancelist/" + currentResearchForm._id}
                className="badge badge-success"
              >
                Create instance
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a submission...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
