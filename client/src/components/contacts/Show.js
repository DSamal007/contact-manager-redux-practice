import React from 'react'
import { connect } from 'react-redux'

function ContactShow(props) {
    return (
        <div>
        { props.contact ? (
            <div>
                <h1>{props.contact.name} {props.contact.email} {props.contact.mobile}</h1>
            </div>
        ) : (
            <div>
                loading...
            </div>
        ) }
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        contact: state.contacts.find(contact => contact._id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(ContactShow)