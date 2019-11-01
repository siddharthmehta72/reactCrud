var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
import axios from 'axios';

class CanvasChart extends Component {
	
		constructor(props) {
            super(props);
      
            this.state = {
            options = {
			exportEnabled: true,
			animationEnabled: true,
			title: {
				text: "Website Traffic Sources"
			},
			data: [{
				labels: ["January", "February", "March", "April", "May", "June", "July"],
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}%",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}%",
				dataPoints: [
					{ y: 18, label: "Direct" },
					{ y: 49, label: "Organic Search" },
					{ y: 9, label: "Paid Search" },
					{ y: 5, label: "Referral" },
					{ y: 19, label: "Social" }
				]
			}]
        }
    }
}

componentDidMount() {
    axios.get('http://localhost:4000/incs/Chart')
        .then(response => {
            
            this.setState({ 
                Chart: response.data ,
               
            });
            console.log(this.state.Chart.high);
            
        })
        .catch(function (error){
            console.log(error);
        })
}

        
        render() 
        {
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default CanvasChart;  