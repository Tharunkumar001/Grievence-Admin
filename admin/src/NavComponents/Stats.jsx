import { makeStyles } from '@material-ui/core';
import React from 'react';
import ButtonAppBar from './topNavbar';

import App from './char';
import ChartStat from './char';
const useStyles = makeStyles((theme) => ({

}));
function Stats(props) {
    const classes = useStyles();
    
    return (
       
        <div>
            <ButtonAppBar /><br /><br /><br />

            <h4>Totally #count of student express their self</h4>

            <ChartStat />
        </div>
    );
}

export default Stats;