
// import { Bar } from 'react-chartjs-2'

import {React,useEffect, useState,useRef} from 'react';
import BarChart from 'react-easy-bar-chart';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Grid from '@material-ui/core/Grid';
import LinearWithValueLabel from './progrssbar';
import { Card ,makeStyles } from '@material-ui/core';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyle =  makeStyles((theme) => ({
  linerarBarCard:{
    width:"100%",
    padding:"10px",
    backgroundColor:"rgb(173, 147, 223)"
    
  },
  linearBar:{
    paddingTop:"40px"
  },
  barHeading:{
    fontFamily:'monospace'
  }
}));
const Example = (props) => {

  useEffect(() => {
    axios.put("https://grievence-backend.herokuapp.com/getTotalUserDetails").then((res) => {
      console.log(res);
    })
  })


const classes = useStyle();

    return (
      <div className="Example">
        <header className="Example-header">
          <h1 className={classes.barHeading}>BarChart for Complaints </h1>
        </header>


        <Grid container spacing={3}>
              
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

    