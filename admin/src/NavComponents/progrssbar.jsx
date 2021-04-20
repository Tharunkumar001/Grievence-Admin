import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
 

  return (
    <div className={classes.root}>
        <label>Hostel</label>
      <LinearProgressWithLabel value={30} />

      <label>Academic</label>
      <LinearProgressWithLabel value={30} />

      <label>Transport</label>
      <LinearProgressWithLabel value={30} />

      <label>Ragging</label>
      <LinearProgressWithLabel value={30} />

      <label>Others</label>
      <LinearProgressWithLabel value={30} />

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