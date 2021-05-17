import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Example from './chart';
import ButtonAppBar from './topNavbar';
import CircularProgressWithLabel from "./circleBar";

function Stats() {
    
    const [userCount,setUserCount] = useState(0);

    useEffect(() => {
        axios.put("https://grievence-backend.herokuapp.com/getTotalUserDetails").then((res) => {
        
            setUserCount(res.data.length);
        })
    },[]);
    
    return (
       
        <div>
            <ButtonAppBar /><br /><br /><br />

            <h4>Totally {userCount}  student express their self</h4>

            <Example />
            <h2 style={{fontFamily:"monospace"}}>Unresponded Complaints</h2>
            <CircularProgressWithLabel style={{marginLeft:"auto",marginRight:"auto"}}/>
        </div>
    );
}

export default Stats;