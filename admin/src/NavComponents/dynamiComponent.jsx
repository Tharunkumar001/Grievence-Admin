import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    marginLeft:'auto',
    marginRight:'auto',
    marginBottom:'10px'
  },
  Brand:{
    backgroundColor:'66FCF1'
  },
  Box:{
    borderBottom:'2px solid black',
    borderRadius:'5px',
  },
  back:{
    backgroundColor:'aqua'

  },
  Comp:{
    color:'black'
  }
  // heading: {
  //   fontSize: theme.typography.pxToRem(15),
  //   fontWeight: theme.typography.fontWeightRegular,
  // },
}));

export default function AdminTab(props) {


  const classes = useStyles();
  // console.log(props)
  return (
    <div className={classes.root}>
      <Accordion className={classes.Brand}>
        <AccordionSummary className={classes.back}
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h5 >{props.brand}</h5>
        </AccordionSummary>
        <AccordionDetails>
             <text className={classes.Box}>Complaint</text>
        </AccordionDetails>

        {/* <AccordionDetails>
             <text className={classes.Box}>Suggetion:{props.sugg}</text>
        </AccordionDetails> */}
      </Accordion>




     
    </div>
  );
}

