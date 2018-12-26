import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { withRouter } from 'react-router';



class CheckOut extends Component {
    constructor(props) {
        super(props)
        this.state = { plantAddress: { Address1: "", Address2: "", Area: "", City: "", State: "", Country: "" }, paymentTerm: { Initial: "", After: "" } }
        this.handlePlant = this.handlePlant.bind(this)
        this.handlePaymentTerm = this.handlePaymentTerm.bind(this)
        this.handleOrders=  this.handleOrders.bind(this)

    }
    componentWillMount() {
        let address = {}
        address.Address1 = "312B Santosh Arcade,"
        address.Address2 = "Netaji Nagar,"
        address.Area = "Dilsukh Nagar,"
        address.City = "Hyderabad,"
        address.State = "Telangana,"
        address.Country = "India"
        this.setState({ plantAddress: address })

        let payment = {}
        payment.Initial = "On order 30% payment"
        payment.After = "after receiving products remaining amount"
        this.setState({ paymentTerm: payment })

    }
    handlePlant(e) {
        let address = {}
        if (e.target.value === " Plant1") {
            address.Address1 = "312B Santosh Arcade,"
            address.Address2 = "Netaji Nagar,"
            address.Area = "Dilsukh Nagar,"
            address.City = "Hyderabad,"
            address.State = "Telangana,"
            address.Country = "India"
            this.setState({ plantAddress: address })
        } else if (e.target.value === "Plant2") {
            address.Address1 = "312C Santosh Arcade,"
            address.Address2 = "Netaji Nagar,"
            address.Area = "Dilsukh Nagar,"
            address.City = "Hyderabad,"
            address.State = "Telangana,"
            address.Country = "India"
            this.setState({ plantAddress: address })
        }
        else if (e.target.value === "Plant3") {
            address.Address1 = "312D Santosh Arcade,"
            address.Address2 = "Netaji Nagar,"
            address.Area = "Dilsukh Nagar,"
            address.City = "Hyderabad,"
            address.State = "Telangana,"
            address.Country = "India"
            this.setState({ plantAddress: address })
        } else {
            address.Address1 = "312E Santosh Arcade,"
            address.Address2 = "Netaji Nagar,"
            address.Area = "Dilsukh Nagar,"
            address.City = "Hyderabad,"
            address.State = "Telangana,"
            address.Country = "India"
            this.setState({ plantAddress: address })
        }
    }
    handlePaymentTerm(e) {
        let payment = {}
        if (e.target.value === "Term1") {
            payment.Initial = "On order 30% payment"
            payment.After = "after receiving products remaining amount"
            this.setState({ paymentTerm: payment })
        } else if (e.target.value === "Term2") {
            payment.Initial = "On order 25% payment"
            payment.After = "after receiving products remaining amount"
            this.setState({ paymentTerm: payment })
        }
        else if (e.target.value === "Term3") {
            payment.Initial = "On order 28% payment"
            payment.After = "after receiving products remaining amount"
            this.setState({ paymentTerm: payment })
        }
    }
    handleOrders(e){
        e.preventDefault();
        this.props.history.push("/Orders");
    }

    render() {

        let view;
        let subtotAmount = 0
        view = this.props.cartItems.map(cart => {
            subtotAmount = subtotAmount + cart.price - (cart.price * ( cart.discount / 100))
            return (
                <div className="row">
                    <div className="col-md-3">{cart.name}</div>
                    <div className="col-md-3">{cart.quantity}</div>
                    <div className="col-md-3">{cart.price}</div>
                    <div className="col-md-3">{cart.discount}</div>
                    <div className="col-md-3">X</div>
                </div>
            )

        });

        let total = this.props.totalAmount - (this.props.totalAmount * ( this.props.discount / 100))

        return (
            <div>
                <div className="table">
                    {view}
                </div>
                <div className="subTotal">
                    <div>Sub Total = {subtotAmount}</div>
                    <div>Discount = {this.props.discount} </div>
                    <div>Total = {total}</div>
                </div><hr />


                <div className="plantAddress">
                    <label>Address</label>
                    <select onChange={this.handlePlant}>
                        <option>Plant1</option>
                        <option>Plant2</option>
                        <option>Plant3</option>
                        <option>Plant4</option>
                    </select>
                    <div>
                        <p>{this.state.plantAddress.Address1}
                            {this.state.plantAddress.Address2}
                            {this.state.plantAddress.Area}
                            {this.state.plantAddress.City}
                            {this.state.plantAddress.State}
                            {this.state.plantAddress.Country}</p>
                    </div>
                </div><hr />
                <div className="Sipping_type">
                    <label>Sipping Type</label>
                    <select>
                        <option>Air</option>
                        <option>Seaway</option>
                        <option>Ground</option>
                    </select>
                </div><hr />
                <div className="ScheduleDD">
                    <label>Schedule Delivery Date:</label>
                    <DatePick /><hr />
                    <label>Expected Delivery Date:</label>
                    <p>{this.props.startDate}</p>
                </div><hr />
                <div>
                    <label>Payment Terms</label>
                    <select onChange={this.handlePaymentTerm}>
                        <option>Term1</option>
                        <option>Term2</option>
                        <option>Term3</option>
                    </select>
                    <div>
                        <p>{this.state.paymentTerm.Initial}
                            {this.state.paymentTerm.After}
                        </p>
                    </div>
                </div><hr />
                <div>
                    <button onClick={this.handleOrders}>order</button>
                </div>
            </div>

        )

    }
}


export default withRouter(CheckOut); 

class DatePick extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                minDate={this.state.startDate}
            />
        );
    }

}