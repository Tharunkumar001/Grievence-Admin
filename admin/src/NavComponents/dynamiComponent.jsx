import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';
import { Button, CardContent, CardActionArea } from '@material-ui/core';
// import Hostell from '@material-ui/icons/SendSharp';


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
    border:'2px solid black',
    borderRadius:'5px',
  },
  back:{
    backgroundColor:'aqua'

  },
  Comp:{
    color:'black'
  },resbtn:{
    float:'right',
    blockSize:'2px',
    padding:'5px'
    
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
    <div className={classes.root} >
      <Card className={classes.Box} type="button" onClick={() => {alert("done")}}>

        <CardContent>{props.comp}</CardContent>
        {/* <CardActionArea><Button className={classes.resbtn}><Hostell /></Button> */}
{/* </CardActionArea> */}
      </Card><br />
    </div>
  );
}

