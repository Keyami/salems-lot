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
    this.updateList = this.updateList.bind(this);
    this.listQuestions = this.listQuestions.bind(this);

    this.state = {
      id: null,
      title: "",
      //description: "",
      sectionNames: [{sections: []}],
      checklistFields: [{statements: [], section: []}],
      postSession: [{question: []}], 
      output: ["test"],
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
      })
      .catch(e => {
        console.log(e);
      });
  }blank

  updateList = (value) => {
    //const updateOutput = this.state.output.map(l => Object.assign([], l));
    //updateOutput[id] = value;
    this.setState({output: [...this.state.output, value]})
  }

  listQuestions(id) {
    ResearchFormDataService.get(id)
      .then(response => {
        this.setState({
          currentResearchForm: response.data
        });

        var holder;
        for (let i = 0; i < response.data.sectionNames.length; i++) {
          //this.setState({output: [...this.state.output, response.data.sectionNames[i].sections[0]]})
          this.setState(prevState => ({ output: [...this.state.output, response.data.sectionNames[i].sections[0]]}))
          //this.updateList(toString(holder));

          /*for (let j = 0; j < response.data.checklistFields.length; j++) { 
            if (response.data.checklistFields[j].section[0] === response.data.sectionNames[i].sections[0]) {
              var holder = response.data.checklistFields[j].statements[0];
              this.updateList(j, holder); 

            }
          }*/
        }

      })
      .catch(e => {
        console.log(e);
      });
      
      }
      
      
      /*onClick={() => this.listQuestions(this.props.router.params.id)} */

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

            {this.state.output.map((value, index) => 
              <div key={ index } className="form-group">
                      <label htmlFor="title">{value}</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        //value={currentResearchForm.title}
                        onChange={this.onChangeTitle}
                      />
                    </div>

                )
              }
      
              <button type="button" onClick={() => this.listQuestions(this.props.router.params.id)} className="btn btn-success">
                Submit
              </button>
              <button type="button" onClick={() => this.updateList("truck")} className="btn btn-success">
                Submit
              </button>

            </form>
        </div>
      </div>
    )
  }
}

export default withRouter(ResearchForm);