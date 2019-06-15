import React, { Component } from 'react';
import './App.css';
import Contacts from './Contacts';
import ContactForm from './ContactForm'
 
class App extends Component {
   
    render() { 
        return ( 
            <div>
                <Contacts/>
            </div> 
        );
    }
}
 
export default App;
// need to add routes
