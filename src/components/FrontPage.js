import React, { Component } from 'react';
import { withRouter } from 'react-router';
// import logo from '../images/3.png';
import icon1 from '../images/ic3.png';
import icon2 from '../images/ic2.png';
import icon3 from '../images/ic1.png';

class FrontPage extends Component {
    constructor(props) {
        super(props)
        // this.handleServices1 = this.handleServices1.bind(this)
        // this.handleServices2 = this.handleServices2.bind(this)
        // this.handleServices3 = this.handleServices3.bind(this)
        // this.handleServices4 = this.handleServices4.bind(this)
        // this.handleVerticals1 = this.handleVerticals1.bind(this)
        // this.handleVerticals2 = this.handleVerticals2.bind(this)
        // this.handleVerticals3 = this.handleVerticals3.bind(this)
        // this.handleVerticals4 = this.handleVerticals4.bind(this)
        // this.handleVerticals5 = this.handleVerticals5.bind(this)


    }
    // listenScrollEvent = e => {
    //     if (window.scrollY != 0) {
    //         this.setState({ 'background-color': 'black' })
    //     } else {
    //         this.setState({ 'background-color': 'white' })
    //     }
    // }

    // componentDidMount() {
    //     window.addEventListener('scroll', this.listenScrollEvent)
    // }
    // handleServices1(e) {
    //     e.preventDefault();
    //     this.props.history.push("/Services1");
    // }
    // handleServices2(e) {
    //     e.preventDefault();
    //     this.props.history.push("/Services2");
    // }
    // handleServices3(e) {
    //     e.preventDefault();
    //     this.props.history.push("/Services3");
    // }
    // handleServices4(e) {
    //     e.preventDefault();
    //     this.props.history.push("/Services4");
    // }
    // handleVerticals1(e) {
    //     e.preventDefault();
    //     this.props.history.push("/Verticals1");
    // }
    // handleVerticals2(e) {
    //     e.preventDefault();
    //     this.props.history.push("/Verticals2");
    // }
    // handleVerticals3(e) {
    //     e.preventDefault();
    //     this.props.history.push("/Verticals3");
    // }
    // handleVerticals4(e) {
    //     e.preventDefault();
    //     this.props.history.push("/Verticals4");
    // }
    // handleVerticals5(e) {
    //     e.preventDefault();
    //     this.props.history.push("/Verticals5");
    // }

    render() {
        // let hdrStyle = {
        //     position: 'relative',
        //     'background-color': 'transparent'
        // }

        // if (window.scrollY != 0) {
        //     hdrStyle = {
        //         position: 'fixed',
        //         'background-color': 'white',
        //         'margin-top': '-20px',
        //         '-webkit-text-fill-color': 'black',

        //     };

        // }

        return (
            <div>
                <div className="grid1">
                    {this.props.children[0]}
                    {this.props.children[1]}
                    {/* <div className="Slideshow">
                        <slider>
                            <slide><p>Process Gap Analysis</p>
                                <a>Implementing a strategy to cover the gap </a></slide>
                            <slide><p>Enterprise Software Development</p></slide>
                            <slide><p>IT Consulting</p></slide>
                            <slide><p>It Support/Maintenance</p></slide>
                        </slider>
                    </div> */}
                    {/* <div className="header" style={hdrStyle}>
                        <div className="image">
                            <img src={logo} />  
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
                                    <a href="#">Procurement</a>
                                    <a href="#">CRM</a>
                                    <a href="#">Order Management</a>
                                    <a href="#">Supply Chain Management</a>
                                    <a href="#">Finance</a>
                                    <a href="#">HR</a>
                                    <a href="#">Inventory Management</a>
                                </div>
                            </div>
                            <a className="contact"><span className="contactBox">Contact US</span></a>
                        </div>
                    </div> */}
                    <div className="space">
                    </div>
                    <div class="row">
                        <div class="column">
                            <img src={icon1} className="circle" />
                            <h2 >Process Gap Analysis</h2>
                            <p >We find the gap between a companies potential and its actual standing in the market. There will always be a difference in what the company desires and what it has achieved.</p>
                            <button className="seeMore" onClick={this.handleServices1}>See More..</button>
                        </div>
                        <div class="column">
                            <img src={icon2} className="circle" />
                            <h2>Enterprise Software Development</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies.</p>
                            <button className="seeMore" onClick={this.handleServices2}>See More..</button>
                        </div>
                        <div class="column">
                            <img src={icon3} className="circle" />
                            <h2>It Support/Maintenance</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet pretium urna. Vivamus venenatis velit nec neque ultricies.</p>
                            <button className="seeMore" onClick={this.handleServices4}>See More..</button>
                        </div>
                    </div>
                    <div className="text-quote">

                        <h2>ADVANCED WEB & MOBILE SOLUTIONS. ENTERPRISE APPS & PORTALS.</h2>
                        <p>Full-cycle servicing that covers every aspect of app production and implementation.</p>

                    </div>
                    <div>
                        <div className="vericalsdis1"><h2>Pharma</h2><p>aissdbgklvjgffk; jghaRUI;XCJKAG; JBSDK;VJGHsdbjk</p></div>
                        <div className="vericalsdis2"><h2>Retail</h2><p>aissdbgklvjgffk; jghaRUI;XCJKAG; JBSDK;VJGHsdbjk</p></div>
                        <div className="vericalsdis3"><h2>Manufacturing</h2><p>aissdbgklvjgffk; jghaRUI;XCJKAG; JBSDK;VJGHsdbjk</p></div>
                        <div className="vericalsdis4"><h2>Finance</h2><p>aissdbgklvjgffk; jghaRUI;XCJKAG; JBSDK;VJGHsdbjk</p></div>
                        <div className="Servicesdis1"><h2>Procurement</h2><p>aissdbgklvjgffk; jghaRUI;XCJKAG; JBSDK;VJGHsdbjk</p></div>
                        <div className="Servicesdis2"><h2>CRM</h2><p>aissdbgklvjgffk; jghaRUI;XCJKAG; JBSDK;VJGHsdbjk</p></div>
                        <div className="Servicesdis3"><h2>Finance</h2><p>aissdbgklvjgffk; jghaRUI;XCJKAG; JBSDK;VJGHsdbjk</p></div>
                        <div className="Servicesdis4"><h2>HR</h2><p>aissdbgklvjgffk; jghaRUI;XCJKAG; JBSDK;VJGHsdbjk</p></div>
                    </div>

                    {/* <div className="footer">
                        <p>Contact us at</p>
                        <p>Mail Id:<a>Mail@lifyseit.com</a></p>
                        <p>Phone: 040-2720 0813</p>
                        <p>9014015668</p>
                    </div> */}
                    {this.props.children[2]}
                </div>
            </div>





        );
    }
}



export default withRouter(FrontPage);