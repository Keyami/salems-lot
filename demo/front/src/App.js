import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddResearchForm from "./components/add-researchform.component";
import ResearchForm from "./components/reseachform.component";
import ResearchFormsList from "./components/researchform-list.component";
import InstanceList from "./components/instance-list.component";
import InstanceListQuestions from "./components/use-instance";


class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/researchforms"} className="navbar-brand">
            Salems-Lot
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/researchforms"} className="nav-link">
                Form list
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/submissions"} className="nav-link">
                Submission list
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Create form
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<ResearchFormsList/>} />
            <Route path="/researchforms" element={<ResearchFormsList/>} />
            <Route path="/submissions" element={<InstanceList/>} />
            <Route path="/add" element={<AddResearchForm/>} />
            <Route path="/researchforms/:id" element={<ResearchForm/>} />
            <Route path="/instancelist/:id" element={<InstanceListQuestions />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
