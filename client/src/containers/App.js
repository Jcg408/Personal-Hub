import React, { Component } from 'react';
import './App.css';
import Contacts from './Contacts';
 
class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            contacts: []
        }
    }

    componentDidMount () {
        fetch('http://localhost:3001/api/contacts')
            .then(resp => resp.json())
            .then(contacts => this.setState({contacts}))
            
    }
       
    render() { 
        
        return ( 
            <div className="App">
                <Contacts contacts={this.state.contacts}/>
            </div>
         );
    }
}
 
export default App;