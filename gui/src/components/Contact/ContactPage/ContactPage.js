import React, { Component } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import compose from 'recompose/compose';
import {postContactAction} from "../../../actions/contactActions";
import { connect } from 'react-redux';
import style from './style.module.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from "@material-ui/core/styles";
import Alert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import Grid from '@material-ui/core/Grid';
import dogContact from './dog-contact.png';
import {Paper} from "@material-ui/core";

const mapDispatchToProps = dispatch => ({
    postContactAction: payload => dispatch(postContactAction(payload)),
});
const mapStateToProps = (state) => ({...state.contacts});
const styles = theme => ({
    gridContainer: {
        flexGrow: 1,
        marginTop: -20,
        height: 80
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: 2,
    },
    alert: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
});
class ContactPage extends Component{
    constructor(props, context) {
        super(props, context);
        this.state = {
            toasterSeverity: null,
            toasterMessage : null,
            toasterOpen: false
        }
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.contact){
            this.setState({
                toasterMessage: `Thank you ${nextProps.contact.firstName} ${nextProps.contact.lastName} !`,
                toasterSeverity: 'success',
                toasterOpen: true
            });
        }
        else if(nextProps.error){
            this.setState({
                toasterMessage: this.formatError(nextProps.error),
                toasterOpen: true,
                toasterSeverity: 'error',
            });
        }
    }
    handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({toasterOpen: false})
    };
    formatError = (error) => {
        console.log("Raw API error  - ", error);
        let formattedError = "";
        if (
            error.response &&
            error.response.data &&
            error.response.data.details &&
            error.response.data.details[0] &&
            error.response.data.details[0].message
        ) {
            formattedError = error.response.data.details[0].message;
        } else {
            if (error.response) {
                console.log(`http status : ${error.response.status}`);
            }
            formattedError = JSON.stringify(
                error.response ? `${error.response.data}` : error
            );
        }
        console.log("Formatted API error - ", formattedError);
        return formattedError;
    };

    render(){
        const { classes } = this.props;
        return(
            <div>
                <Snackbar open={this.state.toasterOpen} autoHideDuration={6000} onClose={this.handleCloseAlert}>
                    <Alert className={classes.alert} onClose={this.handleCloseAlert} severity={this.state.toasterSeverity} >
                        {this.state.toasterMessage}
                    </Alert>
                </Snackbar>
                <div className={style.ruban}>
                    <span className={style.question}>Do you have a question ?</span> <br/>
                    <span className={style.subQuestion}>Do not hesitate to reach us through this form.</span>
                </div>
                <Grid container className={classes.gridContainer}>
                    <Grid item xs={10}>
                        <Paper style={{ padding: 16 }} elevation={3}>
                            <Grid container justify="center" spacing={2}>
                                <Grid className={style.dogContact} item xs={5}  spacing={2}>
                                    <img src ={dogContact} style={{   height: '100%', width: '100%'}} />

                                </Grid>
                                <Grid item  xs={5}>
                                    <CardContent>
                                        <ContactForm onSubmit={(values)=> this.props.postContactAction(values)}/>
                                    </CardContent>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>


        )
    }
}
export default compose(
    withStyles(styles, { name: 'ContactPage', withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
)(ContactPage);
