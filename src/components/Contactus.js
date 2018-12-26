import React, { Component } from 'react';

class Contactus extends Component {
    render(){
        return(
            <div>
            {this.props.children[0]}
            <div className="cont">
            <h2>Contact Us</h2>
            <p>Thank you for your interest in LIFYSE IT and our services. Please fill out the form below or e-mail us at Mail@LifyseIt.com and we will get back to you promptly regarding your request.</p>
            </div>
            {this.props.children[1]}
            </div>
            )
        }  
    }
    export default Contactus;