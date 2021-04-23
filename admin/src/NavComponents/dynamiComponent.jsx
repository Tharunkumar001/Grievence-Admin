import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from 'react-bootstrap/Card';
import { Button, CardContent, TextField } from '@material-ui/core';

import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

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
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  sendbtn:{
    border:"2px solid black",
    backgroundColor:"blue",
    border:"none",
    float:"right"
  },
  comptext:{
    variant:"filled",
    borderBottom:"2px solid blue",
    width:"100%",
    padding:"5px",
   
    
  }
  // heading: {
  //   fontSize: theme.typography.pxToRem(15),
  //   fontWeight: theme.typography.fontWeightRegular,
  // },
}));

export default function AdminTab(props) {

  const classes = useStyles();
  const [open,setOpen] = useState(false);
  const [currentMail, setCurrentMail] = useState("");
// function popup(event) {
//   // var alertFor = document.getElementsByClassName("mailValue").value;
//   alert(event.target.);
// }
  return (
    <div className={classes.root} >
      <Card className={classes.Box} type="button" >

        <CardContent value={props.mail}  className={classes.mailValue} onClick = {() => {setOpen(true);setCurrentMail(props.mail);}}>{props.comp}</CardContent>
        {/* <CardContent>{props.mail}</CardContent> */}
       
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

          <text className={classes.comptext}>{props.comp}</text><br /><br />

          <TextField
          id="filled-full-width"
          label="Responce"
          style={{ margin: 8 }}
          placeholder="type here.."
       
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />

        <label><Button className={classes.sendbtn}>Send</Button></label>

            
          </div>
        </Fade>
      </Modal>

    </div>
  );
}


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: '25ch',
//   },
// }));

// export default function LayoutTextFields() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <div>
//         <TextField
//           id="standard-full-width"
//           label="Label"
//           style={{ margin: 8 }}
//           placeholder="Placeholder"
//           helperText="Full width!"
//           fullWidth
//           margin="normal"
//           InputLabelProps={{
//             shrink: true,
//           }}
//         />
//         <TextField
//           label="None"
//           id="margin-none"
//           defaultValue="Default Value"
//           className={classes.textField}
//           helperText="Some important text"
//         />
//         <TextField
//           label="Dense"
//           id="margin-dense"
//           defaultValue="Default Value"
//           className={classes.textField}
//           helperText="Some important text"
//           margin="dense"
//         />
//         <TextField
//           label="Normal"
//           id="margin-normal"
//           defaultValue="Default Value"
//           className={classes.textField}
//           helperText="Some important text"
//           margin="normal"
//         />
//       </div>
//       <div>
//         <TextField
//           id="filled-full-width"
//           label="Label"
//           style={{ margin: 8 }}
//           placeholder="Placeholder"
//           helperText="Full width!"
//           fullWidth
//           margin="normal"
//           InputLabelProps={{
//             shrink: true,
//           }}
//           variant="filled"
//         />
//         <TextField
//           label="None"
//           id="filled-margin-none"
//           defaultValue="Default Value"
//           className={classes.textField}
//           helperText="Some important text"
//           variant="filled"
//         />
//         <TextField
//           label="Dense"
//           id="filled-margin-dense"
//           defaultValue="Default Value"
//           className={classes.textField}
//           helperText="Some important text"
//           margin="dense"
//           variant="filled"
//         />
//         <TextField
//           label="Normal"
//           id="filled-margin-normal"
//           defaultValue="Default Value"
//           className={classes.textField}
//           helperText="Some important text"
//           margin="normal"
//           variant="filled"
//         />
//       </div>
//       <div>
//         <TextField
//           id="outlined-full-width"
//           label="Label"
//           style={{ margin: 8 }}
//           placeholder="Placeholder"
//           helperText="Full width!"
//           fullWidth
//           margin="normal"
//           InputLabelProps={{
//             shrink: true,
//           }}
//           variant="outlined"
//         />
//         <TextField
//           label="None"
//           id="outlined-margin-none"
//           defaultValue="Default Value"
//           className={classes.textField}
//           helperText="Some important text"
//           variant="outlined"
//         />
//         <TextField
//           label="Dense"
//           id="outlined-margin-dense"
//           defaultValue="Default Value"
//           className={classes.textField}
//           helperText="Some important text"
//           margin="dense"
//           variant="outlined"
//         />
//         <TextField
//           label="Normal"
//           id="outlined-margin-normal"
//           defaultValue="Default Value"
//           className={classes.textField}
//           helperText="Some important text"
//           margin="normal"
//           variant="outlined"
//         />
//       </div>
//     </div>
//   );
// }
