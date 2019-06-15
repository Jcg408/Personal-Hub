import React from 'react';

const ContactCard =({contact}) => (
    <div key={contact.id} className="ContactCard">
        <h2>{contact.firstname} {contact.lastname}</h2>
        <h3>{contact.phone}</h3>
        <h3>{contact.email}</h3>
    </div>
)




export default ContactCard;