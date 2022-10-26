import React, { useState, useEffect } from "react";
import ResearchFormDataService from "../services/researchform.service";
import { Link } from "react-router-dom";

const ResearchFormsList = () => {
  const [researchforms, setResearchForm] = useState([]);
  const [currentResearchForm, setCurrentResearchForm] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveResearchForms();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveResearchForms= () => {
    ResearchFormDataService.getAll()
      .then(response => {
        setResearchForm(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveResearchForms();
    setCurrentResearchForm(null);
    setCurrentIndex(-1);
  };

  const setActiveResearchForm = (researchform, index) => {
    setCurrentResearchForm(researchform);
    setCurrentIndex(index);
  };

  const removeAllResearchForms = () => {
    ResearchFormDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    ResearchFormDataService.findByTitle(searchTitle)
      .then(response => {
        setResearchForm(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={findByTitle}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>All Checklists</h4>

        <ul className="list-group">
          {researchforms &&
            researchforms.map((researchform, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveResearchForm(researchform, index)}
                key={index}
              >
                {researchform.title}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllResearchForms}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentResearchForm ? (
          <div>
            <h4>Checklist</h4>
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
              to={"/researchforms/" + currentResearchForm.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Checklist...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResearchFormsList;