import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ResearchFormDataService from "../services/ResearchFormService";

const ResearchForm = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialResearchFormState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentResearchForm, setCurrentResearchForm] = useState(initialResearchFormState);
  const [message, setMessage] = useState("");

  const getResearchForm= id => {
    ResearchFormDataService.get(id)
      .then(response => {
        setCurrentResearchForm(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      ResearchForm(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentResearchForm({ ...currentResearchForm, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentResearchForm.id,
      title: currentResearchForm.title,
      description: currentResearchForm.description,
      published: status
    };

    ResearchFormDataService.update(currentResearchForm.id, data)
      .then(response => {
        setCurrentResearchForm({ ...currentResearchForm, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateResearchForm = () => {
    ResearchFormDataService.update(currentResearchForm.id, currentResearchForm)
      .then(response => {
        console.log(response.data);
        setMessage("The checklist was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteResearchForm= () => {
    ResearchFormDataService.remove(currentResearchForm.id)
      .then(response => {
        console.log(response.data);
        navigate("/researchforms");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentResearchForm ? (
        <div className="edit-form">
          <h4>Research Checklist</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentResearchForm.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentResearchForm.description}
                onChange={handleInputChange}
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
              onClick={() => updatePublished(false)}
            >
              UnPublish
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updatePublished(true)}
            >
              Publish
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteResearchForm}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateResearchForm}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a C...</p>
        </div>
      )}
    </div>
  );
};

export default ResearchForm;