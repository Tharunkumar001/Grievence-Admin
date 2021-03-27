import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import '@material-ui/core'
import './login.css';
import {useHistory} from 'react-router-dom';

import { TextField } from '@material-ui/core';
import {Cookies} from 'react-cookie';
import AdminPage from '../AdminPage/Admin';

function LoginForm(){
   
    const cookie = new Cookies();
  const [details,setDetails] = useState({name:"",password:"",email:""});
  const history = useHistory();

   useEffect(() => {
       const validate = cookie.get("adminToken");

       if(validate){
        history.push("/Admin");
       }
   })
 
    
    const submitHandler = (e) => {
        
        e.preventDefault()
       console.log(details.email,details.password);
        if(details.email === "grievence@gmail.com" & details.password === '1234'){
           
            cookie.set("adminToken",true);
            history.push("/Admin");
        }else{
         
            cookie.set("adminToken",false);
        }
      
      
    }
    return(
        <div style={{backgroundImage:"url:(/gallery/vcet.jpg)"}}>
            <h1 className="header">GRIEVENCE ADMIN</h1>
            <Card className="login" style={{width:'16rem',textAlign:'center',marginTop:'50px',backgroundColor:"  rgb(194, 45, 181)"}}>
                <h5>LOGIN</h5>
            </Card>
            <Card className="login1" style={{width:'16rem',textAlign:'center'}}>
                <Card.Body>
                    <Form onSubmit={submitHandler}>
                        <TextField type="email" placeholder="Email" onChange= {e =>setDetails({...details,email:e.target.value})} value={details.email}  required></TextField><br /><br />

                        <TextField type="text" autoComplete="new-password" placeholder="Username" onChange= {e =>setDetails({...details,name:e.target.value})} value={details.name} required></TextField><br /><br />

                        <TextField type="password" autoComplete="new-password" placeholder="password"  onChange= {e =>setDetails({...details,password:e.target.value})} value={details.password} required></TextField><br /><br /><br />

                       
                        <button className="buttonStyle" type="submit" value="login" >Login</button><br /><br />
                
                    </Form>
                </Card.Body>
            </Card>
        </div>


    );
}

export default LoginForm;
