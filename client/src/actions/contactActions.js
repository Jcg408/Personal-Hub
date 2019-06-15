import {FETCH_CONTACTS, NEW_CONTACT} from './types';

export const fetchContacts = ()=> dispatch =>{
    console.log('fetching')
        fetch('http://localhost:3001/api/contacts')
            .then(resp => resp.json())
            .then(contacts => dispatch({
                type: FETCH_CONTACTS,
                payload: contacts
            }))
   
}