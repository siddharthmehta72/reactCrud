import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import axios from 'axios';
class PieChartStatus extends React.Component {
      
    constructor(props) {
      super(props);

      this.state = {
        
        options: {
          
          labels: ['Active', 'Awaiting Check', 'Resolved'],
          color: [
            { minvalue: '0.5', maxvalue: '1.0', color: '#FFD74D' },
            { minvalue: '1.0', maxvalue: '2.0', color: '#FB8C00' },
            { minvalue: '2.0', maxvalue: '3.0', color: '#E65100' }
          ],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                caption: 'Average Annual Population Growth',
              },
              chart: {
                width: 200
              },
              legend: {
                position: 'top'
              },

              
            }
          }]
        },
       
        series: [],
        Chart: []
       
      }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/incs/Chart')
            .then(response => {
                
                this.setState({ 
                    Chart: response.data ,
                    
                    series: [
                        response.data.Active ,  response.data.Awaiting_Check , response.data.Resolved
                    ]
                });
                console.log(response.data.Active);
                console.log(response.data.Awaiting_Check);
                console.log(response.data.Resolved);
                
            })
            .catch(function (error){
                console.log(error);
            })
    }

    render() {
      return (
        

        <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="pie"
              width="500"
            />
          </div>
        </div>
      </div>

      );
    }
  }

  export default PieChartStatus
/*   const domContainer = document.querySelector('#app');
  ReactDOM.render(React.createElement(PieChart), domContainer); */