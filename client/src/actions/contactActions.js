import {FETCH_CONTACTS, NEW_CONTACT} from './types';

const apiUrl = 'http://localhost:3001/api/contacts'

export const fetchContacts = ()=> dispatch =>{
    
        fetch(apiUrl)
            .then(resp => resp.json())
            .then(contacts => dispatch({
                type: FETCH_CONTACTS,
                payload: contacts
            }))
   
}

export const newContact = (contactInput) => dispatch => {
    
    fetch(apiUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(contactInput)
        })
            .then(res => res.json())
            .then(contact =>dispatch ({
                type: NEW_CONTACT,
                payload: contact
            }))

}