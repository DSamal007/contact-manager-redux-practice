import React from 'react' 
import { connect } from 'react-redux'

function UserAccount(props) {
    return (
        <div>
            <h1>{props.user.username} { props.user.email} {props.user.mobile}</h1>
        </div>
    )
}
 
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(UserAccount)