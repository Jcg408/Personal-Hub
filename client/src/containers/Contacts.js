import React from 'react';
import ContactCard from '../components/ContactCard'

const Contacts =(props)=> (
    <div className="ContactsContainer">
        <h1>VIP Contacts</h1>
        {props.contacts.map(contact => <ContactCard contact ={contact}/>)}
    </div>
) 

export default Contacts;