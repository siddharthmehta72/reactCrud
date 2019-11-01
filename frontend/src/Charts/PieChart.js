import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import axios from 'axios';
import PieChartStatus from "./StatusChart.js";
import ChartsJS from "./Charts.js"

class PieChartPrioirty extends React.Component {
      
    constructor(props) {
      super(props);

      this.state = {
        
        options: {
           
          labels: ['High', 'Medium', 'Low'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
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
                        response.data.high ,  response.data.medium , response.data.low
                    ]
                });
                console.log(this.state.series);
                console.log(this.state.options);
                console.log(this.state.Chart.high);
                
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
          <div className="mixed-chart">
          <PieChartStatus/></div>
        </div>

        <ChartsJS/>
      </div>

      );
    }
  }

  export default PieChartPrioirty
/*   const domContainer = document.querySelector('#app');
  ReactDOM.render(React.createElement(PieChart), domContainer); */