import React from 'react' 
import { startAddContact} from '../../actions/contacts'
import { connect } from 'react-redux'
// import isEmpty from 'lodash/isEmpty'
// import { Alert } from 'reactstrap'
// import { clearErrors } from '../../actions/formErrors'

class ContactForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: props.name||'', 
            email: props.email||'',
            mobile: props.mobile||''            
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault() 
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile
        }
        this.props.dispatch(startAddContact(formData))
    }   


    render() {
        return (
            <div>
                <h2>Add A New Contact</h2>                
                <form onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="name">Name</label> 
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name" id="name" className="form-control" />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" value={this.state.email} onChange={this.handleChange} name="email" id="email" className="form-control"/>
                    </div>
                    

                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="text" value={this.state.mobile} onChange={this.handleChange} name="mobile" id="mobile" className="form-control"/>
                    </div>
                    
                    <input type="submit" className="btn btn-success" />
                </form>
            </div>
        )
    }
}

export default connect()(ContactForm)