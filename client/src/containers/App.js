import React, { Component } from 'react'
import './App.css';
import Contacts from './Contacts';
import MainContainer from './MainContainer'
import Navbar from '../components/Navbar';


 
class App extends Component {
  
    render() { 
        return ( 
            
                <div>
                    <MainContainer/>
                    <Navbar/>
                </div> 
        );
    }
}
 
export default App;

