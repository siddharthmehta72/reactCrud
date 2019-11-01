import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table'
import { Form, Container } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import "E:/Workspace/NinjaFrontEnd/myfirstreact/src/css/INCStyle.css"
import Moment from 'react-moment';

export default class ReadINC extends Component {

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
        //this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            _id: '',
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
            INC_UpdatedOn: ''
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
                    _id: response.data._id,
                    INC_Number: response.data.INC_Number,
                    INC_Subject: response.data.INC_Subject,
                    INC_RaisedOn: response.data.INC_RaisedOn,
                    INC_ImpactedApplications: response.data.INC_ImpactedApplications,
                    INC_Type: response.data.INC_Type,
                    INC_Description: response.data.INC_Description,
                    INC_AssignedTo: response.data.INC_AssignedTo,
                    INC_Priority: response.data.INC_Priority,
                    INC_Status: response.data.INC_Status,
                    INC_ResolverGroup: response.data.INC_ResolverGroup,
                    INC_RouteCause: response.data.INC_RouteCause,
                    INC_UpdatedOn: response.data.INC_UpdatedOn
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

    /* onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);

        console.log(`INC Priority: ${this.state.INC_Status}`);
        console.log(`INC Priority: ${this.state.INC_ImpactedApplications}`);
        console.log(`INC Priority: ${this.state.INC_AssignedTo}`);
        console.log(`INC Priority: ${this.state.INC_Priority}`);

        const INCs = {
            INC_Number: this.state.INC_Number,
            INC_Subject: this.state.INC_Subject,
            INC_RaisedOn: this.state.INC_RaisedOn,
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




    } */

    render() {
        return (
           
            <div>
                    {this.state.inputDisabled ?

                        <div style={{ marginTop: 10 }} class='scrollbar scrollbar-primary' style={{ 'max-height': 'calc(100vh - 210px)', 'overflow': 'auto' }}>
                <h3>Incident Details </h3>

                <Table striped bordered hover>
                    <tr>
                        <td>INC Number: </td>
                        <td><b>{this.state.INC_Number}</b></td>
                    </tr>

                    <tr>
                        <td>Subject: </td>
                        <td> {this.state.INC_Subject}

                        </td>
                    </tr>

                    <tr>
                        <td>Description:  </td>
                        <td> {this.state.INC_Description}

                        </td>
                    </tr>

                    <tr>
                        <td>Raised On:  </td>
                        <td> <Moment date={this.state.INC_RaisedOn} format="DD-MM-YYYY hh:mm:ss">  </Moment>

                        </td>
                    </tr>


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

                    <tr>
                        <td>Impacted Application  :  </td>
                        <td>
                            :{this.state.INC_ImpactedApplications}
                        </td>
                    </tr>


                    <tr>
                        <td>Issue Type : </td>
                        <td>{this.state.INC_Type}

                        </td>
                    </tr>
                    <tr>
                        <td>Assigned To:  </td>
                        <td> {this.state.INC_AssignedTo}

                        </td>
                    </tr>

                    <tr>
                        <td>Issue Priority :  </td>
                        <td>

                            {this.state.INC_Priority}


                        </td>
                    </tr>

                    <tr>
                        <td>Issue Status </td>
                        <td>
                            {this.state.INC_Status}
                        </td>
                    </tr>
                        <tr>
                                <td>Resolver Group :  </td>
                                <td>{this.state.INC_ResolverGroup}

                                </td>
                            </tr>

                            <tr>
                                <td>Route Cause :  </td>
                                <td> {this.state.INC_RouteCause}

                                </td>
                            </tr>

                            <tr>
                                <td>Recently Updated On</td>
                                <td>  <Moment date={this.state.INC_UpdatedOn} format="DD-MM-YYYY hh:mm:ss">  </Moment> </td>

                            
                        </tr>
                    </Table>
                    </div>







                        :
                        
                        <div style={{ marginTop: 10 }} class='scrollbar scrollbar-primary' style={{ 'max-height': 'calc(100vh - 210px)', 'overflow': 'auto' }}>
                        
                        <h3>Incident Details </h3>
        
                        <Table striped bordered hover>
                            <tr>
                                <td>INC Number: </td>
                                <td><b>{this.state.INC_Number}</b></td>
                            </tr>
        
                            <tr>
                                <td>Subject: </td>
                                <td> {this.state.INC_Subject}
        
                                </td>
                            </tr>
        
                            <tr>
                                <td>Description:  </td>
                                <td> {this.state.INC_Description}
        
                                </td>
                            </tr>
        
                            <tr>
                                <td>Raised On:  </td>
                                <td> <Moment date={this.state.INC_RaisedOn} format="DD-MM-YYYY hh:mm:ss">  </Moment>
        
                                </td>
                            </tr>
        
        
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
        
                            <tr>
                                <td>Impacted Application  :  </td>
                                <td>
                                    :{this.state.INC_ImpactedApplications}
                                </td>
                            </tr>
        
        
                            <tr>
                                <td>Issue Type : </td>
                                <td>{this.state.INC_Type}
        
                                </td>
                            </tr>
                            <tr>
                                <td>Assigned To:  </td>
                                <td> {this.state.INC_AssignedTo}
        
                                </td>
                            </tr>
        
                            <tr>
                                <td>Issue Priority :  </td>
                                <td>
        
                                    {this.state.INC_Priority}
        
        
                                </td>
                            </tr>
        
                            <tr>
                                <td>Issue Status </td>
                                <td>
                                    {this.state.INC_Status}
                                </td>
                            </tr>

                    

                       
                            <tr>
                                <td>Recently Updated On</td>
                                <td>  <Moment date={this.state.INC_UpdatedOn} format="DD-MM-YYYY hh:mm:ss">  </Moment> </td>

                            
                        </tr>
                        </Table></div>

                            
                            }




                    {/* <div className="form-group">
                        <label>Issue Current Status : </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.INC_Status}
                            onChange={this.onChangeINCStatus}
                        />
                    </div> */}

<Button variant="primary" href="/view">Go Back</Button>
</div>
               
        )
    }
}