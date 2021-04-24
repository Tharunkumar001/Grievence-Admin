import React from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { List } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  app:{
    position:'fixed',
  
  },

}));

export default function ButtonAppBar() {
  const history = useHistory(); 

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar>
        
          <Typography variant="h6" className={classes.title}>
            Grievence of VCET
          </Typography>

          <List className={classes.listbtn}>
            <Button onClick = {() => history.push("/stats")}>Stats</Button>
            <Button onClick = {() => history.push("/profile")}>Profile</Button>
          </List>
      
        </Toolbar>
      </AppBar>
    </div>
  );
}
