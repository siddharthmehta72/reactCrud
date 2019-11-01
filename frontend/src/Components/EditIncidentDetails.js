import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';
import { Form, Container } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import ".//css/INCStyle.css"
import Moment from 'react-moment';

export default class EditINC extends Component {

    constructor(props) {
        super(props);
        this.onChangeINCNumber = this.onChangeINCNumber.bind(this);
        this.onChangeINCSubject = this.onChangeINCSubject.bind(this);
        this.onChangeINCRaisedOn = this.onChangeINCRaisedOn.bind(this);
        this.onChangeINCImpactedApplications = this.onChangeINCImpactedApplications.bind(this);
        this.onChangeINCType = this.onChangeINCType.bind(this);
        this.onChangeINCDescription = this.onChangeINCDescription.bind(this);
        this.onChangeINCAssignedTo = this.onChangeINCAssignedTo.bind(this);
        this.onChangeINCPriority = this.onChangeINCPriority.bind(this);
        this.onChangeINCStatus = this.onChangeINCStatus.bind(this);
        this.onChangeINCResolverGroup = this.onChangeINCResolverGroup.bind(this);
        this.onChangeINCRouteCause = this.onChangeINCRouteCause.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            INC_Number: '',
            INC_Subject: '',
            INC_RaisedOn: '',
            INC_ImpactedApplications: '',
            INC_Type: '',
            INC_Description: '',
            INC_AssignedTo: '',
            INC_Priority: '',
            INC_Status: '',
            INC_RouteCause: '',
            INC_RouteCause: '',
            inputDisabled: false,
            INC_UpdatedOn: new Date()
        }
    }

    onChangeINCNumber(e) {
        this.setState({
            INC_Number: e.target.value
        });
    }

    onChangeINCSubject(e) {
        this.setState({
            INC_Subject: e.target.value
        });
    }

    onChangeINCRaisedOn(e) {
        console.log(`INC Raised Date: ${this.state.INC_RaisedOn} ` + e.target.value);
        this.setState({
            INC_RaisedOn: e.target.value
        });
    }

    /* onChangeINCRaisedOn = date => {

        console.log(`INC Raised Date: ${this.state.INC_RaisedOn} ` + 'e');
        this.setState({
            INC_RaisedOn: date
        });
    }  */
    onChangeINCImpactedApplications(e) {
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
    onChangeINCStatus(e) {
        this.setState({
            INC_Status: e.target.value
        });
        console.log('inside onchange disabled status ' + e.target.value)
        if (e.target.value === 'Resolved') {
            this.setState({
                inputDisabled: true
            })
        }
        else {
            this.setState({
                inputDisabled: false
            })
        }
        console.log('inside onchange disabled status ' + this.state.inputDisabled)
    }

    onChangeINCResolverGroup(e) {
        console.log('inside onchane RG' + e.target.value)
        this.setState({
            INC_ResolverGroup: e.target.value
        });
    }

    onChangeINCRouteCause(e) {
        console.log('inside onchane RC' + e.target.value)
        this.setState({
            INC_RouteCause: e.target.value
        });
    }

    onChangeINCPriority(e) {
        this.setState({
            INC_Priority: e.target.value
        });
    }

    componentDidMount() {
        axios.get('http://localhost:4000/incs/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    INC_Number: response.data.INC_Number,
                    INC_Subject: response.data.INC_Subject,
                    INC_RaisedOn: response.data.INC_RaisedOn,
                    INC_UpdatedOn: response.data.INC_UpdatedOn,
                    INC_ImpactedApplications: response.data.INC_ImpactedApplications,
                    INC_Type: response.data.INC_Type,
                    INC_Description: response.data.INC_Description,
                    INC_AssignedTo: response.data.INC_AssignedTo,
                    INC_Priority: response.data.INC_Priority,
                    INC_Status: response.data.INC_Status,
                    INC_ResolverGroup: response.data.INC_ResolverGroup,
                    INC_RouteCause: response.data.INC_RouteCause

                });

                if (response.data.INC_Status === 'Resolved') {
                    this.setState({
                        inputDisabled: true
                    })
                }
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    onSubmit(e) {
        e.preventDefault();

        this.setState ({
            INC_UpdatedOn: new Date()
        });
            
        
        console.log(`Form submitted:`);

        console.log(`INC Priority: ${this.state.INC_Status}`);
        console.log(`INC Priority: ${this.state.INC_ImpactedApplications}`);
        console.log(`INC Priority: ${this.state.INC_AssignedTo}`);
        console.log(`INC Priority: ${this.state.INC_Priority}`);
        console.log(`INC update: ${this.state.INC_UpdatedOn}`);

        const INCs = {
            INC_Number: this.state.INC_Number,
            INC_Subject: this.state.INC_Subject,
            INC_RaisedOn: this.state.INC_RaisedOn,
            INC_UpdatedOn: new Date(),
            INC_ImpactedApplications: this.state.INC_ImpactedApplications,
            INC_Type: this.state.INC_Type,
            INC_Description: this.state.INC_Description,
            INC_AssignedTo: this.state.INC_AssignedTo,
            INC_Priority: this.state.INC_Priority,
            INC_Status: this.state.INC_Status,
            INC_ResolverGroup: this.state.INC_ResolverGroup,
            INC_RouteCause: this.state.INC_RouteCause
        }

        console.log(INCs);
        console.log('list of INC raised');
        axios.post('http://localhost:4000/incs/update/' + this.props.match.params.id, INCs)
            .then(res => console.log(res.data));

        this.props.history.push('/');




    }

    render() {
        return (
            <div style={{ marginTop: 10 }} class='scrollbar scrollbar-primary' style={{ 'max-height': 'calc(100vh - 210px)', 'overflow': 'auto' }}>
                <h3>Create New INC</h3>
                <form onSubmit={this.onSubmit} style={{}}>

                    <div className="form-group">
                        <label>INC Number: </label> {this.state.INC_Number}
                        
                    </div>

                    <div className="form-group">
                        <label>Subject: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.INC_Subject}
                            onChange={this.onChangeINCSubject} readOnly="readOnly"
                        />
                    </div>

                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.INC_Description}
                            onChange={this.onChangeINCDescription} readOnly="readOnly"
                        />
                    </div>

                    <div className="form-group">
                        <label>Raised On: </label>
                        <input type="text"
                            className="form-control"
                            selected={this.state.INC_RaisedOn}
                            onChange={this.onChangeINCRaisedOn}
                            defaultValue={this.state.INC_RaisedOn} readOnly="readOnly"
                        />
                    </div>


                    {/* <div className="form-group">
                        <label>Raised On: </label>
                        <input type="date"
                            className="form-control"
                            selected={this.state.INC_RaisedOn}
                            onChange={this.onChangeINCRaisedOn}
                            defaultValue={this.state.INC_RaisedOn} 
                        />
                    </div>  */}



                    {/* <div className="form-group">
                        <label>Impacted Application: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.INC_ImpactedApplications}
                            onChange={this.onChangeINCImpactedApplications}
                        />
                    </div> */}

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Impacted Application:</Form.Label>
                        <Form.Control as="select" value={this.state.INC_ImpactedApplications}
                            onChange={this.onChangeINCImpactedApplications} >
                            <option value={this.state.INC_ImpactedApplications}>{this.state.INC_ImpactedApplications}</option>
                            <option>----Select Application----</option>
                            <option value='Retail'>Retail</option>
                            <option value='Galaxy'>Galaxy</option>
                            <option value='Mortgage'>Mortgage</option>
                            <option value='Telephony'>Telephony</option>
                            <option value='Pega'>Pega</option>
                            <option value='All Core Apps'>All Core Apps</option>


                        </Form.Control>
                    </Form.Group>


                    <div className="form-group">
                        <label>Issue Type : </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.INC_Type}
                            onChange={this.onChangeINCType}
                        />
                    </div>
                    <div className="form-group">
                        <label>Assigned To: </label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.INC_AssignedTo}
                            onChange={this.onChangeINCAssignedTo} readOnly="readOnly"
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <label>Issue Priority : </label>
                        </div>
                        <div className="form-check form-check-inline">
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

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Issue Status</Form.Label>
                        <Form.Control as="select" value={this.state.INC_Status}
                            onChange={this.onChangeINCStatus}  >
                            <option value={this.state.INC_Status}>{this.state.INC_Status}</option>
                            <option value='Active'>Active</option>
                            <option value='Awaiting Check'>Awaiting Check</option>
                            <option value='Resolved'>Resolved</option>


                        </Form.Control>
                    </Form.Group>
                    {this.state.inputDisabled ?
                        <div>
                            <div className="form-group">
                                <label>Resolver Group : </label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.INC_ResolverGroup}
                                    onChange={this.onChangeINCResolverGroup} disabled={this.state.disabled}
                                />
                            </div>

                            <div className="form-group">
                                <label>Route Cause : </label>
                                <input type="text"
                                    className="form-control"
                                    value={this.state.INC_RouteCause}
                                    onChange={this.onChangeINCRouteCause}
                                />
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Close INC" className="btn btn-primary" />
                            </div>
                        </div>





                        :


                        <div className="form-group">
                            <input type="submit" value="Edit INC" className="btn btn-primary" />
                        </div>

                    }

                    <div className="form-group">
                        <label>Recently Updated On</label>

                        :- <Moment date={this.state.INC_UpdatedOn} format="DD-MM-YYYY hh:mm:ss">  </Moment>
                    </div>



                    {/* <div className="form-group">
                        <label>Issue Current Status : </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.INC_Status}
                            onChange={this.onChangeINCStatus}
                        />
                    </div> */}



                </form>
            </div>
        )
    }
}