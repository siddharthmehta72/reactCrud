// Step 1 - Include react
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// Step 2 - Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Step 3 - Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Step 4 - Include the chart type
import Column2D from 'fusioncharts/fusioncharts.charts';

// Step 5 - Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// Step 7 - Creating the JSON object to store the chart configurations


// Step 9 - Creating the DOM element to pass the react-fusioncharts component
class ChartsJS extends React.Component {

    constructor(props) {
        super(props);
  
        this.state = {
        chartConfigs : {
        type: 'column2d',// The chart type
        width: '700', // Width of the chart
        height: '400', // Height of the chart
        dataFormat: 'json', // Data type
        dataSource: {
            // Chart Configuration
            "chart": {
                "caption": "Incident Been Raised in Current Year",
                "subCaption": "(Across all Platforms)",
                "xAxisName": "Month (2019)",
                "yAxisName": "INC Count (N)",
                "numberSuffix": "",
                "theme": "fusion",
            },
            // Chart Data
            "data": [  {
                "label": "APR",
                "value": "160"
            }, {
                "label": "MAY",
                "value": "260"
            }, {
                "label": "JUN",
                "value": "100"
            }, {
                "label": "JUL",
                "value": "200"
            }, {
                "label": "AUG",
                "value": "115"
            }, {
                "label": "SEP",
                "value": "100"
            }, {
                "label": "OCT",
                "value": "30"
            }, {
                "label": "NOV",
                "value": "300"
            }  ]
        }
    }
}
    }


    componentDidMount() {
        axios.get('http://localhost:4000/incs/Chart')
            .then(response => {
                
                this.setState({ 
                   
                    
                    data: [
                       { "label" : "High",
                        "value" : response.data.high 
                    },

                    { "label" : "Medium",
                        "value" : response.data.medium 
                    },

                    { "label" : "Low",
                        "value" : response.data.low 
                    }

                          
                    ]
                });
                console.log(this.state.data);
              
                console.log(this.state.Chart.high);
                
            })
            .catch(function (error){
                console.log(error);
            })
    }

  render() {
     return (
         <center>
     <ReactFC
        {...this.state.chartConfigs} /></center>
     );
  }
}

export default ChartsJS