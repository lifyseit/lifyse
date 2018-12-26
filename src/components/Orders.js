import React, { Component } from 'react';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = { ordercart: { Orders: "", Status: "", OrderedDate: "", ExpetedDeliveryDate: "", TotalAmount: "", PaidAmount: "", DueAmount: "" } }
        this.handledToDisplayOrders = this.handledToDisplayOrders.bind(this)


    }
    componentWillMount() {
        let Details = {}
        Details.order = "1,"
        Details.Status = ""
        Details.OrderedDate = ""
        Details.ExpetedDeliveryDate = ""
        Details.TotalAmount = ""
        Details.PaidAmount = ""
        Details.DueAmount = ""
        this.setState({ ordercart: Details })
    }
    handledToDisplayOrders(e) {
        let Details = {}
        if (e.target.value === "1")
        Details.order = "1,"
            Details.Status = ""
            Details.OrderedDate = ""
            Details.ExpetedDeliveryDate = ""
            Details.TotalAmount = ""
            Details.PaidAmount = ""
            Details.DueAmount = ""
        this.setState({ ordercart: Details })
    }

    render() {
        return (
            <div>
                <div className="ordercart"> 
                    <div class="col-xs-12 no-padding margin-top">
                        <div class="col-xs-1 no-padding" onClick={this.handledToDisplayOrders}>
                            Orders
                  </div>
                        <div class="col-xs-1 no-padding">
                            Status
                  </div>
                        <div class="col-xs-2 no-padding">
                            OrderedDate
                  </div>
                        <div class="col-xs-2 no-padding">
                            ExpetedDeliveryDate
                  </div>
                        <div class="col-xs-2 no-padding">
                            TotalAmount
                  </div>
                        <div class="col-xs-2 no-padding">
                            PaidAmount
                  </div>
                        <div class="col-xs-2 no-padding">
                            DueAmount
                  </div>
                    </div>  
                </div>
                <div>
                    <p>
                        {this.state.ordercart.Orders}
                        {this.state.ordercart.Status}
                        {this.state.ordercart.OrderedDate}
                        {this.state.ordercart.ExpetedDeliveryDate}
                        {this.state.ordercart.TotalAmount}
                        {this.state.ordercart.PaidAmount}
                        {this.state.ordercart.DueAmount}
                    </p>
                </div>
            </div>
            //    <div>
            //           <table>
            //             <tbody>
            //               <tr>
            //                 <td>Orders</td>
            //                 <td>
            //                 <td>Status</td>
            //                 </td>
            //                 <td>
            //                 <td>Expeted Delivery Date</td>
            //                 </td>
            //                 <td>
            //                 <td>Total Amount</td>
            //                 </td>
            //                 <td>
            //                 <td>Paid Amount</td>
            //                 </td>
            //                 <td>
            //                 <td>Due Amount</td>
            //                 </td>
            //               </tr>

            //             </tbody>
            //           </table>
            //         </div>
        )
    }
}
export default Orders; 