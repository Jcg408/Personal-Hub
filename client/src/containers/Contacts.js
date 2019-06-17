import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchContacts} from '../actions/contactActions';
import {Link} from 'react-router-dom';

class Contacts extends Component {
    componentDidMount(){
        this.props.fetchContacts()
      }

    render() { 
        const contactData = this.props.contacts.map(contact => 
        <div key = {contact.id} >
            <h3>{contact.firstname} {contact.lastname}</h3>
            <h4>{contact.phone} - {contact.email}</h4>
            <hr/>
        </div>
        )
        return ( 
            <div>
                <h1>Contacts</h1>
                <div>
                     {contactData} 
                     
                </div>
               <div>
                    <Link to ='/contact/new'>Add a Contact</Link>
               </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      contacts: state.contacts.contactItems
    }
    
  }
  
export default connect (mapStateToProps, {fetchContacts})(Contacts);

