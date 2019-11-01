import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';
import ReactDOM from 'react-dom';
import "react-datepicker/dist/react-datepicker.css";
import { Form, Container } from 'react-bootstrap';
import Moment from 'react-moment';

export default class AddINC extends Component {

    constructor(props) {
        super(props);
        var date = new Date();
        

        this.onChangeINCSubject = this.onChangeINCSubject.bind(this);
        this.onChangeINCRaisedOn = this.onChangeINCRaisedOn.bind(this);
        this.onChangeINCUpdatedOn = this.onChangeINCUpdatedOn.bind(this);
        this.onChangeINCImpactedApplications = this.onChangeINCImpactedApplications.bind(this);
        this.onChangeINCType = this.onChangeINCType.bind(this);
        this.onChangeINCDescription = this.onChangeINCDescription.bind(this);
        this.onChangeINCAssignedTo = this.onChangeINCAssignedTo.bind(this);
        this.onChangeINCPriority = this.onChangeINCPriority.bind(this);
        //this.onChangeINCStatus = this.onChangeINCStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            INC_Subject: '',
            INC_RaisedOn: new Date(),
            INC_ImpactedApplications: '',
            INC_Type: '',
            INC_Description: '',
            INC_AssignedTo: '',
            INC_Priority: '',
            INC_Status: 'Active',
            INC_Number: 'INCREF',
            count:'',
            INC_UpdatedOn: new Date()
        }
        
    }

    onChangeINCSubject(e) {
        this.setState({
            INC_Subject: e.target.value
        });
    }

    onChangeINCRaisedOn(e) {
        console.log(`INC Raised Date: ${this.state.INC_RaisedOn} `+ e.target.value);
        this.setState({
            INC_RaisedOn: e.target.value
        });
    }
    onChangeINCUpdatedOn(e) {
        console.log(`INC Raised Date: ${this.state.INC_UpdatedOn} `+ e.target.value);
        this.setState({
            INC_UpdatedOn: e.target.value
        });
    }

      /* onChangeINCRaisedOn = date => {
 
         console.log(`INC Raised Date: ${this.state.INC_RaisedOn} `+ 'e');
         this.setState({
             INC_RaisedOn: date
         });
     }  */
    onChangeINCImpactedApplications(e) {
        console.log('inside onchane impacted applications'+ e.target.value)
        this.setState({
            INC_ImpactedApplications: e.target.value
        });
    }
    onChangeINCType(e) {
        this.setState({
            INC_Type: e.target.value
        });
    }

    onChangeINCDescription(e) {
        this.setState({
            INC_Description: e.target.value
        });
    }
    onChangeINCAssignedTo(e) {
        this.setState({
            INC_AssignedTo: e.target.value
        });
    }
    /* onChangeINCStatus(e) {
        
        this.setState({
            INC_Status: 'Active'
        });
    } */

    onChangeINCPriority(e) {
        this.setState({
            INC_Priority: e.target.value
        });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/incs/count')
            .then(response => {
                
                this.setState({ 
                    count: response.data+1
                    
                });
                console.log(this.state.count)
            })
            .catch(function (error){
                console.log(error);
            })
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`INC Priority: ${this.state.INC_Status}`);
        console.log(`INC Priority: ${this.state.INC_ImpactedApplications}`);
        console.log(`INC Priority: ${this.state.INC_AssignedTo}`);
        console.log(`INC Priority: ${this.state.INC_Priority}`);

        const INCs = {
            INC_Number : this.state.INC_Number+this.state.count,
            INC_Subject: this.state.INC_Subject,
            INC_RaisedOn:  this.state.INC_RaisedOn ,
            INC_ImpactedApplications: this.state.INC_ImpactedApplications,
            INC_Type: this.state.INC_Type,
            INC_Description: this.state.INC_Description,
            INC_AssignedTo: this.state.INC_AssignedTo,
            INC_Priority: this.state.INC_Priority,
            INC_Status: this.state.INC_Status,
            INC_UpdatedOn: this.state.INC_UpdatedOn
        }


        axios.post('http://localhost:4000/incs/add', INCs)
            .then(res => console.log(res.data));

            this.props.history.push('/');
            
        this.setState({
            INC_Subject: '',
            INC_RaisedOn: new Date(),
            INC_ImpactedApplications: '',
            INC_Type: '',
            INC_Description: '',
            INC_AssignedTo: '',
            INC_Priority: '',
            INC_Status: 'Active',
            INC_Number: 'INCREF',
            INC_UpdatedOn: new Date()
        })


    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>New Incident Portal </h3>
                <form onSubmit={this.onSubmit}>

                <div className="form-group">
                        <label>INC Number: </label> <b>{this.state.INC_Number+this.state.count}</b>
                        {/* <input type="text"
                            className="form-control"
                            value={this.state.INC_Number+this.state.count}
                            
                        /> */}
                    </div>

                    <div className="form-group">
                        <label>Subject: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.INC_Subject}
                            onChange={this.onChangeINCSubject} required
                        />
                    </div>

                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.INC_Description}
                            onChange={this.onChangeINCDescription} required
                        />
                    </div>
                   
                     <div className="form-group">
                        <label>Raised On</label>
                       
                         :- <Moment date={this.state.INC_RaisedOn} format="DD-MM-YYYY">  </Moment>
                    </div> 

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Impacted Application:</Form.Label>
                        <Form.Control as="select"  value={this.state.INC_ImpactedApplications}
                            onChange={this.onChangeINCImpactedApplications} >
                                <option>----Select Application----</option>
                            <option value='Retail'>Retail</option>
                            <option value='Galaxy'>Galaxy</option>
                            <option value='Mortgage'>Mortgage</option>
                            <option value='Telephony'>Telephony</option>
                            <option value='Pega'>Pega</option>
                            <option value='All Core Apps'>All Core Apps</option>


                        </Form.Control>
                    </Form.Group>

                    {/*  <div className="form-group">
                        <label>Impacted Application: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.INC_ImpactedApplications}
                            onChange={this.onChangeINCImpactedApplications}
                        />
                    </div> */}

                    <div className="form-group">
                        <label>Issue Type : </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.INC_Type}
                            onChange={this.onChangeINCType} required
                        />
                    </div>
                    <div className="form-group">
                        <label>Assigned To: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.INC_AssignedTo}
                            onChange={this.onChangeINCAssignedTo} required
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <label>Issue Priority : </label>


                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.INC_Priority === 'Low'}
                                onChange={this.onChangeINCPriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={this.state.INC_Priority === 'Medium'}
                                onChange={this.onChangeINCPriority}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={this.state.INC_Priority === 'High'}
                                onChange={this.onChangeINCPriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    {/* <div className="form-group">
                        <label>Issue Current Status : </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.INC_Status}
                            onChange={this.onChangeINCStatus}
                        />
                    </div> */}

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Issue Status</Form.Label>
                        <Form.Control as="select" readOnly value={'Active'}
                            onChange={this.onChangeINCStatus}  >
                            <option value='Active'>Active</option>


                        </Form.Control>
                    </Form.Group>

                    <div className="form-group">
                        <label>Recently Updated On</label>
                       
                         :- <Moment date={this.state.INC_UpdatedOn} parse="DD-MM-YYYY HH:mm:ss">  </Moment>
                    </div> 

                    <div className="form-group">
                        <input type="submit" value="Create INC" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

