import {React,useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios'

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function LinearWithValueLabel() {
  const classes = useStyles();
 

  const [hosbar,setHosbar] = useState(0);
  const [transbar,setTransbar] = useState(0);
  const [acabar,setAcabar] = useState(0);
  const [raggbar,setRaggbar] = useState(0);
  const [otherbar,setOtherbar] = useState(0);

  
    useEffect(() => {
    
      axios.put("http://localhost:4000/getHostelComplaints").then((res) => {
        var sum = 0
          for (let index = 0; index < res.data.length; index++) {
            
            sum += res.data[index].comp.length
          }
          setHosbar(sum)
  
      })
     

      axios.put("http://localhost:4000/getAcademicComplaints").then((res) => {
        var sum = 0
        for (let index = 0; index < res.data.length; index++) {
            
          sum = sum + res.data[index].comp.length
        }
        setAcabar(sum);
      })

      axios.put("http://localhost:4000/getTransportComplaints").then((res) => {
        var sum = 0
        for (let index = 0; index < res.data.length; index++) {
            
          sum = sum + res.data[index].comp.length
        }
        setTransbar(sum);
      })

      axios.put("http://localhost:4000/getRaggingComplaints").then((res) => {
        var sum = 0
        for (let index = 0; index < res.data.length; index++) {
            
          sum = sum + res.data[index].comp.length
        }
        setRaggbar(sum);
      })

      axios.put("http://localhost:4000/getUnknownComplaints").then((res) => {
        var sum = 0
        for (let index = 0; index < res.data.length; index++) {
            
          sum = sum + res.data[index].comp.length
        }
        setOtherbar(sum);
      })
    },[])

  

  return (
    <div className={classes.root}>
        <label>Hostel</label>
      <LinearProgressWithLabel value={hosbar} />

      <label>Academic</label>
      <LinearProgressWithLabel value={acabar} />

      <label>Transport</label>
      <LinearProgressWithLabel value={transbar} />

      <label>Ragging</label>
      <LinearProgressWithLabel value={raggbar} />

      <label>Others</label>
      <LinearProgressWithLabel value={otherbar} />

    </div>
  );
}




// <Chart
//   width={'500px'}
//   height={'300px'}
//   chartType="Bar"
//   loader={<div>Loading Chart</div>}
//   data={[
//     ['Year', 'Sales', 'Expenses', 'Profit'],
//     ['2014', 1000, 400, 200],
//     ['2015', 1170, 460, 250],
//     ['2016', 660, 1120, 300],
//     ['2017', 1030, 540, 350],
//   ]}
//   options={{
//     // Material design options
//     chart: {
//       title: 'Company Performance',
//       subtitle: 'Sales, Expenses, and Profit: 2014-2017',
//     },
//   }}
//   // For tests
//   rootProps={{ 'data-testid': '2' }}
// />