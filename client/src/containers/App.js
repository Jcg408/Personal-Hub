import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from '../components/store';
import './App.css';
import Contacts from './Contacts';
import ContactForm from './ContactForm'
import Photos from './Photos';
import PhotoForm from './PhotoForm';
 
class App extends Component {
  
    render() { 
        return ( 
            <Provider store={store}>
                <div>
                    <Photos/>
                </div> 
            </Provider>
           
        );
    }
}
 
export default App;

