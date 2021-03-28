import React from 'react';
import ButtonAppBar from '../NavComponents/topNavbar';
import Button from '@material-ui/core/Button';
import './Admin.css';
import { Card, CardActions,List, makeStyles } from '@material-ui/core';
import { Container, Row, Col } from 'reactstrap';
import AdminTab from '../NavComponents/dynamiComponent';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
    list:{
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        float:'left',
        
    },
    cardbtn:{
        width:'max-content',
        margin:'10px',
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
      }
}));

const AdminPage = () => {
    const classes = useStyles();
    return(
        <div>
            <ButtonAppBar /><br /><br /><br />

    <Grid container spacing={3} className={classes.grid}>
        
        <Grid item xs={2} md={2}>
        <Card className = {classes.cardbtn}>
                            <CardActions>
                            <List className = {classes.list} >
                                <Button className={classes.btnlist}>HosTrans</Button>
                                <Button className={classes.btnlist2}>RaggAcad</Button>
                                <Button className={classes.btnlist3}>Others</Button>
                            

                        </List>
                            </CardActions>
                        </Card>
        </Grid>
               
                <Grid item xs={5} md={5}>
                    <Card>
                    <AdminTab />
                    </Card>
                </Grid>

        
                <Grid item xs={5} md={5}>
                    <Card>
                        <AdminTab />
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
