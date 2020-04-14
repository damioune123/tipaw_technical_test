import React, { Component } from 'react';
import { TextField } from 'final-form-material-ui';
import { Form, Field } from 'react-final-form'
import { Button, Grid } from '@material-ui/core';

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

                        <Grid container alignItems="flex-start" spacing={2}>
                            <Grid item xs={12}>
                                <Field
                                        label="Last name"
                                        name="lastName"
                                        fullWidth
                                        component={TextField}
                                        required={true}
                                        type="text"
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    label="First name"
                                    fullWidth
                                    name="firstName"
                                    component={TextField}
                                    required={true}
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    component={TextField}
                                    required={true}
                                    type="email"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Field
                                        fullWidth
                                        label="Phone number"
                                        name="phoneNumber"
                                        component={TextField}
                                        type="text"
                                    />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    fullWidth
                                    label="Object"
                                    name="messageObject"
                                    component={TextField}
                                    required={true}
                                    type="text"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Field
                                    fullWidth
                                    label="Message"
                                    name="messageContent"
                                    component={TextField}
                                    required={true}
                                    multiline
                                    rows={5}
                                />
                            </Grid>
                            <Grid container style={{ marginTop: 16 }}  justify="center" alignItems="center" >
                                <Button  size="large" variant="contained" color="primary"  type="submit" disabled={submitting} spacing={2}>
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                        </form>
                )}
            />
            )
    }

}
export default ContactForm;