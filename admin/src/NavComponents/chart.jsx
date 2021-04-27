
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
          <h1>BarChart for Complaints </h1>
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

                            

// import React from 'react';
// import PropTypes from 'prop-types';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';

// function CircularProgressWithLabel(props) {
//   return (
//     <Box position="relative" display="inline-flex">
//       <CircularProgress variant="determinate" {...props} />
//       <Box
//         top={0}
//         left={0}
//         bottom={0}
//         right={0}
//         position="absolute"
//         display="flex"
//         alignItems="center"
//         justifyContent="center"
//       >
//         <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
//           props.value,
//         )}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }

// CircularProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate variant.
//    * Value between 0 and 100.
//    */
//   value: PropTypes.number.isRequired,
// };

// export default function CircularStatic() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return 
//}
