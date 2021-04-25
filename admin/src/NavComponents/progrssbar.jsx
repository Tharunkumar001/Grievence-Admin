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
    
      axios.put("https://grievence-backend.herokuapp.com/getComplaintDataCount").then((res) => {
        setHosbar(res.data[0]);
        setAcabar(res.data[1]);
        setRaggbar(res.data[2]);
        setTransbar(res.data[3]);
        setOtherbar(res.data[4]);
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


