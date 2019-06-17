import React, { Component } from 'react';
import {connect} from 'react-redux';
import {newContact} from '../actions/contactActions';


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            phone: "",
            email: ""
        }
    }

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const contact = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            phone: this.state.phone,
            email: this.state.email
        }

        this.props.newContact(contact)
    }

 
   
    render() { 
        return ( 
            <div>
                Add Contact 
                <form onSubmit={this.handleSubmit} className="contact">
                   <div>
                       <label>First Name:</label>
                       <input type="text" onChange={this.handleChange} name ="firstname" value={this.state.firstname}/>
                        <br/>
                       <label>Last Name:</label>
                       <input type="text" onChange={this.handleChange} name ="lastname" value={this.state.lastname}/>
                       <br/>
                       <label>Phone Number:</label>
                       <input type="text" onChange={this.handleChange} name ="phone" value={this.state.phone}/>
                       <br/>
                       <label>Email: </label>
                       <input type="text" onChange={this.handleChange} name="email" value={this.state.email}/>
                       <br/>
                       <button type="submit">Submit</button>
                   </div>
                </form>
            </div>
         );
    }
}
 
export default connect(null, {newContact}) (ContactForm);