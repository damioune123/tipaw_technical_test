import React, { Component } from 'react';
import { Form, Field } from 'react-final-form'
class ContactForm extends Component{
    constructor(props) {
        super(props);
    }
    onSubmit = (values)=>{
        this.props.onSubmit(values);
    };
    render(){
        return(
            <Form
                onSubmit={this.onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Last Name</label>
                            <Field
                                name="lastName"
                                component="input"
                                type="text"
                            />
                        </div>
                        <div>
                            <label>First Name</label>
                            <Field
                                name="firstName"
                                component="input"
                                type="text"
                            />
                        </div>

                        <div>
                            <label>Email</label>
                            <Field
                                name="email"
                                component="input"
                                type="email"
                            />
                        </div>
                        <div>
                            <label>Phone number</label>
                            <Field
                                name="phoneNumber"
                                component="input"
                                type="text"
                            />
                        </div>
                        <div>
                            <label>Object</label>
                            <Field
                                name="messageObject"
                                component="input"
                                type="text"
                            />
                        </div>
                        <div>
                            <label>Message</label>
                            <Field
                                name="messageContent"
                                component="input"
                                type="text"
                            />
                        </div>

                        <div className="buttons">
                            <button type="submit" disabled={submitting}>
                                Submit
                            </button>
                        </div>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
            />
            )
    }

}
export default ContactForm;