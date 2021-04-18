import { makeStyles } from '@material-ui/core';
import React from 'react';
import Example from './char';
import ButtonAppBar from './topNavbar';

const useStyles = makeStyles((theme) => ({

}));
function Stats(props) {
    const classes = useStyles();
    
    return (
       
        <div>
            <ButtonAppBar /><br /><br /><br />

            <h4>Totally #count of student express their self</h4>

            <Example />
        </div>
    );
}

export default Stats;