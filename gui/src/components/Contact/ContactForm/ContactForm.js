import React, { Component } from 'react';
import { TextField } from 'final-form-material-ui';
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
                                required={true}
                                type="text"
                            />
                        </div>
                        <div>
                            <Field
                                label="First name"
                                name="firstName"
                                component={TextField}
                                required={true}
                                type="text"
                            />
                        </div>

                        <div>
                            <Field
                                label="Email"
                                name="email"
                                component={TextField}
                                required={true}
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
                                required={true}
                                type="text"
                            />
                        </div>
                        <div>
                            <Field
                                label="Message"
                                name="messageContent"
                                component={TextField}
                                required={true}
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