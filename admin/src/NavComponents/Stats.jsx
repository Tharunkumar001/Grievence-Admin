import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect } from 'react';
import Example from './chart';
import ButtonAppBar from './topNavbar';

const useStyles = makeStyles((theme) => ({

}));
function Stats() {
    const classes = useStyles();
    var count;

    useEffect(() => {
        axios.put("https://grievence-backend.herokuapp.com/getTotalUserDetails").then((res) => {
           console.log(res.data);
        })
    },[count]);

    
    return (
       
        <div>
            <ButtonAppBar /><br /><br /><br />

            <h4>Totally #count of student express their self</h4>

            <Example />
        </div>
    );
}

export default Stats;