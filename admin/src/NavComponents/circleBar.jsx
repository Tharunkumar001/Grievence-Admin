import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    cirBar:{
        margin:"10px"
    },
    bar:{
        marginLeft:"20%"
    }
}))

function CircularProgressWithLabel(props) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

// CircularProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate variant.
//    * Value between 0 and 100.
//    */
//   value: PropTypes.number.isRequired,
// };

export default function CircularStatic() {
  const [progress, setProgress] = useState({hos:0,aca:100,tra:0,rag:0,others:0});

  const classes = useStyle();

  

  return(
      <div className={classes.bar}>
        <CircularProgressWithLabel value={progress.hos} className={classes.cirBar}/>
        <label>hostel</label>
        <CircularProgressWithLabel value={progress.aca} className={classes.cirBar} />
        <label>Academic</label>
        <CircularProgressWithLabel value={progress.tra}  className={classes.cirBar}/>
        <label>Transport</label>
        <CircularProgressWithLabel value={progress.rag}  className={classes.cirBar}/>
        <label>Ragging</label>
        <CircularProgressWithLabel value={progress.others} className={classes.cirBar} />
        <label>Others</label>
      </div>
  ) 
}
