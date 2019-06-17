import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import Main from '../components/Main';
import Contacts from './Contacts';

import ContactForm from './ContactForm';
import Navbar from '../components/Navbar';

class App extends Component {
  
    render() { 
        return ( 
            
                <div>
                    <Navbar/>

                   <Switch>
                    <Route exact path='/' component={Main} />
                    <Route exact path='/contacts' component={Contacts} />
                    <Route exact path='/contact/new' component={ContactForm} />
                    
                   </Switch>
                </div> 
                
        );
    }
}
 
export default App;

