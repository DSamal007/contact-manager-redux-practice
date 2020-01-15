import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
// import isEmpty from 'lodash/isEmpty'
import { connect } from 'react-redux'

import Home from './components/Home'

import Register from './components/users/Register'
import Login from './components/users/Login'
import UserAccount from './components/users/Account'

import ContactsList from './components/contacts/List'
import ContactShow from './components/contacts/Show'

import {startRemoveUser} from './actions/user'
import swal from 'sweetalert'

function App(props) {

  const handleLogout = () => {
    props.dispatch(startRemoveUser())
}


  return (
    <BrowserRouter>
      <div className="container-fluid">

        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          {
            !localStorage.getItem('token')? (
              <React.Fragment>
                <li className="nav-item">
                    <Link to="/users/register" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/users/login" className="nav-link">Login</Link>
                </li>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  <li className="nav-item">
                    <Link to="/contacts" className="nav-link">Contacts</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/users/account" className="nav-link">Account</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/users/login" className="nav-link" onClick={()=>{
            swal({
              title: "Are you sure !! you want to log out?",
              icon: "warning",
              buttons: true,
              dangerMode: true,
            })
            .then((willDelete) => {
              if (willDelete) {
                swal("Successfully Logged out", {
                  icon: "success",
                });               
                handleLogout()
              } 
            })
            }}>Logout</Link>
                  </li>
                </React.Fragment>
              )
          }
        </ul>          
       
          <Route path="/" component={Home} exact={true} />
          <Route path="/users/register" component={Register} />
          <Route path="/users/login" component={Login} />
          <Route path="/users/account" component={UserAccount} />

          <Route path="/contacts" component={ContactsList} exact={true} />
          <Route path="/contacts/:id" component={ContactShow} />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user 
  }
}
export default connect(mapStateToProps)(App);
