import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Form, Field } from 'react-final-form'
import Button from '@material-ui/core/Button';

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
                            <Field
                                label="Last name"
                                name="lastName"
                                component={TextField}
                                type="text"
                            />
                        </div>
                        <div>
                            <Field
                                label="First name"
                                name="firstName"
                                component={TextField}
                                type="text"
                            />
                        </div>

                        <div>
                            <Field
                                label="Email"
                                name="email"
                                component={TextField}
                                type="email"
                            />
                        </div>
                        <div>
                            <Field
                                label="Phone number"
                                name="phoneNumber"
                                component={TextField}
                                type="text"
                            />
                        </div>
                        <div>
                            <Field
                                label="Object"
                                name="messageObject"
                                component={TextField}
                                type="text"
                            />
                        </div>
                        <div>
                            <Field
                                label="Message"
                                name="messageContent"
                                component={TextField}
                                multiline
                                rows={5}
                            />
                        </div>
                            <Button variant="contained" color="primary"  type="submit" disabled={submitting}>
                                Submit
                            </Button>
                    </form>
                )}
            />
            )
    }

}
export default ContactForm;