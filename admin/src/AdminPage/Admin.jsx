import React, { useEffect, useState } from 'react';
import ButtonAppBar from '../NavComponents/topNavbar';
import Button from '@material-ui/core/Button';
import './Admin.css';
import { Card,List, makeStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Hostell from '@material-ui/icons/RoomServiceOutlined';
import Transport from '@material-ui/icons/EmojiTransportationOutlined';
import Academic from '@material-ui/icons/BookOutlined';
import Other from '@material-ui/icons/QuestionAnswerOutlined';
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
        float:'left',
        position:'fixed'
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
      },
     btnlist4:{
        marginTop:'50%'
      },
      btnlist5:{
          marginTop:'50%'
      }
   
}));

const AdminPage = () => {
    const classes = useStyles();
    const [value,setValue] = useState('hostel');
    const [state,setState] = useState(<HostelContainer />)


    const switchComp = (val) => {
        setValue(val);
        switch (val) {

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
            case 'other':
                setState(<OtherContainer />)
                break
            default:

                break;
        }
    }
    return(
        <div className="backImg">
            <ButtonAppBar /><br /><br /><br />

    <Grid container spacing={3} className={classes.grid}>
        
        <Grid item xs={2} md={2}>
      
                            <List className = {classes.list}>

                                <Button className={classes.btnlist} value="hostel" onClick={() => {switchComp("hostel");}}><Hostell /></Button>
                                <Button className={classes.btnlist2} value="trans" onClick={() => {switchComp("trans");}}><Transport /></Button>
                                <Button className={classes.btnlist3} value="academic" onClick={() => {switchComp("academic");}}><Academic /></Button>
                                <Button className={classes.btnlist4} value="ragging" onClick={() => {switchComp("ragging");}}><Ragging /></Button>
                                <Button className={classes.btnlist5} id="btnlist5" value="other"  onClick={() => {switchComp("other");}}><Other /></Button>


                        </List>
                       
        </Grid>
               
                <Grid item xs={5} md={5}>
                    <h5>{value}</h5>
                    <Card className="mediaCard">
                    {state}
                    </Card>
                </Grid>

        
                <Grid item xs={5} md={5} className="otherCard">
                    <h5>Others</h5>
                    <Card >
                        <OtherContainer />
                    </Card>       
                </Grid>
      </Grid>
            

       

                            
                      

           

        </div>
    )
}

export default AdminPage;

