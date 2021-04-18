
// import { Bar } from 'react-chartjs-2'

import React, { Component } from 'react';
import BarChart from 'react-easy-bar-chart';

class Example extends Component {
  render() {

    const options = {
        
    }
  const data = [
    {
      title:  "Maths",
      value: 10,
      color: "#196f3d",
    },
    {
      title:  "English",
      value: 1,
      color: "#a93226",
    },
    {
      title:  "Physics",
      value: 2,
      color: " #1f618d",
    },
   
    ];
    return (
      <div className="Example">
        <header className="Example-header">
          <h1>React Bar Chart!</h1>
        </header>
        <BarChart 
          xAxis={data[0].title}
          yAxis="Values"
          height={300}
          width={600}
          data={data}
        />
      </div>
    );
  }
}

export default Example;

                            

