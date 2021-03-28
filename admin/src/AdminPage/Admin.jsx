import React, { useEffect, useState } from 'react';
import ButtonAppBar from '../NavComponents/topNavbar';
import Button from '@material-ui/core/Button';
import './Admin.css';
import { Card, CardActions,List, makeStyles } from '@material-ui/core';
// import { Container, Row, Col } from 'reactstrap';

import Grid from '@material-ui/core/Grid';
import Hostell from '@material-ui/icons/RoomServiceOutlined';
import Transport from '@material-ui/icons/EmojiTransportationOutlined';
import Academic from '@material-ui/icons/BookOutlined';

import Ragging from '@material-ui/icons/RemoveCircleOutline';
import HostelContainer from '../ComplaintRouters/Hostel';
import TransportContainer from '../ComplaintRouters/Transport';
import AcademicContainer from '../ComplaintRouters/Academics';
import RaggingContainer from '../ComplaintRouters/Ragging';
import OtherContainer from '../ComplaintRouters/Others';
const useStyles = makeStyles((theme) => ({
    list:{
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        float:'left',
        
    },
    cardbtn:{
        width:'min-content',
       
        height:"280px",
        position:'fixed'
    },
    dynaminComp:{
        padding:"10px"
    },
    grid:{
        marginTop:"20px"
    },
    btnlist2:{
      marginTop:'50%'
    },
    btnlist3:{
        marginTop:'50%'
      }, btnlist4:{
        marginTop:'50%'
      },
   
}));

const AdminPage = () => {
    const classes = useStyles();
    const [value,setValue] = useState('others');
    const [state,setState] = useState(<HostelContainer />)
    useEffect(() => {
        console.log(value);
    })

    const switchComp = () => {
        switch (value) {
            case 'hostel':
                setState(<HostelContainer />);
                break;
            case 'trans':
                setState(<TransportContainer />)
                break;
            case 'academic':
                setState(<AcademicContainer />)
                break
            case 'ragging':
                setState(<RaggingContainer />)
                break
           
            default:

                break;
        }
    }
    return(
        <div>
            <ButtonAppBar /><br /><br /><br />

    <Grid container spacing={3} className={classes.grid}>
        
        <Grid item xs={2} md={2}>
      
                            <List className = {classes.list}>

                                <Button className={classes.btnlist} value="hostel" onClick={() => {setValue("hostel");switchComp();}}><Hostell /></Button>
                                <Button className={classes.btnlist2} value="trans" onClick={() => {setValue("trans");switchComp();}}><Transport /></Button>
                                <Button className={classes.btnlist3} value="academic" onClick={() => {setValue("academic");switchComp();}}><Academic /></Button>
                                <Button className={classes.btnlist4} value="ragging" onClick={() => {setValue("ragging");switchComp();}}><Ragging /></Button>
                                


                        </List>
                       
        </Grid>
               
                <Grid item xs={5} md={5}>
                    <Card>
                    {state}
                    </Card>
                </Grid>

        
                <Grid item xs={5} md={5}>
                    <Card>
                        <OtherContainer />
                    </Card>       
                </Grid>
      </Grid>
            

       

                            
                      

           

        </div>
    )
}

export default AdminPage;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     height: 140,
//     width: 100,
//   },
//   control: {
//     padding: theme.spacing(2),
//   },
// }));

// export default function SpacingGrid() {
//   const [spacing, setSpacing] = React.useState(2);
//   const classes = useStyles();

//   const handleChange = (event) => {
//     setSpacing(Number(event.target.value));
//   };

//   return (
//     <Grid container className={classes.root} spacing={2}>
//       <Grid item xs={12}>
//         <Grid container justify="center" spacing={spacing}>
//           {[0, 1, 2].map((value) => (
//             <Grid key={value} item>
//               <Paper className={classes.paper} />
//             </Grid>
//           ))}
//         </Grid>
//       </Grid>
//       <Grid item xs={12}>
//         <Paper className={classes.control}>
//           <Grid container>
//             <Grid item>
//               <FormLabel>spacing</FormLabel>
//               <RadioGroup
//                 name="spacing"
//                 aria-label="spacing"
//                 value={spacing.toString()}
//                 onChange={handleChange}
//                 row
//               >
//                 {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
//                   <FormControlLabel
//                     key={value}
//                     value={value.toString()}
//                     control={<Radio />}
//                     label={value.toString()}
//                   />
//                 ))}
//               </RadioGroup>
//             </Grid>
//           </Grid>
//         </Paper>
//       </Grid>
//     </Grid>
//   );
// }
