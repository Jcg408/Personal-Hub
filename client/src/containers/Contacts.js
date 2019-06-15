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
            .then(contact => this.setState({contacts: contact}))
    }
   
    render() { 
        const contactData = this.state.contacts.map(contact => 
        <div key = {contact.id} >
            <h3>{contact.name}</h3>
        </div>
        )
        return ( 
            <div>
                <h1>VIP Contacts</h1>
                {contactData}
                <ContactForm/>
            </div>
        );
    }
}
 
export default Contacts;

