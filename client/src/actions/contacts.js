import axios from '../config/axios'


export const setContacts = (contacts) => {
    return {
        type: 'SET_CONTACTS',
        payload: contacts
    }
}

export const addContact = (contact) => {
    return {
        type: 'ADD_CONTACT',
        payload: contact
    }
}


export const startAddContact = (formData) => {
    return (dispatch) => {
        axios.post('/contacts', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
        .then(response => {
            if(response.data.hasOwnProperty('errors')) {
                alert(response.data.message)                
            } else {
                const contact = response.data  
                dispatch(addContact(contact))                
            }
        })
    }
}