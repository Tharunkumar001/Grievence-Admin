import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import LoginForm from './Loginpage/login';
import AdminPage from './AdminPage/Admin';
import Stats from './NavComponents/Stats';


function App(){

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={LoginForm} />    
                    <Route path="/Admin" component={AdminPage} />
                    <Route path="/stats" component={Stats} />
                </Switch>
            </BrowserRouter>
           
        </div>
    )
}

export default App
