import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin.css"
import "./css/sb-admin.min.css"
import "./vendor/datatables/dataTables.bootstrap4.css"

import AddINC from "./Components/AddIncidentDetails.js";
import EditINC from "./Components/EditIncidentDetails.js";
import ViewINC from "./Components/ViewIncidentDetails.js";
import FilteredList from "./Components/SearchIncidentDetails.js";
import ChartsJS from "./Charts.js"

 class FunctionalBar extends Component {
    render() {
        return (
           <Router>
            <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
             
            </a>
            <Link to="/" className="navbar-brand">Welcome to IncidentManagement Tool </Link>
            {/* <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/view" className="nav-link">View INC</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create INC</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/search" className="nav-link">Search INC</Link>
                </li>
              </ul>
            </div> */}
          </nav>
          <br/>

          <Route path="/" exact component={ViewINC} />
          <Route path="/charts" exact component={ChartsJS} />
          <Route path="/edit/:id" component={EditINC} />
          <Route path="/view" component={ViewINC} />
          <Route path="/create" component={AddINC} />
          <Route path="/search" component={FilteredList} />
        </div>
        </Router>
        );
 }
}

export default FunctionalBar;
