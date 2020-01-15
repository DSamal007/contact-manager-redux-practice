import React from 'react'
import { connect } from 'react-redux'
import { startSetUser } from '../../actions/user'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }       
        this.props.dispatch(startSetUser(formData, this.props))
        
    }

    render() {
        return (
            <div className='container col-md-4'>
                <h2>Login Here</h2><br/>
                <Form onSubmit={this.handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" value={this.state.email} onChange={this.handleChange}  name="email" id="email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label for="Password">Password</Label>
        <Input type="password" value={this.state.password} onChange={this.handleChange} name="password" id="Password" placeholder="password" />
      </FormGroup>      
      <Button>Submit</Button>
    </Form>               
              
            </div>
        )
    }
}

export default connect()(Login)