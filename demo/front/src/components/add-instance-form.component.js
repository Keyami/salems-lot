import React, { Component } from "react";
import './../custom.scss';
import { saveAs } from "file-saver";
import ResearchFormDataService from "../services/researchform.service";

export default class AddResearchForm extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveResearchForm = this.saveResearchForm.bind(this);
        this.newResearchForm = this.newResearchForm.bind(this);

        this.state = {
            id: null,
            title: "",
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
        saveAs(blob, "ope.txt");
      }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    saveResearchForm() {
        var data = {
            title: this.state.title,
            description: this.state.description
        };

        ResearchFormDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    title: response.data.title,
                    description: response.data.description,
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
            description: "",
            published: false,

            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newResearchForm}>
                            Add
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                name="title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                required
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                name="description"
                            />
                        </div>

                        <button onClick={() => this.exportFile("tets")} className="btn btn-success">
                            Submit
                        </button>

                    </div>
                )}
            </div>
        );
    }
}
