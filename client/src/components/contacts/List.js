import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ContactForm from './Form'

function ContactList(props){ 
    return (
        <div className="row">
            <div className="col-md-7">
                <h2>Listing Contacts - {props.contacts.length}</h2><br/>
                <ul className="list-group">
                    {props.contacts.map(contact => {
                        return <li href = {`/contacts/${contact._id}`}className="list-group-item list-group-item-action" key={contact._id}><Link to={`/contacts/${contact._id}`}>{contact.name}</Link></li>    
                    })}
                </ul>
            </div>
            <div className="col-md-5">
                <ContactForm />
            </div>
        </div>
       
    )
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(ContactList)