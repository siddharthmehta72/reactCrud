import React, { Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from "react-js-pagination";
import { Row , Button } from 'react-bootstrap';

const INC = props => (
    <tr>
        <td>{props.incKey.INC_Subject}</td>
        <td>{props.incKey.INC_Description}</td>
        <td>{props.incKey.INC_RaisedOn}</td> 
        <td>{props.incKey.INC_ImpactedApplications}</td>
        <td>{props.incKey.INC_AssignedTo}</td>
        <td>{props.incKey.INC_Type}</td>
        <td>{props.incKey.INC_Priority}</td>
        <td>{props.incKey.INC_Status}</td>
        
        <td>
            <Link to={"/edit/"+props.incKey._id}>Edit</Link>
        </td>
    </tr>
)


class TodoApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        currentPage: 1,
        todosPerPage: 10,
        activePage: 1,
        incs: []

      };
      this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
        axios.get('http://localhost:4000/incs/')
            .then(response => {
                this.setState({ incs: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }
    componentDidUpdate() {
        axios.get('http://localhost:4000/incs/')
            .then(response => {
                this.setState({ incs: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.incs.map(function(currentTodo, i){
            return <INC incKey={currentTodo} key={i} />;
        })
    }

    handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }

    handlePageChange(pageNumber) {
      console.log(`active page is ${pageNumber}`);
      this.setState({activePage: pageNumber});
    }
  
    render() {
      const { incs, currentPage, todosPerPage } = this.state;
  
      // Logic for displaying todos
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = incs.slice(indexOfFirstTodo, indexOfLastTodo);
  
      const renderTodos = currentTodos.map((todo, i) => {
        return <INC incKey={todo} key={i} />;
      });
  
      // Logic for displaying page numbers
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(incs.length / todosPerPage); i++) {
        pageNumbers.push(i);
      }
      
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <Button variant="outline-primary"
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </Button>
        );
      });
  
      return (
        <div>
          <h3>INCIDENT Current List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Description</th>
                             <th>Raised On</th> 
                            <th>Impacted Application</th>
                            <th>Assigned To</th>
                            <th>Issue Type</th>
                            <th>Priority</th>
                            <th>Current Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        { renderTodos }
                    </tbody>
                </table>
          <ul id="page-numbers">
          
      { renderPageNumbers }
    
          </ul>
        </div>
      );
    }
  }
  
  
  export default TodoApp