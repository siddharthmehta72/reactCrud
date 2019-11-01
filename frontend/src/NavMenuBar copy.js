import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Container } from 'react-bootstrap';
import {Navbar, Nav, NavDropdown, Dropdown,DropdownButton,ButtonGroup} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin.css"
import "./css/sb-admin.min.css"
import "./vendor/datatables/dataTables.bootstrap4.css"
import ChartJS from "./Charts.js"
import AddINC from "./Components/AddIncidentDetails.js";
import EditINC from "./Components/EditIncidentDetails.js";
import ViewINC from "./Components/ViewIncidentDetails.js";
import FilteredList from "./Components/SearchIncidentDetails.js";


class NavMenuBar extends Component {
  render() {
    return (

      


      < Navbar collapseOnSelect expand = "lg" >
       <Nav defaultActiveKey="/home" className="flex-column">
  
  <Button variant="outline-primary" href="/charts" >INC DashBoard</Button>
  <Button variant="outline-primary" href="/create">Create INC</Button>

  <Dropdown as={ButtonGroup}>
  <Button variant="outline-success" >Already Raised an INC ?</Button>
      
  <Dropdown.Toggle split variant="outline-success" id="dropdown-split-basic" />
      
  <Dropdown.Menu>
    <Dropdown.Item href="/view">View INC</Dropdown.Item>
    <Dropdown.Item href="/create">Edit INC </Dropdown.Item>
    <Dropdown.Item href="/search">Search Something ?</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
<Button variant="outline-primary">Related Documents</Button>
<Button variant="outline-primary">How can I Help you ?</Button>



</Nav>
       
          
          
       
      </Navbar >

      

);
}
}

      {/* <div >

            <div className="sidebar navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="index.html">
                  <i className="fas fa-fw fa-tachometer-alt"></i>
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fas fa-fw fa-folder"></i>
                  <span>Pages</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                  <h6 className="dropdown-header">Actions</h6>
                  <a className="dropdown-item" href="addnewincident.html">Add Incident</a>
                  <a className="dropdown-item" href="manageincident.html">Manage Incident</a>
                  <a className="dropdown-item" href="updateincident.html">Update Incident</a>
                  <a className="dropdown-item" href="closeincident.html">Close Incident</a>
                  <div className="dropdown-divider"></div>
                  <h6 className="dropdown-header">Other Pages:</h6>
                  <a className="dropdown-item" href="404.html">404 Page</a>
                  <a className="dropdown-item" href="blank.html">Blank Page</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-fw fa-chart-area"></i>
                  <span>Charts</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="fas fa-fw fa-table"></i>
                  <span>Tables</span></a>
              </li>
            </div>
        
            
        
          </div>  */}
          
      



export default NavMenuBar;
