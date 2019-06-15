import {FETCH_CONTACTS, NEW_CONTACT} from '../actions/types';

const initialState = {
    contactItems: [],
    contactItem: { }
}

export default function (state = initialState, action) {
    switch (action.type) {
       case FETCH_CONTACTS:
           return {
               ...state,
               contactItems: action.payload
           }
           default:
               return state;
    }
}
