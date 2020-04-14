import React, { Component } from 'react';
import ContactForm from './ContactForm';
class ContactPage extends Component{
    render(){
        return(<ContactForm onSubmit={(values)=>console.log(values)}/>)
    }

}
export default ContactPage;