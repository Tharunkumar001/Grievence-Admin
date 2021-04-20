
// import { Bar } from 'react-chartjs-2'

import {React,useEffect, useState,useRef} from 'react';
import BarChart from 'react-easy-bar-chart';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Grid from '@material-ui/core/Grid';
import axios from 'axios'
import LinearWithValueLabel from './progrssbar';
import { Card ,makeStyles } from '@material-ui/core';

const useStyle =  makeStyles((theme) => ({
  linerarBarCard:{
    width:"100%",
    padding:"10px",
    backgroundColor:"rgb(173, 147, 223)"
    
  },
  linearBar:{
    paddingTop:"40px"
  }
}));
const Example = (props) => {

  const [bardetails,setBardetails] = useState(0);
  var sum = useRef(0)
    useEffect(() => {
     
      axios.put("http://localhost:4000/getHostelComplaints").then((res) => {
       
          for (let index = 0; index < res.data.length; index++) {
            
            sum.current += res.data[index].comp.length
          }
         
      })
     

      // axios.put("http://localhost:4000/getAcademicComplaints").then((res) => {
      //   var sum = 0
      //   for (let index = 0; index < res.data.length; index++) {
            
      //     sum = sum + res.data[index].comp.length
      //   }
      //   setBardetails({Academic:sum});
      // })

      // axios.put("http://localhost:4000/getTransportComplaints").then((res) => {
      //   var sum = 0
      //   for (let index = 0; index < res.data.length; index++) {
            
      //     sum = sum + res.data[index].comp.length
      //   }
      //   setBardetails({transport:sum});
      // })

      // axios.put("http://localhost:4000/getRaggingComplaints").then((res) => {
      //   var sum = 0
      //   for (let index = 0; index < res.data.length; index++) {
            
      //     sum = sum + res.data[index].comp.length
      //   }
      //   setBardetails({Ragging:sum});
      // })

      // axios.put("http://localhost:4000/getUnknownComplaints").then((res) => {
      //   var sum = 0
      //   for (let index = 0; index < res.data.length; index++) {
            
      //     sum = sum + res.data[index].comp.length
      //   }
      //   setBardetails({Others:sum});
      // })
    },[sum])


const classes = useStyle();
  console.log(props.count);

  const data = [
    {
      title:  "Hostel",
      value: sum,
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
          <h1>BarChart for Complaints {props.counts}</h1>
        </header>


        <Grid container spacing={3}>
              
              <Grid item xs={4} md={4}>
            
                        <BarChart 
                    height={300}
                    width={600}
                    data={data}
                  
                  />          
              </Grid>

              <Grid item xs={8} md={8}>

            <Card className={classes.linerarBarCard}>
              <LinearWithValueLabel className={classes.linearBar}/>

             
            </Card>
         
          
            </Grid>
                    
                    
      </Grid>

     

       
      </div>
    );
  }


export default Example;

                            

