import React from 'react';
import ButtonAppBar from '../NavComponents/topNavbar';
import Button from '@material-ui/core/Button';
import './Admin.css';
import { Card, CardActions, Container, List, makeStyles } from '@material-ui/core';
import { Container, Row, Col, Button } from 'reactstrap';
const useStyles = makeStyles((theme) => ({
    list:{
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        float:'left'
    },
    cardbtn:{
        width:'max-content',
        margin:'10px'
    }
}));

const AdminPage = () => {
    const classes = useStyles();
    return(
        <div>
            <ButtonAppBar /><br /><br /><br />


        <Container>
            <Row>
                <Col xs="2" md="3">
                            <Card className = {classes.cardbtn}>
                            <CardActions>
                            <List className = {classes.list} >
                            <Button>Hostel</Button>
                            <Button>Academics</Button>
                            <Button>Transport</Button>
                            <Button>Ragging</Button>
                            <Button>Others</Button>

                        </List>
                            </CardActions>
                        </Card>
                </Col>

                <Col>
                
                </Col>
            </Row>
        </Container>
           
           

        </div>
    )
}

export default AdminPage;