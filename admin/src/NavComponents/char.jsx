
// import { Bar } from 'react-chartjs-2'

import {React,useEffect} from 'react';
import BarChart from 'react-easy-bar-chart';

const Example = () => {
  
  useEffect(() => {
    
  })


  const data = [
    {
      title:  "Hostel",
      value: 10,
      color: "#1f618d",
    },
    {
      title:  "Transport",
      value: 1,
      color: "#1f618d",

    },
    {
      title:  "Ragging",
      value: 2,
      color: " #1f618d",

    },
    {
      title:  "Academic",
      value: 2,
      color: " #1f618d",

    },
    {
      title:  "Others",
      value: 2,
      color: " #1f618d",

    },
   
    ];
    return (
      <div className="Example">
        <header className="Example-header">
          <h1>BarChart for Complaints</h1>
        </header>
        <BarChart 
        
    
          height={300}
          width={600}
          data={data}
        
        />
      </div>
    );
  }


export default Example;

                            

