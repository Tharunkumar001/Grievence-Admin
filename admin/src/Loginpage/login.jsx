import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import '@material-ui/core'
import './login.css';
import {useHistory} from 'react-router-dom';
import background from '../gallary/vcet.jpg';
import { TextField } from '@material-ui/core';
import {Cookies} from 'react-cookie';
import Grid from '@material-ui/core/Grid';

function LoginForm(){
   
    const cookie = new Cookies();
  const [details,setDetails] = useState({name:"",password:"",email:""});
  const history = useHistory();

   
 
    
    const submitHandler = (e) => {
        
        e.preventDefault()
       
        if(details.password === 'adminADMIN'){
           
            cookie.set("adminToken",true);
            history.push("/Admin");
        }else{
            document.getElementById("label").style.visibility = 'visible'
        }
      
      
    }
    return(
        <div>
            

            <Grid container spacing={3}>
              
                <Grid item xs={7} md={7}>
                    <div  style={{ backgroundImage: `url(${background})`  }} className="imgDesign">
                        <h1 className="header">GRIEVENCE ADMIN</h1>
                    </div>
                    
                </Grid>

                <Grid item xs={5} md={5}>
                    
                    <Card className="login" style={{width:'16rem',textAlign:'center',marginTop:'50px',backgroundColor:"rgb(194, 45, 181)"}}>
                     <h5>LOGIN</h5>
                    </Card>
                <Card className="login1" style={{width:'16rem',textAlign:'center',backgroundColor:"rgb(202, 180, 191)"}}>
                    <Card.Body>
                        <Form onSubmit={submitHandler}>
                             {/* <TextField className="textField" type="email" placeholder="Email" onChange= {e =>setDetails({...details,email:e.target.value})} value={details.email}  required></TextField><br /><br />

                             <TextField className="textField" type="text" autoComplete="new-password" placeholder="Username" onChange= {e =>setDetails({...details,name:e.target.value})} value={details.name} required></TextField><br /><br /> */}

                             <TextField className="textField" type="password" autoComplete="new-password" placeholder="password"  onChange= {e =>setDetails({...details,password:e.target.value})} value={details.password} required></TextField><br />
                            <label id="label" style={{color:'red',visibility:'hidden'}}>Enter valid passWord</label><br /><br />
                       
                             <button className="buttonStyle" type="submit" value="login" >Login</button><br /><br />
                
                        </Form>
                    </Card.Body>
                </Card>
             </Grid>
                    
                    
            </Grid>

            
    </div>


    );
}

export default LoginForm;
