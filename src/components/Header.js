import React, { Component } from 'react';
import { withRouter } from 'react-router';
import logo from '../images/3.png';

class Header extends Component {
    constructor(props) {
        super(props)
        this.handleHome = this.handleHome.bind(this)
        this.handleServices1 = this.handleServices1.bind(this)
        this.handleServices2 = this.handleServices2.bind(this)
        this.handleServices3 = this.handleServices3.bind(this)
        this.handleServices4 = this.handleServices4.bind(this)
        this.handleVerticals1 = this.handleVerticals1.bind(this)
        this.handleVerticals2 = this.handleVerticals2.bind(this)
        this.handleVerticals3 = this.handleVerticals3.bind(this)
        this.handleVerticals4 = this.handleVerticals4.bind(this)
        this.handleVerticals5 = this.handleVerticals5.bind(this)
        this.handleSolutions1 = this.handleSolutions1.bind(this)
        this.handleSolutions2 = this.handleSolutions2.bind(this)
        this.handleSolutions3 = this.handleSolutions3.bind(this)
        this.handleSolutions4 = this.handleSolutions4.bind(this)
        this.handleSolutions5 = this.handleSolutions5.bind(this)
        this.handleSolutions6 = this.handleSolutions6.bind(this)
        this.handleSolutions7 = this.handleSolutions7.bind(this)
        this.handleContactUs = this.handleContactUs.bind(this)
    }
    listenScrollEvent = e => {
        if (window.scrollY != 0) {
            this.setState({ 'background-color': 'black' })
        } else {
            this.setState({ 'background-color': 'white' })
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }
    handleHome(e){
        e.preventDefault();
        this.props.history.push("/");
    }
    handleServices1(e) {
        e.preventDefault();
        this.props.history.push("/Services1");
    }
    handleServices2(e) {
        e.preventDefault();
        this.props.history.push("/Services2");
    }
    handleServices3(e) {
        e.preventDefault();
        this.props.history.push("/Services3");
    }
    handleServices4(e) {
        e.preventDefault();
        this.props.history.push("/Services4");
    }
    handleVerticals1(e) {
        e.preventDefault();
        this.props.history.push("/Verticals1");
    }
    handleVerticals2(e) {
        e.preventDefault();
        this.props.history.push("/Verticals2");
    }
    handleVerticals3(e) {
        e.preventDefault();
        this.props.history.push("/Verticals3");
    }
    handleVerticals4(e) {
        e.preventDefault();
        this.props.history.push("/Verticals4");
    }
    handleVerticals5(e) {
        e.preventDefault();
        this.props.history.push("/Verticals5");
    }
    handleSolutions1(e){
        e.preventDefault();
        this.props.history.push("/Solutions1");
    }
    handleSolutions2(e){
        e.preventDefault();
        this.props.history.push("/Solutions2");
    }
    handleSolutions3(e){
        e.preventDefault();
        this.props.history.push("/Solutions3");
    }
    handleSolutions4(e){
        e.preventDefault();
        this.props.history.push("/Solutions4");
    }
    handleSolutions5(e){
        e.preventDefault();
        this.props.history.push("/Solutions5");
    }
    handleSolutions6(e){
        e.preventDefault();
        this.props.history.push("/Solutions6");
    }
    handleSolutions7(e){
        e.preventDefault();
        this.props.history.push("/Solutions7");
    }
    handleContactUs(e){
        e.preventDefault();
        this.props.history.push("/Contactus");
       
        
    }
    render() {
        let hdrStyle = {
            position: 'relative',
            'background-color': 'transparent'
        }
         
        if (window.scrollY != 0) {
            hdrStyle = {
                position: 'fixed',
                'background-color': 'white',
                'margin-top': '-20px',
                '-webkit-text-fill-color': 'black',

            };

        }
        return (
            <div className="header" style={hdrStyle}>
                <div className="image">
                    <img src={logo} onClick={this.handleHome}/>
                </div>
                <div className="navItems">
                    <div className="aboutus">
                        <a>About Us</a>
                    </div>
                    <div className="dropdown">
                        <a>Services</a>
                        <div className="dropdown-content">
                            <a href="#" onClick={this.handleServices1}>Process Gap Analysis</a>
                            <a href="#" onClick={this.handleServices2}>Enterprice Software Development</a>
                            <a href="#" onClick={this.handleServices3}>IT Consulting</a>
                            <a href="#" onClick={this.handleServices4}>It Support/Maintenance</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <a>Verticles</a>
                        <div className="dropdown-content">
                            <a href="#" onClick={this.handleVerticals1}>Life Science</a>
                            <a href="#" onClick={this.handleVerticals2}>Retail</a>
                            <a href="#" onClick={this.handleVerticals3}>Manufacturing</a>
                            <a href="#" onClick={this.handleVerticals4}>Finance</a>
                            <a href="#" onClick={this.handleVerticals5}>Shipping, Transporting & Logistics</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <a>Solutions</a>
                        <div className="dropdown-content">
                            <a href="#" onClick={this.handleSolutions1}>Procurement</a>
                            <a href="#" onClick={this.handleSolutions2}>CRM</a>
                            <a href="#" onClick={this.handleSolutions3}>Order Management</a>
                            <a href="#" onClick={this.handleSolutions4}>Supply Chain Management</a>
                            <a href="#" onClick={this.handleSolutions5}>Finance</a>
                            <a href="#" onClick={this.handleSolutions6}>HR</a>
                            <a href="#" onClick={this.handleSolutions7}>Inventory Management</a>
                        </div>
                    </div>
                    <a className="contactBox" onClick={this.handleContactUs}>Contact US</a>
                </div>
            </div>
        )
    }
};

export default withRouter(Header);