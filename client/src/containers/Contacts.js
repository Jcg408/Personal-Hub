import React, { Component } from 'react';
import ContactCard from '../components/ContactCard'
import ContactForm from './ContactForm'

class Contacts extends Component {
    constructor(props) {
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
            <div className="ContactsContainer">
                <h1>VIP Contacts</h1>
                {this.props.contacts.map(contact => <ContactCard key= {contact.id}contact ={contact}/>)}
                <ContactForm/>
            </div>
        );
    }
}
 
export default Contacts;

