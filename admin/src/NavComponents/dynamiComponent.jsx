import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';
import { Button, CardContent, TextField } from '@material-ui/core';
import Tick from '@material-ui/icons/DoneAll'
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import emailjs from 'emailjs-com';
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
    marginTop:'10px'
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
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '5px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  sendbtn:{
    border:"2px solid black",
    backgroundColor:"blue",
    padding:"1px",
    float:"right"
  },
  comptext:{
    borderBottom:"2px solid blue",
    padding:"5px",
  },
  mailContent:{
    visibility:"hidden"
  },

}));

export default function AdminTab(props) {

  const classes = useStyles();
  const [open,setOpen] = useState(false);
  const [currentMail, setCurrentMail] = useState("");
  const [tick,setTick] = useState(false);

  function sendEmail(e){
    e.preventDefault();
    
    emailjs.sendForm('service_qizxdg8', 'template_ff8khfm', '.emailForm','user_3n9u5O0jVb9Xn5Wa1JSRw')
    
      .then((result) => {
          alert("Mail sended Properly");
          setTick(true);
      }, (error) => {
          alert("User provide invalid mail address");
      });
  }

  return (
    <div className={classes.root} >
      <Card className={classes.Box} type="button">

        <CardContent value={props.mail} className={classes.mailValue} onClick = {() => {setOpen(true);setCurrentMail(props.mail);}}>{props.comp}</CardContent>
        <Tick className="doneAll" visibility = {tick ? "visible" : "hidden"} />
      </Card><br />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => {setOpen(false)}}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <h4>Email</h4>

        <form onSubmit = {sendEmail} className="emailForm">
      
        <input className={classes.comptext} value={props.comp} name="complaint"></input><br /><br />

          <TextField
            className="filled-full-width"
            label="Responce"
            style={{ margin: 8 }}
            placeholder="type here.."
            name="responce"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
          />
          
           <input name="mail" value={props.mail} className={classes.mailContent}></input>

          <label><Button type="submit"  className={classes.sendbtn}>Send</Button></label>

        </form>

      </div>
        </Fade>
      </Modal>

    </div>
  );
}

