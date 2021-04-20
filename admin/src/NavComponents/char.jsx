
// import { Bar } from 'react-chartjs-2'

import {React,useEffect} from 'react';
import BarChart from 'react-easy-bar-chart';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Grid from '@material-ui/core/Grid';
import LinearDeterminate from './progrssbar';
import LinearWithValueLabel from './progrssbar';
import { Card, CardContent, makeStyles } from '@material-ui/core';

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
const classes = useStyle();
  console.log(props.count);

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

                            

