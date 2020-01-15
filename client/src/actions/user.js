import axios from '../config/axios'
import { setContacts } from './contacts'
import swal from 'sweetalert'

export const setUser = (user) => {
    return {
        type: 'SET_USER',
        payload: user
    }
}

export const startGetUser = () => {
    return (dispatch) => {
        Promise.all([axios.get('/users/account', { 
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        }), axios.get('/contacts', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })])
        .then(values => {            
            const [user, contacts ] = values 
            dispatch(setUser(user.data))
            dispatch(setContacts(contacts.data))
            // window.history.push('/')
        })
    }
    
}

////// register
export const startRegisterUser = (formData, props) => {
    return (dispatch) => {
        axios.post('/users/register', formData)
            .then((response) => {
                const data = response.data
                if(data.hasOwnProperty('errors')){
                    swal(data.message)
                } else if(data.hasOwnProperty('errmsg')){
                    swal(data.errmsg)
                } else {
                    swal('Successfully Registered')
                    dispatch(setUser({}))
                    props.history.push('/users/login')
                    // window.reload()
                }
            })
            .catch((err) => {
                swal(err)
            })
    }
}

export const startSetUser = (formData, props) => {
    return (dispatch) => {
        axios.post('/users/login', formData)
            .then(response => {                
                const { token, user } = response.data 
                localStorage.setItem('token', token) 
                dispatch(setUser(user))
                return axios.get('/contacts', {
                    headers: {
                        'x-auth': token
                    }
                })
            })
            .then(response => {
                const contacts = response.data
                dispatch(setContacts(contacts))
                props.history.push('/users/account')
            })
            .catch(err => {
                console.log(err)
            })
    }
}


///////////logout

export const startRemoveUser = (props) => {
    return (dispatch) => {
        axios.delete('/users/logout', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then((response) => {
                // swal(response.data.notice)
                localStorage.clear('x-auth')
                dispatch(setUser({}))                                
                
            })
            .catch((err) => {
                swal(err)
            })
    }
}