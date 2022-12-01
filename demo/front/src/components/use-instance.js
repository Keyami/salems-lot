/*
 *
 * Written by Gage Richardson
 * Honestly iffy on this working so if this ends up breaking I just added a bunch of comments <3 
 * 
 */


import { saveAs } from "file-saver";
import React, { Component } from "react";
import { withRouter } from '../common/with-router';
import ResearchFormDataService from "../services/researchform.service";
import './../custom.scss';

class ResearchForm extends Component {
  
  constructor(props) {

    super(props);
    this.getResearchForm = this.getResearchForm.bind(this);

    this.state = {
      id: null,
      title: "",
      sectionNames: [],
      checklistFields: [{statements: [], section: []}],
      postSession: [], 
      published: false,
      instance: true,
      
      submitted: false
    };
}

  /*
   * exportFile (var) 
   * 
   * Converts passed variable to blob type and uses npm file-saver to save the value as a .txt file
   *  
   */
  exportFile(test) {
    var blob = new Blob([test], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "a1.txt");
  }

  /*
   * componentDidMount 
   * 
   * I don't really know why, but when I delete this it crashes. So it stays <3
   *  
   */
  componentDidMount() {
    this.getResearchForm(this.props.router.params.id);
  }

  /*
   * getResearchForm (id) 
   * 
   * Uses ResearchFormDataService to pull a form from DB as an object.
   * Uses the form data to print the question list as well as create unique input groups for each question.
   *  
   */
  getResearchForm(id) {
    //pull info
    ResearchFormDataService.get(id)
      .then(response => {
        //assign directer variable for HTML input group of id='inputs' 
        var parent = document.getElementById('inputs');
        //count is to keep form ID consistency, it assigns each input form{id} so we can reference them later
        var count = 0;

        //iterate for # of sections in form
        for (let i = 0; i < response.data.sectionNames.length; i++) {
          //append the name of this section to the HTML --> nested is for the questions assigned to this section
          parent.innerHTML += `</br></br><h2>${response.data.sectionNames[i].sections}</h2>`;
          //iterate for # of questions provided
          for (let j = 0; j < response.data.checklistFields.length; j++) {
            //in our checklistFields array we have a value that tells us what section the question is apart of
            //this if statement simply checks if the question our iterator is on belongs to the parent section
            //in the above loop.
            if (response.data.checklistFields[j].section[0] === response.data.sectionNames[i].sections[0]) {
              //append the question text as well as an input field to answer this question
              parent.innerHTML += 
                //the {count} in this is simply assigning every input a unique id
                `</br><label>${response.data.checklistFields[j].statements[0]}</label> 
                </br> 
                <div className="form-group">
                <input type="text" 
                       class="form-control" 
                       name="form${count}"
                       id="form${count}" 
                       /></div>
                <br>`;
              //increment count
              count++;
            }
          }
        }

        //append post session question section title to HTML
        parent.innerHTML += `</br></br><h2>Post-session Questions</h2>`;
        //iterate over # of postsession questions
        //no sub values so we don't need to nest a loop
        for (let i = 0; i < response.data.postSession.length; i++) {
          //append the question text as well as an input field to answer this question
          parent.innerHTML += 
          //the {i} in this is simply assigning every input a unique id
          `</br><label>${response.data.postSession[i].question[0]}</label> 
          </br> 
          <div className="form-group">
          <input type="text" 
                 class="form-control" 
                 name="post${i}" 
                 id="post${i}" 
                 /></div>
          <br>`;
        }

      })
      //error handler
      .catch(e => {
        console.log(e);
      });
  }

  /*
   * finalOutput (id) 
   * 
   * This is essentially a duplicate of the above function.
   * Instead of appending to the HTML, this appends the answers as well
   * as the questions to a string value.
   * Then we use exportFile (see above for documentation) to export the string
   * as a txt file.
   *  
   */
  finalOutput(id) { 
    //out is the string that will ultimnately be saved as txt
    var out = "";
    //count for checklistFields form identifiers
    var count = 0;
    
    //before going into the loop, we already know these 4 fields will be on every instance, so append them first.
    //getElementById refers to the HTML element id="" (this is what i struggled with for like a week lol)
    out += document.getElementById("sessionID").value + '\n' + 
            document.getElementById("roomNumber").value + '\n' + 
            document.getElementById("date").value + "  " + 
            document.getElementById("time").value + '\n';

    //pull info
    ResearchFormDataService.get(id)
    .then(response => {
    //iterate for # of sections in form
    for (let i = 0; i < response.data.sectionNames.length; i++) {
      //append response.data.sectionNames[i].sections to the text file
      out += '\n' + response.data.sectionNames[i].sections + '\n';
      //iterate for # of questions in form
      for (let j = 0; j < response.data.checklistFields.length; j++) {
        //in our checklistFields array we have a value that tells us what section the question is apart of
        //this if statement simply checks if the question our iterator is on belongs to the parent section
        //in the above loop.
        if (response.data.checklistFields[j].section[0] === response.data.sectionNames[i].sections[0]) {
          //response.data.checklistFields[j].statements[0] is a question, append it to the text file
          out += '\t' + (count+1) + ". " + response.data.checklistFields[j].statements[0] + '\n';
          //append the answer provided to the current question to the text file, this would be getElementByID("form${j}")
          out += '\t' + document.getElementById("form" + count).value + '\n';
          //increment count
          count++;
        }
      }
    }

    //final section title is always post session questions so we append first
    out += '\n' + "Post-session Questions" + '\n';
    //iterate over # of postsession questions
    for (let i = 0; i < response.data.postSession.length; i++) {
      //appends the question asked to the string
      out += '\t' + (i+1) + ". " + response.data.postSession[i].question[0] + '\n';
      //appends the answer given to the string
      out += '\t' + document.getElementById("post" + i).value + '\n';
    }

    //pass out string to exportFile
    //see above for exportFile documentation
    this.exportFile(out);
  }
  )
}

  /*
   * render  
   * 
   */
  render() {

    return (
      <div>

        <form method="get" name="inputForm">
          <div id="inputs" className="form-group">

          <div className="form-group">
                <label htmlFor="description">SessionID:</label>
                <input
                  type="text"
                  className="form-control"
                  id="sessionID"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Testing Room #:</label>
                <input
                  type="text"
                  className="form-control"
                  id="roomNumber"
                />
              </div>
              <div className="form-group">
                <label>Date:</label>
                <input
                  type="text"
                  className="form-control"
                  id="date"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Time:</label>
                <input
                  type="text"
                  className="form-control"
                  id="time"
                />
              </div>

          </div>

        </form>

        <input form="inputForm" type="submit" value="Submit" id="ok" onClick={() => this.finalOutput(this.props.router.params.id)}/>
      </div>
    )
  }
}

export default withRouter(ResearchForm);