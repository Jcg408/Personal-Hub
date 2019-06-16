import React, { Component } from 'react';
import {connect} from 'react-redux';
import { fetchContacts} from '../actions/contactActions';
import ContactCard from '../components/ContactCard'
import ContactForm from './ContactForm'

class Contacts extends Component {
    componentDidMount(){
        this.props.fetchContacts()
      }

    render() { 
        const contactData = this.props.contacts.map(contact => 
        <div key = {contact.id} >
            <h3>{contact.firstname} {contact.lastname}</h3>
        </div>
        )
        return ( 
            <div>
                <h1>Contacts</h1>
                <div>
                     {contactData}
                </div>
               
                <br/>
                <hr/>
               <div>
                    <ContactForm/>
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

