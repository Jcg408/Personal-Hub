import React from 'react';

class ContactCard extends Component {
    constructor()
        super();
        this.state = []
   
    render() { 
        return (  );
    }
}
 

const ContactCard =({contact}) => (
    <div key={contact.id} className="ContactCard">
        <h2>{contact.firstname} {contact.lastname}</h2>
       
    </div>
)




export default ContactCard;