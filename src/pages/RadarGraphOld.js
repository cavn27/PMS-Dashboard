import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import "../App.css";

class RadarGraph extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: { },
      series: [
          {
            name: "Radar Series 1",
            data: [45, 52, 38, 24, 33, 10]
          },
          {
            name: "Radar Series 2",
            data: [26, 21, 20, 6, 8, 15]
          }
      ],
      labels: ['April', 'May', 'June', 'July', 'August', 'September']
      }
    }

  render() {

    return (
      <div className="radar">
        <h1> RADAR </h1>
        <Chart
        options={this.state.options}
        series={this.state.series}
        type="radar" width="1000" />
      </div>
    );
  }
}

export default RadarGraph;