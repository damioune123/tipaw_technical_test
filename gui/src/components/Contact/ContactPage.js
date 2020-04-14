import React, { Component } from 'react';
import ContactForm from './ContactForm';
import {postContactAction} from "../../actions/contactActions";
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
    postContactAction: payload => dispatch(postContactAction(payload)),
});
const mapStateToProps = (state) => ({...state.contacts});

class ContactPage extends Component{
    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.error){
            this.handleError(nextProps.error);
        }
        if(nextProps.contact){
            //TODO SUCCESS : SOW TOASTER
            console.log(nextProps.contact)
        }
    }
    handleError = (error) => {
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
        alert(formattedError);
    };
    render(){
        return(<ContactForm onSubmit={(values)=>{
            this.props.postContactAction(values);
        }}/>)
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);